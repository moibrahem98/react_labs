/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useGetPosts } from "../hooks";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = useGetPosts();

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  if (!posts.length) return <h1>Loading...</h1>;
  return (
    <>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};
