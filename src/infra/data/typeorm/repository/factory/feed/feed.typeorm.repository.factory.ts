import { HttpException, HttpStatus } from '@nestjs/common';
import {
  DataSource,
  FindManyOptions,
  FindOptionsRelations,
  FindOptionsSelect,
  Like,
  Repository,
} from 'typeorm';

import { IFeedTypeormRepository } from 'src/infra/data/interactor/repository/feed/orm_interface/feed.typeorm.repository.interface';
import { FeedVo } from '../../../vo/feed.vo';
import { FeedQueryDto, SortParam } from 'src/domain/service/dto/feed.dto';

export class FeedTypeormRepositoryFactory {
  static getRepository = (dataSource: DataSource): IFeedTypeormRepository => {
    const repository = dataSource.getRepository(FeedVo);
    const feedTypeormRepository =
      new FeedTypeormRepositoryFactory().extendRepository(repository);
    return feedTypeormRepository;
  };

  private extendRepository(
    repository: Repository<FeedVo>,
  ): IFeedTypeormRepository {
    return repository.extend({
      findWithFeedQuery: async (queryDto: FeedQueryDto) => {
        const userId = queryDto.userId;
        let queryParameters: (number | undefined)[] = [];
        let queryWhereString: string = ``;
        const whereConditions = [];
        if (queryDto.search) {
          whereConditions.push(`feed.content LIKE '%${queryDto.search}%'`);
        }
        if (queryDto.tag) {
          whereConditions.push(`feed_tags.tags LIKE '%${queryDto.tag}%'`);
        }
        if (whereConditions.length > 0)
          queryWhereString = `WHERE ${whereConditions.join(' AND ')}`;
        const feedTagQueryJoinString = `
          LEFT JOIN (
            SELECT
              GROUP_CONCAT(
                tag.tag
              ) AS tags,
              feed_tag.feedId
            FROM tag
            LEFT JOIN feed_tag ON feed_tag.tagId = tag.id
            GROUP BY feed_tag.feedId
          ) feed_tags ON feed.id = feed_tags.feedId
          `;

        let queryOrderByString: string = ``;
        if (queryDto.sort === 'recent') {
          queryOrderByString = `ORDER BY createdAt DESC`;
        } else if (queryDto.sort === 'trending') {
          queryOrderByString = `ORDER BY date DESC, connectedUserReactions DESC`;
        }

        let queryOffsetLimitString: string = ``;
        if (queryDto.limit) queryOffsetLimitString += `LIMIT ${queryDto.limit}`;
        if (queryDto.offset)
          queryOffsetLimitString += ` OFFSET ${queryDto.offset}`;

        const connectedUserQuerySrting = `
          SELECT
            connected_user.id,
            connected_user.name
          FROM user_connection
          LEFT JOIN (
            SELECT
              user.id,
              user.name
            FROM user
            WHERE user.id != ?
          ) connected_user ON (
            connected_user.id = user_connection.userId OR connected_user.id = user_connection.connectedUserId
          )
          WHERE user_connection.userId = ? OR user_connection.connectedUserId = ?
        `;
        const feedLikeQuerySelectString = `
          feed_like_json.likes,
          feed_like_json.likesCount,
          feed_like_json.connectedLikers,
          feed_like_json.connectedLikersCount,
          `;
        const feedLikeQueryJoinString = `
          LEFT JOIN (
            SELECT
              JSON_ARRAYAGG(
                JSON_OBJECT(
                  'id', feed_like.id,
                  'liker', JSON_OBJECT(
                    'id', liker.id,
                    'name', liker.name,
                    'profileImage', liker.profileImage,
                    'connected', IF(connected_liker.id, true, false)
                  )
                )
              ) AS likes,
              feed_like.likedFeedId AS feedId,
              COUNT(feed_like.id) AS likesCount,
              GROUP_CONCAT(
                connected_liker.name
              ) AS connectedLikers,
              COUNT(connected_liker.id) AS connectedLikersCount
            FROM feed_like
            LEFT JOIN user liker ON feed_like.likerId = liker.id
            LEFT JOIN (${connectedUserQuerySrting}) connected_liker ON liker.id = connected_liker.id
            GROUP BY feed_like.likedFeedId
          ) feed_like_json ON feed_like_json.feedId = feed.id
          `;
        queryParameters = queryParameters.concat([userId, userId, userId]);
        const feedCommentQuerySelectString = `
          feed_comment_json.comments,
          feed_comment_json.commentsCount,
          feed_comment_json.connectedCommenters,
          feed_comment_json.connectedCommentersCount,
          `;
        const feedCommentQueryJoinString = `
          LEFT JOIN (
            SELECT
              JSON_ARRAYAGG(
                JSON_OBJECT(
                  'id', feed_comment.id,
                  'content', feed_comment.content,
                  'createdAt', feed_comment.createdAt,
                  'updatedAt', feed_comment.updatedAt,
                  'commenter', JSON_OBJECT(
                    'id', commenter.id,
                    'name', commenter.name,
                    'profileImage', commenter.profileImage,
                    'connected', IF(connected_commenter.id, true, false)
                  )
                )
              ) AS comments,
              feed_comment.commentedFeedId AS feedId,
              COUNT(feed_comment.id) AS commentsCount,
              GROUP_CONCAT(
                connected_commenter.name
              ) AS connectedCommenters,
              COUNT(connected_commenter.id) AS connectedCommentersCount
            FROM feed_comment
            LEFT JOIN user commenter ON commenter.id = feed_comment.commenterId
            LEFT JOIN (
              ${connectedUserQuerySrting}
            ) connected_commenter ON commenter.id = connected_commenter.id
            GROUP BY feed_comment.commentedFeedId
          ) feed_comment_json ON feed_comment_json.feedId = feed.id
          `;
        queryParameters = queryParameters.concat([userId, userId, userId]);
        const queryString = `
          SELECT
            ${feedLikeQuerySelectString}
            ${feedCommentQuerySelectString}
            feed.id,
            feed.content,
            feed.createdAt,
            feed.updatedAt,
            feed_tags.tags,
            DATE(feed.createdAt) AS date,
            (feed_comment_json.connectedCommentersCount + feed_like_json.connectedLikersCount) AS connectedUserReactions
          FROM feed
          LEFT JOIN user feed_author ON feed.authorId = feed_author.id
          ${feedLikeQueryJoinString}
          ${feedCommentQueryJoinString}
          ${feedTagQueryJoinString}
          ${queryWhereString}
          ${queryOrderByString}
          ${queryOffsetLimitString}
          ;
        `;

        return await repository.query(queryString, queryParameters);
      },
      findOneWithRelationsById: async (feedId: number) => {
        const [feed] = await repository.find({
          where: { id: feedId },
          relations: this.feedFullRelations,
          select: this.feedFullRelationsSelect,
        });
        return feed;
      },
    });
  }

