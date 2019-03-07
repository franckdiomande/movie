require('dotenv').config()
class Api {

    constructor() {
        this.headers = new Headers();
        this.headers.append("Accept", "application/json");
        this.headers.append("Content-Type", "application/json");
        /*this.headers = {
            'Accept': 'application/json, text/plain, *!/!*',
            'Content-Type': 'application/json',
        };*/

        this.params = {
            method: 'GET',
            headers: this.headers,
            mode: 'cors',
            cache: 'default',
            body: {}
        };
    }

    login(username, password){
        return new Promise((resolve, reject) => {
            this.post(process.env.REACT_APP_API_BASE_URL + '/login_check', {
            'username': username,
            'password': password
        }, (data)=>{
            if(data['token']){
                let token = data.token;
                window.localStorage.setItem('token', 'Bearer ' + token);
                resolve(true);
            } else {
                reject(false);
            }
        });
        })
    }

    post(url, body = {}, callback) {

        this.params.method = 'POST';
        this.params.body =
            Object.assign({}, this.params.body, body);
        let RequestBody = JSON.stringify(this.params.body);

        fetch(url, Object.assign({}, this.params, {body: RequestBody})).then((response) => {

            response.json().then((data)=>{
                return callback(data)
            });
        }).catch((error) => {

        })
    }

    get(url, callback) {
        this.params.method = 'GET';
        fetch(url, {
            method: 'GET',
            headers: this.headers,
            mode: 'cors',
            cache: 'default'
        }).then((response) => {
            response.json().then((data)=>{
                return callback(data)
            });
        }).catch((error) => {
            console.log(error);
        })
    }

    getToken(callback){
        let token = window.localStorage.getItem('token');
        if (token) {
            return callback(token);
        } else {
            return false;
        }
    }

    getMovies(callback){
        this.getToken((token)=>{
            this.params.headers.append('Authorization', token);
            return this.get(process.env.REACT_APP_API_BASE_URL + '/movies', (data)=>{
                callback(data);
            });
        })
    }


}

export default (new Api());