import { Card } from "../Card";

export const Post = (props) => {
  return (
    <Card>

      <div>
        <h4>{props.title}</h4>
        <p>{props.body}</p>
      </div>
      
    </Card>
  );
};
