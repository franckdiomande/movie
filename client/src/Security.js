import Api from './Api.js';

export default class Security {

    static isLogged(){
        return Api.getToken();
    }

}