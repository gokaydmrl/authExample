import axios from "axios";

export const getHandler = async () => {
  const token = localStorage.getItem("token");

  try {
    const resp = await axios.get("http://localhost:3001/register", {
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
