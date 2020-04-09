import { autorun, computed, observable } from "mobx";

class Todo {
  @observable value;
  @observable id;
  @observable complete;

  constructor(value) {
    this.value = value;
    this.id = Date.now();
    this.complete = false;
  }
}

export class TodoStore {
  @observable todos = [];
  @observable filter = "";
  @computed get filteredTodos() {
    var matchesFilter = new RegExp(this.filter, "i");
    return this.todos.filter(
      todo => !this.filter || matchesFilter.test(todo.value)
    );
  }

  createTodo(value) {
    this.todos.push(new Todo(value));
  }

  clearComplete = () => {
   
    this.todos = this.todos.filter(todo => !todo.complete);
  };
 get status() {
    return this.todos.length;
  }
}
const store = window.store = new TodoStore();
export default store;
autorun(() => {
  console.log(store.filter);
  console.log(store.todos);
});
