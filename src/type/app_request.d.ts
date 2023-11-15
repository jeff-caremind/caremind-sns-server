import { Request } from 'express';

export type AppRequest = Request & { headers: { userId: number } };
