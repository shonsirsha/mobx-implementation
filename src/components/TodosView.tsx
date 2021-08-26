import { FC } from "react";
import store from "../store";
import { observer } from "mobx-react-lite";

const TodosView: FC = () => {
  return (
    <div className="todosView">
      <h1>My Todos (All):</h1>
      <>
        {store.todos.length === 0 && <p>No todos yet</p>}
        {store.todos.map((todo, ix) => (
          <div className="flex" key={todo.id}>
            <p
              className={`${todo.completed && `done`}`}
              onClick={() => (todo.completed = !todo.completed)}
            >
              {ix + 1}. {todo.content}
            </p>
            <button className="del" onClick={() => store.deleteTodo(todo.id)}>
              Delete
            </button>
          </div>
        ))}
      </>
      <kbd> Component 2 (TodosView.tsx)</kbd>
    </div>
  );
};

export default observer(TodosView);
