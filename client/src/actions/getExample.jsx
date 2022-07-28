import axios from "axios";

export const getHandler = async (token) => {
  try {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    console.log("get çalıştı", token);

    return resp.data;
  } catch (error) {
    console.log("error", error);
  }
};
