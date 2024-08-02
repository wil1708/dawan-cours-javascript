class User {

    #username; // # => propriété est privé
    #password;

    constructor(username, password) {
        if(!username) {
            throw new Error('username required');
        }

        this.#username = username;
        this.#password = password;
    }

    get username() {
        return this.#username;
    }

    checkUsername(username = undefined) {
        if(!username){
            return false
        }

        if(username !== this.#username) {
            return false;
        }

        return true;
    }
}

module.exports = User;