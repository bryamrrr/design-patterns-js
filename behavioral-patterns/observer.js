class Publisher { // Observable interface
  addObserver(observer) {
    throw 'You have to implement this method';
  }

  removeObserver(observer) {
    throw 'You have to implement this method';
  }

  notifyAll() {
    throw 'You have to implement this method';
  }
}

class Forum extends Publisher {
  constructor() {
    super();
    this.usersList = [];
    this.post = null;
  }

  addObserver(observer) {
    if (this.usersList.indexOf(observer) === -1) this.usersList.push(observer);
  }

  removeObserver(observer) {
    var index = this.usersList.indexOf(observer);
    if (index > -1) this.usersList.splice(index, 1);
  }

  notifyAll() {
    this.usersList.forEach( (observer) => {
      observer.notify(this.post);
    });
  }

  writePost(text) {
    this.post = text;
    this.notifyAll();
  }
}

class Subscriber {
  notify(text) {
    throw 'You have to implement this method';
  }
}

class UserA extends Subscriber {
  notify(post) {
    console.log(`User A has been notified ${post}`);
  }
}

class UserB extends Subscriber {
  notify(post) {
    console.log(`User B has been notified ${post}`);
  }
}

var forum = new Forum();
var user1 = new UserA();
var user2 = new UserB();

forum.addObserver(user1);
forum.addObserver(user2);
forum.writePost('This is a welcome post');

forum.removeObserver(user2);
forum.writePost('Another post');