import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '12e7ef50353e443d998bc1ff56a76034', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
