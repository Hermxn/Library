import ButtonsNavbar from "./ButtonsNavbar";
import logo from "../assets/Libro.svg";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Main logo" />
        <h2>Libro</h2>
      </div>
      <ButtonsNavbar />
    </nav>
  );
};

export default Navbar;
