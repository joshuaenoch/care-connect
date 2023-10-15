import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
       <nav className="nav-foot">
        <div className="nav-links">
          <ul className="nav-bar">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/GamePage">
                Activities
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/JournalPage">
                Journal
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/CaregiverPage">
                Caregiver
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/SignIn">
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
