import { MouseEvent } from "react";
import { NavigateFunction } from "react-router-dom";

const logout = (
  e: MouseEvent<HTMLButtonElement>,
  navigate: NavigateFunction
) => {
  e.preventDefault();
  console.log("Logged out successfully!");
  navigate("/");
};

export default logout;
