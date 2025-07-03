import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import { Home, Auth } from "./pages/_index";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/" element={<Auth formtype="login" />} />
          <Route path="/signup/" element={<Auth formtype="signup" />} />
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;
