import { useState } from "react";
import { Input } from "../Input";
import { useCreatePost } from "../../hooks";

export const AddPost = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const createPost = useCreatePost();

  const handleSubmit = () => {
    props.addPost({ title, body });
    createPost({ title, body }).then(console.log);
  };

  return (
    <div className="card p-3 m-2">
      <h1>Add Post</h1>

      <Input
        value={title}
        setValue={setTitle}
        placeholder="Please enter post title"
        label="Title"
      />

      <Input
        value={body}
        setValue={setBody}
        placeholder="Please enter post body"
        label="Body"
      />

      <button onClick={handleSubmit} className="btn btn-primary">
        Add Post
      </button>
    </div>
  );
};
