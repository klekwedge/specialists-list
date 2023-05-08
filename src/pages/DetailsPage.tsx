import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import IUser from "../types/user";

function Details() {
  const { specialistId } = useParams();
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((req) => determineCurrentUser(req.data))
      .catch((e) => {
        console.log(e);
        throw new Error("Some error occurred while sending the request!!!");
      });
  }, [specialistId]);

  function determineCurrentUser(users: IUser[]) {
    const currentUser = users.find((user) => user.id === specialistId);
    if (currentUser) {
      setCurrentUser(currentUser);
    }
  }

  // console.log(currentUser);

  return <div>Example</div>;
}

export default Details;
