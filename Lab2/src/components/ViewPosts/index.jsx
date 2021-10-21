import { Post } from "../Post";
export const ViewPosts = (props) => {
  return (
    <>
      <h1>Todo App</h1>
      <button className="btn btn-danger m-2" onClick={props.onDelete}>
        Delete
      </button>
      {props.posts.map((p) => (
        <Post title={p.Name} body={p.Details} />
      ))}
    </>
  );
};
