import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faGamepad, faBook, faHandshake, faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <nav className="nav-foot">
        <div className="nav-links">
          <ul className="nav-bar">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                <FontAwesomeIcon icon={faHome} size="2x"/> {/*Home*/}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/GamePage">
                <FontAwesomeIcon icon={faGamepad} size="2x"/> {/*Activities*/}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/JournalPage">
                <FontAwesomeIcon icon={faBook} size="2x"/> {/*Journal*/}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/CaregiverPage">
                <FontAwesomeIcon icon={faHandshake} size="2x"/> {/*Caregiver*/}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/SignIn">
                <FontAwesomeIcon icon={faUser} size="2x"/> {/*Sign up*/}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
