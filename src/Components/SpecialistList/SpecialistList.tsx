import { useEffect, useState } from "react";
import axios from "axios";
import SpecialistsItem from "../SpecialistItem/SpecialistItem";
import "./SpecialistList.scss";
import IUser from "../../types/user";

interface SpecialistListProps {
  filter: string;
}

function SpecialistList({ filter }: SpecialistListProps) {
  const [users, setUsers] = useState<IUser[]>([]);
  const [filterredUsers, setFilterredUsers] = useState<IUser[]>([]);

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

  useEffect(() => {
    if (filter === "all") {
      setFilterredUsers(
        users.sort((a, b) => (a.firstName > b.firstName ? 1 : -1))
      );
    } else {
      setFilterredUsers(users.filter((user) => user.department === filter));
    }
  }, [users, filter]);

  return (
    <ul className="specialist__list">
      {filterredUsers.map((user) => (
        <SpecialistsItem key={user.id} user={user} />
      ))}
    </ul>
  );
}

export default SpecialistList;
