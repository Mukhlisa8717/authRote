import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Auth from "./pages/auth/Auth";
import Admin from "./pages/admin/Admin";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
