import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

let userIsAdmin: boolean = false;
let userIsLoggedIn: boolean = false;

const Navbar = () => {
  const navigate = useNavigate();

  const libraryButtons: React.ReactNode[] = [];
  if (userIsLoggedIn) {
    libraryButtons.push(<button key="library">Library</button>);
    if (!userIsAdmin)
      libraryButtons.push(<button key="favorites">Favorites</button>);
    if (userIsAdmin) {
      libraryButtons.push(<button key="users">Users</button>);
      libraryButtons.push(<button key="reservations">Reservations</button>);
    }
  }

  const accountButtons: React.ReactNode[] = [];
  if (!userIsLoggedIn) {
    accountButtons.push(
      <button key="signup" onClick={() => navigate("/signup")}>
        Sign up
      </button>
    );
    accountButtons.push(
      <button key="login" onClick={() => navigate("/login")}>
        Log in
      </button>
    );
  } else if (!userIsAdmin) {
    accountButtons.push(<button key="account">Account</button>);
  } else if (userIsAdmin) {
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
