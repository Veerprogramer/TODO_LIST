import "./styles.css";
import { useState } from "react";

export default function App() {
  const [newItem, SetnewItem] = useState("");
  const [todos, settodos] = useState([]);
  function handlesubmit(e) {
    e.preventDefault();
    settodos((currentodos) => {
      return [
        ...currentodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
    SetnewItem("");
  }
  function toggleTodo(id, completed) {
    settodos((currentodos) => {
      return currentodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }
  function deletetodo(id) {
    settodos((currentodos) => {
      return currentodos.filter((todo) => todo.id !== id);
    });
  }
  return (
    <div>
      <form onSubmit={handlesubmit} className="my-form">
        <div className="rowss">
          <label htmlFor="item">New Work?</label>
          <input
            value={newItem}
            onChange={(e) => SetnewItem(e.target.value)}
            type={"text"}
            id="item"
          />
        </div>
        <button className="btn btn-danger">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button onClick={() => deletetodo(todo.id)} className="btn ">
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
