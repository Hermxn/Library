import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { urlsAPP } from "../utils/_urls";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const libraryButtons: React.ReactNode[] = [];
  if (auth.isLoggedIn) {
    libraryButtons.push(<button key="library">Library</button>);
    if (!auth.isAdmin)
      libraryButtons.push(<button key="favorites">Favorites</button>);
    if (auth.isAdmin) {
      libraryButtons.push(<button key="users">Users</button>);
      libraryButtons.push(<button key="reservations">Reservations</button>);
    }
  }

  const accountButtons: React.ReactNode[] = [];
  if (!auth.isLoggedIn) {
    accountButtons.push(
      <button key="signup" onClick={() => navigate(urlsAPP.signup)}>
        Sign up
      </button>
    );
    accountButtons.push(
      <button key="login" onClick={() => navigate(urlsAPP.login)}>
        Log in
      </button>
    );
  } else if (!auth.isAdmin) {
    accountButtons.push(<button key="account">Account</button>);
    accountButtons.push(
      <button key="Logout" onClick={() => auth.logout()}>
        Logout
      </button>
    );
  } else if (auth.isAdmin) {
    accountButtons.push(<button key="statistics">Statistics</button>);
  }

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Main logo" />
        <h2>Libro</h2>
      </div>
      <div className="navbar-library">{libraryButtons}</div>
      <div className="navbar-account">{accountButtons}</div>
    </div>
  );
};

export default Navbar;
