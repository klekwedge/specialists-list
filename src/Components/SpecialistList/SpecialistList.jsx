import { useEffect, useState } from "react";
import axios from "axios";
import SpecialistsItem from "../SpecialistItem/SpecialistItem";
import './SpecialistList.scss'

function SpecialistList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((usersData) => {
        setUsers(usersData.data);
      })
      .catch((e) => {
        console.log(e);
        throw new Error("Some error occurred while sending the request!!!");
      });
  }, []);

  return (
    <ul className='specialist__list'>
      {users.length > 0
        ? users.map((user) => <SpecialistsItem key={user.id} user={user} />)
        : null}
    </ul>
  );
}

export default SpecialistList;
