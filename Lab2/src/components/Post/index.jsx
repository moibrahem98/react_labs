import { Card } from "../Card";

export const Post = (props) => {
  return (
    <Card>

      <div>
        <button className="btn btn-danger rm">x</button>
        <h2>{props.title}</h2>
        <h4>{props.body}</h4>
      </div>
      
    </Card>
  );
};
