import ButtonsNavbar from "./ButtonsNavbar";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Main logo" />
        <h2>Libro</h2>
      </div>
      <ButtonsNavbar />
    </div>
  );
};

export default Navbar;
