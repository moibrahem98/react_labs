import { Post } from "../Post";
import { useEffect, useState } from "react";
import { useGetPosts } from "../../hooks";
import { Card } from "../../components";

export const ViewPosts = (props) => {
  const [outerPosts, setOuterPosts] = useState([]);
  const getPosts = useGetPosts();

  useEffect(() => {
    getPosts().then(setOuterPosts);
  }, []);

  return (
    <div className="card p-2 m-2">
      <h1>Hello from the app</h1>
      <button className="btn btn-danger m-2" onClick={props.onDelete}>
        Delete
      </button>
      {props.posts.map((p, i) => (
        <Post key={i} title={p.title} body={p.body} />
      ))}
      {outerPosts.map((post) => (
        <Card key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </Card>
      ))}
    </div>
  );
};
