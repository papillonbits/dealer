import { AsyncListCarPage, ListCarPage } from '../pattern/page/ListCarPage'
import { AsyncBestCarPage, BestCarPage } from '../pattern/page/BestCarPage'
import { AsyncNotFoundPage, NotFoundPage } from '../pattern/page/NotFoundPage'
import { appRootPath, listCarPagePath, bestCarPagePath } from './path'

export const appRootRoute = {
  path: appRootPath,
}

export const listCarPageRoute = {
  path: listCarPagePath,
  clientComponent: AsyncListCarPage,
  serverComponent: ListCarPage,
}

export const bestCarPageRoute = {
  path: bestCarPagePath,
  clientComponent: AsyncBestCarPage,
  serverComponent: BestCarPage,
}

export const notFoundPageRoute = {
  clientComponent: AsyncNotFoundPage,
  serverComponent: NotFoundPage,
}