  private queryOptionBuilder(queryDto: FeedQueryDto) {
    const { sort, search, tag, offset, limit } = queryDto;
    const queryOptions: FindManyOptions<FeedVo> = {};
    if (sort) this.getSortOptions(sort, queryOptions);
    if (search) this.getSearchOptions(search, queryOptions);
    if (limit) queryOptions.take = limit;
    if (offset) queryOptions.skip = offset;
    if (tag) this.getTagOptions(tag, queryOptions);
    return queryOptions;
  }

  private getSortOptions(
    sort: SortParam,
    queryOptions: FindManyOptions<FeedVo>,
  ) {
    switch (sort) {
      case 'recent': {
        queryOptions.order = {
          createdAt: 'DESC',
          comments: {
            createdAt: 'DESC',
          },
        };
        break;
      }
      case 'trending': {
        // TODO: change logic to get trending feeds
        queryOptions.select = {};
        queryOptions.order = {
          createdAt: 'DESC',
          comments: {
            createdAt: 'DESC',
          },
        };
        break;
      }
      default: {
        throw new HttpException('INVALID_INPUT', HttpStatus.BAD_REQUEST);
      }
    }
    return queryOptions;
  }

  private getSearchOptions(
    search: string,
    queryOptions: FindManyOptions<FeedVo>,
  ) {
    queryOptions.where = {
      ...queryOptions.where,
      content: Like(`%${search}%`),
    };
    return queryOptions;
  }

  private getTagOptions(tag: string, queryOptions: FindManyOptions<FeedVo>) {
    queryOptions.where = {
      ...queryOptions.where,
      feedTags: {
        tag: {
          tag: tag,
        },
      },
    };
    return queryOptions;
  }

  private feedFullRelations: FindOptionsRelations<FeedVo> = {
    author: true,
    likes: {
      liker: true,
    },
    images: true,
    video: true,
    comments: {
      commenter: true,
    },
  };

  private feedFullRelationsSelect: FindOptionsSelect<FeedVo> = {
    author: {
      id: true,
      name: true,
      profileImage: true,
    },
    images: {
      id: true,
      imageUrl: true,
    },
    video: {
      id: true,
      videoUrl: true,
    },
    likes: {
      id: true,
      createdAt: true,
      liker: {
        id: true,
        name: true,
      },
    },
    comments: {
      id: true,
      content: true,
      createdAt: true,
      updatedAt: true,
      commenter: {
        id: true,
        name: true,
        profileImage: true,
      },
    },
  };
}
