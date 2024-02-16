class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username); // calling the parent constructor
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added to ${this.username}`)
  }
}

const chai = new Teacher("chai", "chai@gmail.com", "123");

chai.addCourse()