import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescriptionValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (editIndex === -1) {
      setTodos((prevState)=>{
        return [
        ...prevState,
        { title: inputValue, description: descriptionValue },
      ]});
    } else {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = {
        title: inputValue,
        description: descriptionValue,
      };
      setTodos(updatedTodos);
      setEditIndex(-1);
    }
    setInputValue("");
    setDescriptionValue("");
  }

  function handleDelete(index) {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 2);
    setTodos(updatedTodos);
  }

  function handleEdit(index) {
    const todoToEdit = todos[index];
    setInputValue(todoToEdit.title);
    setDescriptionValue(todoToEdit.description);
    setEditIndex(index);
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Todo List</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="form-group">
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Todo title"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            value={descriptionValue}
            onChange={handleDescriptionChange}
            placeholder="Description"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary my-3">
          {editIndex === -1 ? "Add Todo" : "Update Todo"}
        </button>
      </form>
      <div className="row">
        {todos.map((todo, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card">
              <div className="card-body">
                {editIndex === index ? (
                  <>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                        placeholder="Todo title"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        value={descriptionValue}
                        onChange={handleDescriptionChange}
                        placeholder="Description"
                        className="form-control"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <h5 className="card-title">
                      <strong>{todo.title}</strong>
                    </h5>
                    <p className="card-text">{todo.description}</p>
                  </>
                )}
                {editIndex !== index && (
                  <button
                    onClick={() => handleEdit(index)}
                    className="btn btn-warning mr-2"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => handleDelete(index)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
