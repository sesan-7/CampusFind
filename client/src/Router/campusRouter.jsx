// Router  ...................
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components ...................
import Header from "../components/Header";
import Footer from "../components/Footer";

// //Pages ...........................
import Home from "../pages/Home";
import About from "../pages/About";
// import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
// import Logout from "../pages/Logout";
import Register from "../pages/Register";
import Institution from "../pages/Institution";
import InstitutionSchemaPage from "../development_pages/InstitutionMemberSchema";

export default function BlogRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        {/* <Route path="/logout" element={<Logout />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/Institution" element={<Institution />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}

        {/* DEVELOPEMENT PAGES */}
        {/* For institution member schema page */}

        <Route path="/dev/memberschema" element={<InstitutionSchemaPage/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}
