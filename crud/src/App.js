import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescriptionValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, { title: inputValue, description: descriptionValue }]);
    setInputValue("");
    setDescriptionValue("");
  }

  function handleDelete(index) {
    const deleteTodos = [...todos];
    deleteTodos.splice(index, 1);
    setTodos(deleteTodos);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Todo title"
        />
        <input
          type="text"
          value={descriptionValue}
          onChange={handleDescriptionChange}
          placeholder="Description"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <div className="card" key={index}>
            <div className="card-body">
              <h5 className="card-title">
                <strong>{todo.title}</strong>
              </h5>
              <p className="card-text">{todo.description}</p>
            </div>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
