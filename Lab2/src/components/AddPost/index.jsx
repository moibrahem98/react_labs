import { useState } from "react";
import { Input } from "../Input";
import "../AddPost/main.css";


export const AddPost = (props) => {
  const [Name, setTitle] = useState("Add A Misson To Do It");
  const [Details, setBody] = useState("Mission Details");

  const handleSubmit = () => {
    props.addPost({ Name, Details });
  };

  return (
    <div className="card">
      <h1>Todo App</h1>

      <Input value={Name} setValue={setTitle} label="Name" />
      <Input value={Details} setValue={setBody} label="Details" />

      <button onClick={handleSubmit} className="btn btn-primary m-2">
        Add
      </button>
    </div>
  );
};
