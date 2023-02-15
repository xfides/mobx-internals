// EXPERIMENT 1 --> DRAW.IO PAGES: `Page1`, `toggle`

/*
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

myTodo.toggle();
*/

// EXPERIMENT 2 --> DRAW.IO PAGES: `computed`

const observable = mobx.observable;
const computed = mobx.computed;
const reaction = mobx.reaction;
const runInAction = mobx.runInAction;

const man = {
  name: 'Ivan',
  surname: 'Ivanov',
  get fullname() {
    return `${this.name} ${this.surname}`;
  },
  changeName(newName) {
    this.name = newName;
  },
  changeSurname(newSurname) {
    this.surname = newSurname;
  }
};

const observableMan = observable(man)

reaction(
  () => `${observableMan.fullname}!!!`,
  data => console.log(data)
)

runInAction(() => {
  observableMan.changeName('Petya');
  observableMan.changeSurname('Petrov')
})




