import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getHandler } from "../actions/getHandler";

const Haber = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const handler = async () => {
      const resp = await getHandler();
      setUsers(resp);
      console.log("resp", resp);
    };
    handler();
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user._id}>
            <p>{user.fName}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Haber;
