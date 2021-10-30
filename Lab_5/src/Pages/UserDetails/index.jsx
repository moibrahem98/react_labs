import { useParams, Link } from "react-router-dom";
import { users } from "../Users/users";

export const UserDetails = () => {
  const { id } = useParams();
  const user = users.find((us) => us.id === +id);

  return (
    <>
      <h1>User Details</h1>
      <ul>
        <li>{user.name}</li>
        <li>{user.phone}</li>
        <li>{user.company.name}</li>
        <li>{user.website}</li>
      </ul>
      <Link to="/users">Back To Users</Link>
    </>
  );
};
