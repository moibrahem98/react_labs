import { Post } from "../Post";

export const ViewPosts = (props) => {
  return (
    <>
      <h1>Hello from the app</h1>
      <button className="btn btn-danger m-2" onClick={props.onDelete}>
        Delete
      </button>
      {props.posts.map((p) => (
        <Post title={p.title} body={p.body} />
      ))}
    </>
  );
};
