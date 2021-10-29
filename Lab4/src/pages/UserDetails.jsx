import { useParams, Link } from "react-router-dom";
import { users } from "./Users/users";

export const UserDetails = () => {
  const { id } = useParams();
  const user = users.find((us) => us.id === +id);
  return (
    <>
      <h1>Welcome {user.name}</h1>
      <p>Phone: {user.phone}</p>
      <p>Company: {user.company.name}</p>
      <p>Phone: {user.website}</p>
      <Link to="/users">back</Link>
    </>
  );
};
