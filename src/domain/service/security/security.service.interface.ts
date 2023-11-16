import { TokenPayload } from 'src/type/token_payload';

export interface IsecurityService {
  verify(token: string): TokenPayload;
}
