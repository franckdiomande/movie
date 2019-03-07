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

    post(url, body = {}, callback) {

        this.params.method = 'POST';
        this.params.body =
            Object.assign({}, this.params.body, body);
        let RequestBody = JSON.stringify(this.params.body);

        fetch(url, Object.assign({}, this.params, {body: RequestBody})).then((response) => {
            console.log(response);
            response.json().then((data)=>{
                return callback(data)
            });
        }).catch((error) => {
            console.log(error);
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

    getToken(username, password, callback){
        let token = window.localStorage.getItem('token');
        if (token) {
            return callback(token);
        }
        return this.post('http://localhost:9080/login_check', {
            'username': username,
            'password': password
        }, (data)=>{
            let token = data.token;
            window.localStorage.setItem('token', 'Bearer ' + token);
            callback(token);
        });
    }

    getMovies(username, password, callback){

        this.getToken(username, password, (token)=>{
            this.params.headers.append('Authorization', token);
            return this.get('http://localhost:9080/movies', (data)=>{
                callback(data);
            });
        })
    }


}

export default (new Api());