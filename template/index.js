const makeObservable = mobx.makeObservable;
const observable = mobx.observable;
const action = mobx.action;

class Todo {
  id = Math.random()
  title = ""
  finished = false

  constructor(title) {
    makeObservable(this, {
      title: observable,
      finished: observable,
      toggle: action
    })
    this.title = title
  }

  toggle() {
    this.finished = !this.finished
  }
}

const myTodo = new Todo('one');

console.dir(myTodo);
