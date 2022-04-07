import { MouseEvent } from "react";
import { NavigateFunction } from "react-router-dom";

const login = (e: MouseEvent<HTMLInputElement>, navigate: NavigateFunction) => {
  e.preventDefault();
  const username = (<HTMLInputElement>document.getElementById("username"))
    .value;
  const password = (<HTMLInputElement>document.getElementById("password"))
    .value;
  if (!!username && !!password) {
    navigate("/home");
    console.log("Login successful!");
  }
};

export default login;
