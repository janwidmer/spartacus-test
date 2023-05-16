import { ResponseComposition, rest, RestContext, RestHandler, RestRequest } from 'msw';
import { environment } from '../environments/environment';
import { languageList } from './mock-data/languages';
import { getDefaultRoutes } from '@valantic/spartacus-mock';

const defaultRoutes = getDefaultRoutes(environment);

export const handlers: RestHandler[] = [
  rest.get(
    defaultRoutes.languages,
    (
      _req: RestRequest,
      res: ResponseComposition,
      ctx: RestContext
    ) => {
      return res(ctx.status(200), ctx.json(languageList()));
    }
  ),
];
