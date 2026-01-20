import { Link } from "react-router-dom";
import UsersData from '../Data/Users';

function Users() {
  return (
    <div className="page">
      <h1>Users</h1>

      {UsersData.map(user => (
        <div key={user.id}>
          <Link to={`/users/${user.id}`}>
            {user.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Users;
