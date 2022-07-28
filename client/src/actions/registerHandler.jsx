import axios from "axios";

export const registerHandler = async (data, token) => {
  try {
    const resp = await axios.post("http://localhost:3001/register", data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    console.log("register devrede");
    return resp.data;
  } catch (error) {
    console.log("thas error:", error);
  }
};
