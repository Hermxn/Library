import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import ButtonsNavBarHandler from "../handlers/ButtonsNavBarHandler";
import ButttonsInterface from "../interfaces/ButtonsNavbarInterface";
import { urlsAPP } from "../utils/_urls";

const ButtonsNavbar = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const navbarButtonsMainArray: ButttonsInterface[] = [
    { key: "Library", isLoggedIn: true, isAdmin: false, func: () => {} },
    { key: "Favorites", isLoggedIn: true, isAdmin: false, func: () => {} },
    { key: "Users", isLoggedIn: true, isAdmin: true, func: () => {} },
    { key: "Reservations", isLoggedIn: true, isAdmin: true, func: () => {} },
    { key: "Statistics", isLoggedIn: true, isAdmin: true, func: () => {} },
  ];

  const navbarButtonsAccountArray: ButttonsInterface[] = [
    {
      key: "Signup",
      isLoggedIn: false,
      isAdmin: false,
      func: () => navigate(urlsAPP.signup),
    },
    {
      key: "Login",
      isLoggedIn: false,
      isAdmin: false,
      func: () => navigate(urlsAPP.login),
    },
    {
      key: "Logout",
      isLoggedIn: true,
      isAdmin: false,
      func: () => auth.logout(),
    },
    { key: "Account", isLoggedIn: true, isAdmin: false, func: () => {} },
  ];

  const NavbarMainButtons = ButtonsNavBarHandler(navbarButtonsMainArray)
    .filterLoggedIn(auth.isLoggedIn, auth.isAdmin)
    .createButtons();

  const NavbarAccountButtons = ButtonsNavBarHandler(navbarButtonsAccountArray)
    .filterLoggedIn(auth.isLoggedIn, auth.isAdmin)
    .createButtons();

  return (
    <>
      <div className="navbar-library">{NavbarMainButtons}</div>
      <div className="navbar-account">{NavbarAccountButtons}</div>
    </>
  );
};

export default ButtonsNavbar;
