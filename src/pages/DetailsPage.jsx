import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Details({}) {
  const { specialistId } = useParams();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then(determineCurrentUser)
      .catch((e) => {
        console.log(e);
        throw new Error("Some error occurred while sending the request!!!");
      });
  }, [specialistId]);

  function determineCurrentUser(users) {
    setCurrentUser(...users.data.filter((user) => user.id === specialistId));
  }

  console.log(currentUser);

  return (
    <div>
      Example
      {console.log(currentUser)}
    </div>
  );
}

export default Details;
