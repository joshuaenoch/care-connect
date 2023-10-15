import React, { useState } from 'react';

function NavBar() {
  const [isSOSNoticeVisible, setSOSNoticeVisible] = useState(false);

  const handleSOSClick = () => {
    setSOSNoticeVisible(true);

    // Automatically hide the notice after 5 seconds (5000 milliseconds)
    setTimeout(() => {
      setSOSNoticeVisible(false);
    }, 3000);
  };

  return (
    <div className="nav-container">
      <nav>
        <li className="company-name">
          <div style={{ fontSize: "30px" }}>
            Care<span className="connect">Connect</span>
          </div>
        </li>
        <li className="company-name">
          <button
            style={{ backgroundColor: "darkred", color: "white" }}
            onClick={handleSOSClick}
          >
            SOS
          </button>
        </li>
      </nav>
      {isSOSNoticeVisible && (
        <div style={{ backgroundColor: "red", color: "white", textAlign: "center" }}>
          Your caregiver has been notified!
        </div>
      )}
    </div>
  );
}

export default NavBar;
