import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getHandler } from "../actions/getExample";

const Haber = () => {
  const [users, setUsers] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const handler = async () => {
      const resp = await getHandler(token);
      setUsers(resp);
      console.log("resp", resp);
    };
    handler();
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Haber;
