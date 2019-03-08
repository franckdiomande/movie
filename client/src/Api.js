const fakeData = {
    "name": "SPIDER-MAN: INTO THE SPIDER-VERSE",
    "slug": "spider-man-into-the-spider-verse",
    "summary": "Phil Lord and Christopher Miller, the creative minds behind The Lego Movie and 21 Jump Street, bring their unique talents to a fresh vision of a different Spider-Man Universe, with a groundbreaking visual style that's the first of its kind. Spider-Man: Into the Spider-Verse introduces Brooklyn teen Miles Morales, and the limitless possibilities of the Spider-Verse, where more than one can wear the mask.",
    "rated": "PG",
    "release": "2018-12-14T00:00:00.000+00:00",
    "duration": 100,
    "genre": ["Action", "Adventure", "Animation", "Kids", "Family", "Science Fiction", "Fantasy"],
    "directors": ["Bob Persichetti", "Peter Ramsey", "Rodney Rothman"],
    "writers": ["Phil Lord", "Rodney Rothman"],
    "actors": ["Shameik Moore", "Jake Johnson (XVI)", "Hailee Steinfeld", "Mahershala Ali", "Brian Tyree Henry", "Lily Tomlin", "Luna Lauren Velez", "Zoë Kravitz", "John Mulaney", "Kimiko Glenn", "Nicolas Cage", "Kathryn Hahn", "Liev Schreiber", "Chris Pine", "Natalie Morales"],
    "poster": "https://resizing.flixster.com/AUzYMd22VXcm9RNQd9P-TOoxTO0=/fit-in/200x296.2962962962963/v1.bTsxMjg3MjM1MDtqOzE4MDEzOzEyMDA7NjA3Mjs5MDAw",
    "type": "Movie"
};


require('dotenv').config();

class Api {

    constructor() {
        this.options = {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        };
        this.options.headers.append("Accept", "application/json");
        this.options.headers.append("Content-Type", "application/json");
    }

    login(username, password) {
        return new Promise((resolve, reject) => {
            return this.post(process.env.REACT_APP_API_BASE_URL + '/login_check', {'username': username, 'password': password})
                .then((data) => {
                    if(!data['token']){
                        return reject('User not found!');
                    }
                    let token = data.token;
                    window.localStorage.setItem('token', 'Bearer ' + token);
                    resolve(true);
                })
                .catch((error) => {
                    return reject(error);
                });
        });

    }

    post(url, body = {}) {

        this.options.method = 'POST';
        this.options.body = body;
        let RequestBody = JSON.stringify(this.options.body);

        return new Promise((resolve, reject) => {
            fetch(url, Object.assign({}, this.options, {body: RequestBody}))
                .then((response) => {
                    response.json()
                        .then((data) => {
                            if (data.error) {
                                return reject(data.error)
                            }
                            return resolve(data)
                        });
                })
                .catch((error) => {
                    return reject(error)
                })
        });

    }

    get(url) {
        return new Promise((resolve, reject) => {
            this.options.method = 'GET';
            let token = this.getToken();
            if (!token) {
                return reject('Token not found!');
            }
            this.options.headers.append("Authorization", token);
            delete this.options.body;

            fetch(url, this.options)
                .then((response) => {
                    response.json()
                        .then((data) => {
                            if (data.error) {
                                return reject(data.error)
                            }
                            return resolve(data)
                        });
                })
                .catch((error) => {
                    return reject(error)
                })
        });
    }

    getToken() {
        return window.localStorage.getItem('token');
    }

    getMovies() {
        return new Promise((resolve, reject) => {
            return this.get(process.env.REACT_APP_API_BASE_URL + '/movies').then(resolve).catch(reject);
        });
    }

    filterMovies(filters) {
        return new Promise((resolve, reject) => {
            return resolve([fakeData]);
        });
    }

    postComment(slug, rating, comment) {
        return new Promise((resolve, reject) => {
            this.getToken((token) => {
                this.options.headers.append('Authorization', token);

                this.options.method = 'POST';
                this.options.body = Object.assign({}, this.options.body, {
                    'rating': rating,
                    'content': comment
                });
                let RequestBody = JSON.stringify(this.options.body);
                fetch(process.env.REACT_APP_API_BASE_URL + '/movies/' + slug + '/comment', Object.assign({}, this.options, {
                    body: RequestBody
                })).then((response) => {
                    if(response.status === 200){
                        resolve()
                    } else {
                        reject()
                    }
                }).catch((error) => {
                    reject()
                })
            })

        })
    }

}

export default (new Api());