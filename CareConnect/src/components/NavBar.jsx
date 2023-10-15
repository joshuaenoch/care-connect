function NavBar() {
  return (
    <div className = "nav-container">
       <nav>
        <li className="company-name">
          <h1>
            Care<span className="connect">Connect</span>
          </h1>
        </li>
        <li className="company-name">
          <button>SOS</button>
        </li>
      </nav>
    </div>
  );
}

export default NavBar;
