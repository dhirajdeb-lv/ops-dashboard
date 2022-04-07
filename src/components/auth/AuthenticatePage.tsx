import { useNavigate } from "react-router-dom";

import login from "./login";

const AuthenticatePage = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="heading">
        <h1 className="heading__main">Koko Club</h1>
      </div>
      <div className="float-clear"></div>
      <div className="line line-vertical"></div>
      <div className="box">
        <form>
          <div className="input-group">
            <label className="input-group__label">Username</label>
            <input
              id="username"
              type="text"
              className="input-group__input"
              name="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="input-group">
            <label className="input-group__label">Password</label>
            <input
              id="password"
              type="password"
              className="input-group__input"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <input
            type="submit"
            value="Login"
            className="btn btn-primary right"
            onClick={(e) => {
              login(e, navigate);
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default AuthenticatePage;
