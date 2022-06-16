export interface Ires {
  ok?: any,
  status?: number,
  statusText?: string,
}

export interface IArticle {
  author?: string,
  content?: string,
  description?: string,
  publishedAt?: string,
  source?: { id?: string, name?: string },
  title?: string,
  url?: string,
  urlToImage?: string,
}
export interface IArticles {
  articles?: IArticle[],
  status?: string,
  totalResults?: number,
}