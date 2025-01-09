import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export interface IUser {
  name: string;
}

function Users() {
  const [users, setUsers] = useState<IUser[]>([]);

  let loadUsers = async () => {
    let res: {
      data: IUser[];
    } = await axios.get("something.com");

    setUsers(res.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      {users.map((el, ind) => (
        <Link to={`/user/${ind}`} data-testid={"user"} key={el.name}>
          {el.name}
        </Link>
      ))}
    </div>
  );
}

export default Users;
