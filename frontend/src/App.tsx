import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import BookProvider from "./context/BookContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <>
      <AuthProvider>
        <BookProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/" element={<Login />} />
            <Route path="/signup/" element={<Signup />} />
          </Routes>
        </BookProvider>
      </AuthProvider>
    </>
  );
};

export default App;
