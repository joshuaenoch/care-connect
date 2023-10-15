import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav>
        <li className="company-name">
          <h1>
            Care<span className="connect">Connect</span>
          </h1>
        </li>
        <div className="nav-links">
          <ul className="nav-bar">
            <li className="nav-item">
              <NavLink className="nav-link" to="/Home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/GamePage">
                GamePage
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/SignIn">
                Sign In
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
