import { IArticles, ISource } from '../interface/interface';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data?: { articles: IArticles; }) {
        const values = data?.articles.articles ? data?.articles.articles : [];
        this.news.draw(values);
    }

    drawSources(data?: { sources: ISource[]; }) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
