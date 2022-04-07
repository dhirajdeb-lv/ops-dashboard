import { useNavigate, Link } from "react-router-dom";

import logout from "./logout";
import Catalog from "./Catalog";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <span className="header__heading">Koko Club</span>
        <button
          onClick={(e) => logout(e, navigate)}
          className="btn btn-secondary btn-logout right"
        >
          Logout
        </button>
      </header>
      <nav className="navbar">
        <Link to="/catalog" className="navbar__item">
          Catalog
        </Link>
      </nav>
      <nav className="sidebar">
        <Link to="/products" className="sidebar__item">
          Products
        </Link>
      </nav>
      <div className="container">
        <Catalog />
      </div>
    </>
  );
};

export default LandingPage;
