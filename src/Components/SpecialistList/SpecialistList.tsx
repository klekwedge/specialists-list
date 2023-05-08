import { useEffect, useState } from "react";
import axios from "axios";
import SpecialistsItem from "../SpecialistItem/SpecialistItem";
import "./SpecialistList.scss";
import IUser, { SortValues } from "../../types/user";
import NotFound from "../NotFound/NotFound";

interface SpecialistListProps {
  filter: string;
  search: string;
  sort: SortValues;
}

function SpecialistList({ filter, search, sort }: SpecialistListProps) {
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
      listAfterFilter = users;
    } else {
      listAfterFilter = users.filter((user) => user.department === filter);
    }

    if (sort === "alphabet") {
      listAfterFilter = listAfterFilter.sort((a, b) =>
        a.firstName > b.firstName ? 1 : -1
      );
    }

    if (sort === 'birthday') {
      listAfterFilter = listAfterFilter.sort((a, b) =>
        a.birthday > b.birthday ? 1 : -1
      );
    }

    setFilterredUsers(
      listAfterFilter.filter(
        (item) =>
          item.firstName.toLowerCase().includes(search.toLowerCase()) ||
          item.lastName.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [users, filter, search, sort]);

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
