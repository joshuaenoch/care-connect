function NavBar() {
  return (
    <div className = "nav-container">
       <nav>
        <li className="company-name">
          <div style={{fontSize:"30px"}}>
            Care<span className="connect">Connect</span>
          </div>
        </li>
        <li className="company-name">
          <button style={{backgroundColor:"darkred", color:"white"}}>SOS</button>
        </li>
      </nav>
    </div>
  );
}

export default NavBar;
