class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    return `123`
  }
}

const samir = new User("samir")
// console.log(samir.createId())

class Teacher extends User {
  constructor(username, email) {
    super(username)
    this.email = email
  }
}


const phone = new Teacher('phone', 'phone@phone.com')

phone.logMe()