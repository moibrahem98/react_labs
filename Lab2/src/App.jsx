// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react";
import { ViewPosts } from "./components/ViewPosts";
import { AddPost } from "./components/AddPost";
export const App = () => {
  const [posts, setPosts] = useState([]);

  const handleDelete = () => {
    setPosts([]);
  };

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
//   removeTodo(name){
//     this.setState({
//         todo: this.state.todo.filter(el => el !== name)
//     })
// }

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
