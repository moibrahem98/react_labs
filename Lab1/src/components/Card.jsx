/* eslint-disable jsx-a11y/img-redundant-alt */
export const Card = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.mail}</p>
      <p>{props.body}</p>
      <button>Click To View Details</button>
    </div>
  );
};