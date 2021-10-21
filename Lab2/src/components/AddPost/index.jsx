import { useState } from "react";
import { Input } from "../Input";

export const AddPost = (props) => {
  const [title, setTitle] = useState("Please enter post title");
  const [body, setBody] = useState("Please enter post body");

  const handleSubmit = () => {
    console.log("Calling to backend service");
    props.addPost({ title, body });
  };

  return (
    <div className="card">
      <h1>Add Post</h1>

      <Input value={title} setValue={setTitle} label="Title" />
      <Input value={body} setValue={setBody} label="Body" />

      <button onClick={handleSubmit} className="btn btn-primary">
        Add Post
      </button>
    </div>
  );
};
