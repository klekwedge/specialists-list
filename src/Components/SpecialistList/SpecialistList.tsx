import { useEffect, useState } from "react";
import axios from "axios";
import SpecialistsItem from "../SpecialistItem/SpecialistItem";
import "./SpecialistList.scss";
import IUser from "../../types/user";
import NotFound from "../NotFound/NotFound";

interface SpecialistListProps {
  filter: string;
  search: string;
}

function SpecialistList({ filter, search }: SpecialistListProps) {
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
    let listAfterFilter: IUser[];

    if (filter === "all") {
      listAfterFilter = users.sort((a, b) =>
        a.firstName > b.firstName ? 1 : -1
      );
    } else {
      listAfterFilter = users.filter((user) => user.department === filter);
    }

    setFilterredUsers(
      listAfterFilter.filter(
        (item) =>
          item.firstName.toLowerCase().includes(search.toLowerCase()) ||
          item.lastName.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [users, filter, search]);

  return (
    <ul className="specialist__list">
      {filterredUsers.length === 0 && search !== "" ? (
        <NotFound />
      ) : (
        filterredUsers.map((user) => (
          <SpecialistsItem key={user.id} user={user} />
        ))
      )}
    </ul>
  );
}

export default SpecialistList;
