import { Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import Navbar from "./components/Navbar";
import {
  Home,
  Auth,
  Account,
  Library,
  Favorites,
  Users,
  Reservations,
  Statistics,
} from "./pages/_index";
import { urlsAPP } from "./utils/_urls";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path={urlsAPP.home} element={<Home />} />
          <Route path={urlsAPP.login} element={<Auth formtype="login" />} />
          <Route path={urlsAPP.signup} element={<Auth formtype="signup" />} />
          <Route path={urlsAPP.account} element={<Account />} />
          <Route path={urlsAPP.library} element={<Library />} />
          <Route path={urlsAPP.favorites} element={<Favorites />} />
          <Route path={urlsAPP.users} element={<Users />} />
          <Route path={urlsAPP.reservations} element={<Reservations />} />
          <Route path={urlsAPP.satistics} element={<Statistics />} />
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;
