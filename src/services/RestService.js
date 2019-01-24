import axios from 'axios'

const BASE_URL = "http://localhost:3000";

export function get(url, params) {
    return new Promise(function (resolve, reject) {
        axios.get(BASE_URL + url, { params: params })
            .then(response => {
                if (response) {
                    resolve(response);
                }
                else {
                    reject();
                }
            })
            .catch(error => {

                console.log(error);
                if (error && error.response && error.response.data) {
                    reject(error.response.data);
                }

            });
    })
}

export function post(url, payload) {
    return new Promise(function (resolve, reject) {
        axios.post(BASE_URL + url, payload)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                // console.log(error);
                //reject(error.response.data);
                reject(error);
            });
    })
}

export function put(url, payload) {
    return new Promise(function (resolve, reject) {
        axios.put(BASE_URL + url, payload)
            .then(response => {
                if (response.data) {
                    resolve(response);
                }
                else {
                    reject();
                }
            })
            .catch(error => {
                reject(error);
            });
    })
}

export function del(url, payload) {
    return new Promise(function (resolve, reject) {
        axios.delete(BASE_URL + url, { data: payload })
            .then(response => {
                if (response.data.success) {
                    resolve(response.data.data);
                }
                else {
                    reject();
                }
            })
            .catch(error => {
                console.log(error.response.data);
                reject(error.response.data);
            });
    })
}

export function postMultipart(url, formData) {
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return new Promise(function (resolve, reject) {
        axios.post(BASE_URL + url, formData, config)
            .then(response => {
                if (response)
                    resolve(response);
                else {
                    reject();
                }
            })
            .catch(error => {
                console.log(error.response.data);
                reject(error.response.data);
            });
    })
}

export default {
    get,
    put,
    post,
    del,
    postMultipart
}