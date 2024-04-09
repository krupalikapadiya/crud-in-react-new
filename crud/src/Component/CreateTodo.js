import React, { useState } from "react";

const CreateTodo = () => {

  const [task, setTask] = useState("Add task")

  const add =(e) =>{
setTask()
  }
  return (
    <>
      <div className="container">
        <div class="mb-3 ">
          <label htmlFor="exampleFormControlInput1" class="form-label">
       {task}
          </label>
          <input
          onChange={add}
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Some thing new"
          />
        </div>
        <div class="mb-3">
          <label htmlFor="exampleFormControlTextarea1" class="form-label">
            Description
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
          ></textarea>
        </div>
        <button type="button" class="btn btn-primary">
          Primary
        </button>
      </div>
      <div class="card" style="width: 18rem;">
  <img src="#" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </>
  );
};

export default CreateTodo;
