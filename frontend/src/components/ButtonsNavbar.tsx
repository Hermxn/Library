import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ButtonsNavBarHandler from "../handlers/ButtonsNavBarHandler";
import ButttonsInterface from "../interfaces/ButtonsNavbarInterface";
import { urlsAPP } from "../utils/_urls";
import "../styles/ButtonsNavbar.css";

const ButtonsNavbar = () => {
  const navigate = useNavigate();
  const { isAdmin, isLoggedIn, logout } = useAuth();

  const navbarButtonsMainArray: ButttonsInterface[] = [
    {
      key: "Library",
      isLoggedIn: true,
      isAdmin: false,
      func: () => navigate(urlsAPP.library),
    },
    {
      key: "Favorites",
      isLoggedIn: true,
      isAdmin: false,
      func: () => navigate(urlsAPP.favorites),
    },
    {
      key: "Users",
      isLoggedIn: true,
      isAdmin: true,
      func: () => navigate(urlsAPP.users),
    },
    {
      key: "Reservations",
      isLoggedIn: true,
      isAdmin: true,
      func: () => navigate(urlsAPP.reservations),
    },
    {
      key: "Statistics",
      isLoggedIn: true,
      isAdmin: true,
      func: () => navigate(urlsAPP.satistics),
    },
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
      func: () => logout(),
    },
    {
      key: "Account",
      isLoggedIn: true,
      isAdmin: false,
      func: () => navigate(urlsAPP.account),
    },
  ];

  const NavbarMainButtons = ButtonsNavBarHandler(navbarButtonsMainArray)
    .filterLoggedIn(isLoggedIn, isAdmin)
    .createButtons();

  const NavbarAccountButtons = ButtonsNavBarHandler(navbarButtonsAccountArray)
    .filterLoggedIn(isLoggedIn, isAdmin)
    .createButtons();

  return (
    <>
      <div className="button-navbar-library">{NavbarMainButtons}</div>
      <div className="button-navbar-account">{NavbarAccountButtons}</div>
    </>
  );
};

export default ButtonsNavbar;
