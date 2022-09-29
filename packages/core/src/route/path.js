const rootPath = '/'
const listCarPath = '/list'
const bestCarPath = '/best'

export const appRootPath = process.env.BASE_URL ? `${process.env.BASE_URL}${rootPath}` : rootPath
export const listCarPagePath = process.env.BASE_URL ? `${process.env.BASE_URL}${listCarPath}` : listCarPath
export const bestCarPagePath = process.env.BASE_URL ? `${process.env.BASE_URL}${bestCarPath}` : bestCarPath

export const startPagePath = listCarPagePath
