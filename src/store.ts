import { Todo } from "./types";
import { makeAutoObservable } from "mobx";

const addTodo = (todos: Todo[], todoContent: string) => [
  ...todos,
  {
    id: Date.now(),
    content: todoContent,
    completed: false,
  },
];

const deleteTodo = (todos: Todo[], todoId: number) =>
  todos.filter((todo) => todo.id !== todoId);

class Store {
  todos: Todo[] = [];
  newTodo: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  addTodo() {
    this.todos = addTodo(this.todos, this.newTodo);
    this.newTodo = "";
  }

  deleteTodo(todoId: number) {
    this.todos = deleteTodo(this.todos, todoId);
  }
}
const store = new Store();
export default store;
