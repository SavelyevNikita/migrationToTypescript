// import { Ires } from "../interface/interface";

// class Loader {
//     options: {
//         apiKey: string;
//     }
//     baseLink: string;
//     constructor(baseLink: string, options: {apiKey: string;}) {
//         this.baseLink = baseLink;
//         this.options = options;
//     }

//     getResp(
//         { endpoint, options = {} },
//         callback = () => {
//             console.error('No callback for GET response');
//         }
//     ) {
//         this.load('GET', endpoint, callback, options);
//     }

//     errorHandler(res: Ires) {
//         if (!res.ok) {
//             if (res.status === 401 || res.status === 404)
//                 console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
//             throw Error(res.statusText);
//         }

//         return res;
//     }

//     makeUrl(options: {apiKey: string;}, endpoint: any) {
//         const urlOptions = { ...this.options, ...options };
//         let url = `${this.baseLink}${endpoint}?`;

//         Object.keys(urlOptions).forEach((key) => {
//             url += `${key}=${urlOptions[key]}&`;
//         });

//         return url.slice(0, -1);
//     }

//     load(method: string, endpoint, callback: (data?: any) => {}, options) {
//         fetch(this.makeUrl(options, endpoint), { method })
//             .then(this.errorHandler)
//             .then((res) => res.json())
//             .then((data) => callback(data))
//             .catch((err) => console.error(err));
//     }
// }

// export default Loader;
