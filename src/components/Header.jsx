import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>Vasireddy Venkatadri Institute of Technology</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/students">Students</NavLink>
      </nav>
    </header>
  );
}

export default Header;