import  axios from 'axios';
const instance = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        'Content-Type': 'application/json'
    }
});
instance.interceptors.request.use(function (config){
    return config
})
const Http = {
    get: (url) => {
        return instance.get(url);
    },
    post: (url,body)=>{
        return instance.post(url, body);
    }
}

export {Http}