// import axios from "axios";


// // let obj = {fName: "", email:"", password:""};

// // export const errorHandling = (erObject) => {
// //   obj = erObject.data.errorsObject;

// //   console.log("obj az önceki olmaı", Object.entries(obj));
// //   return obj;
// // };

// export const createUserAction = async (user) => {
  
//   try {
//     const response = await axios.post("http://localhost:3001/register", user);
//     return response.data;
//   } catch (error) {
//     if (error.response) {
//       return setErrors(error.response.data);

//       // console.log("error while creating user", error.message);
//       // console.log("data", error.response.data);
//       // console.log("stat", error.response.status);
//       // console.log("head", error.response.headers);
//     }
//   }
// };
