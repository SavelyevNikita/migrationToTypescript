class Loader {
    constructor(baseLink, options) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} },
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        console.log(`getResp endpoint = ${endpoint} ${typeof endpoint}`);
        console.log(`getResp options = ${JSON.stringify(options)} ${typeof options}`);
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res) {
        console.log(`errorHandler res = ${JSON.stringify(res)} ${typeof res}`);
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options, endpoint) {
        console.log(`load options = ${JSON.stringify(options)} ${typeof options}`);
        console.log(`makeUrl endpoint = ${endpoint} ${typeof endpoint}`);
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method, endpoint, callback, options = {}) {
        console.log(`load method = ${method} ${typeof method}`);
        console.log(`load endpoint = ${endpoint} ${typeof endpoint}`);
        console.log(`load options = ${JSON.stringify(options)} ${typeof options}`);
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((data) => {
                console.log(data);
                return callback(data);
            })
            .catch((err) => console.error(err));
    }
}

export default Loader;