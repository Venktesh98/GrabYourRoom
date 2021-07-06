import axios from "axios";

export const getSingleUserData = (userId) => {
  console.log("In get user Data:", userId);
  const response = axios.get(
    `http://localhost:5000/user/getSingleUser/${userId}`
  );
  return response;
};
