import { FC, useRef } from "react";
import store from "../store";
import { observer } from "mobx-react-lite";
const TodoCreator: FC = () => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  return (
    <div className="todoCreator">
      <h1>Create a new todo</h1>
      <textarea
        ref={textAreaRef}
        placeholder="Todo detail..."
        value={store.newTodo}
        onChange={(e) => (store.newTodo = e.target.value)}
      />
      <button onClick={() => store.addTodo()}>Create todo</button>
      <kbd>Component 1 (TodoCreator.tsx)</kbd>
    </div>
  );
};

export default observer(TodoCreator);
