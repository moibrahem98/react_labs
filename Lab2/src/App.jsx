import { useState, useEffect } from "react";
import axios from "axios";
import { ViewPosts } from "./components/ViewPosts";
import { AddPost } from "./components/AddPost";

export const App = () => {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
  //     setPosts(result.data);
  //   });
  // }, [posts]);

  const handleDelete = () => {
    setPosts([]);
  };

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <AddPost addPost={addPost} />
        </div>
        <div className="col-6">
          <ViewPosts
            posts={posts}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};
