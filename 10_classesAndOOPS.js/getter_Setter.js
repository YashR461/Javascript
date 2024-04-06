class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }

    // while getting
    get password() {
        return this._password.toUpperCase()
    }

    //while setting
    set password(value) {
        this._password = value
    }
}

const yash = new User("yash@facebook.com", "abcdef")
console.log(yash.password);
console.log(yash.email);