import "./style.css";

export const Card = (props) => {
  return <div className="card p-2 m-2 card-background">{props.children}</div>;
};
