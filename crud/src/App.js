import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [editIndex, setEditIndex] = useState(1);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescriptionValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (editIndex === 1) {
      setTodos([...todos, { title: inputValue, description: descriptionValue }]);
    } else {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = { title: inputValue, description: descriptionValue };
      setTodos(updatedTodos);
      setEditIndex(1);
    }
    setInputValue("");
    setDescriptionValue("");
  }

  function handleDelete(index) {
    const deleteTodos = [...todos];
    deleteTodos.splice(index, 1);
    setTodos(deleteTodos);
  }

  function handleEdit(index) {
    const todoToEdit = todos[index];
    setInputValue(todoToEdit.title);
    setDescriptionValue(todoToEdit.description);
    setEditIndex(index);
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
        <button type="submit">{editIndex === 1 ? "Add Todo" : "Update Todo"}</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <div className="card" key={index}>
            <div className="card-body">
              {editIndex === index ? (
                <>
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
                </>
              ) : (
                <>
                  <h5 className="card-title">
                    <strong>{todo.title}</strong>
                  </h5>
                  <p className="card-text">{todo.description}</p>
                </>
              )}
            </div>
            {editIndex !== index && (
              <button onClick={() => handleEdit(index)}>Edit</button>
            )}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
