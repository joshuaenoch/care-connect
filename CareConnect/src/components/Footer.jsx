import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
       <nav className="nav-foot">
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
              <NavLink className="nav-link" to="/SignInSignUp">
                Sign up
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
