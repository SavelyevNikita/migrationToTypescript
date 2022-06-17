export interface Ires {
  ok: any,
  status: number,
  statusText: string,
}

export interface IArticle {
  author: string,
  content: string,
  description: string,
  publishedAt: string,
  source: ISource,
  title: string,
  url: string,
  urlToImage: string,
}
export interface IArticles {
  articles: IArticle[],
  status: string,
  totalResults: number,
}

export interface ISource {
  id: string,
  name: string,
}