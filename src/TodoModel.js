import { observable } from "mobx";

export default class TodoModel {
  id;
  @observable title;
  @observable completed;

  constructor(store, id, title, completed) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }

  setTitle(title) {
    this.title = title;
  }
}
