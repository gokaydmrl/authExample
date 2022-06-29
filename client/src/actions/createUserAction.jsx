import axios from "axios";
export const createUserAction = (user) => {
  try {
    const response = axios.post("http://localhost:3001/register", user);
    return response.data;
  } catch (error) {
    console.log("error while creating user", error);
  }
};
