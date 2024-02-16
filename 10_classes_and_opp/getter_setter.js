class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase()
  }
  set email(value) {
    this._email = value;
  }

  get password() { return `${this._password}samiran`; }

  set password(value) {
    this._password = value;
  }
}

const samiran = new User('samiran@gmail.com', '1234')
console.log(samiran.email);