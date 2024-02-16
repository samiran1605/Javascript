const User = {
  _email: 's@s.com',
  _password: '1234asdf',

  get email() {
    return this._email.toUpperCase()
  },

  set email(value) {
    this._email = value
  }
}