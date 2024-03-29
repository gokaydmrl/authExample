import axios from "axios";

export const getHandler = async () => {
  const token = localStorage.getItem("token");
  console.log("get çalıştı", token);

  try {
    const resp = await axios.get("http://localhost:3001/deneme", {
      headers: {
        "authorization": `Bearer ${token}`,
      },
    });

    return resp.data;
  } catch (error) {
    console.log("error", error);
  }
};
