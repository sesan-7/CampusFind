import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Institution from "../pages/Institution";
import InstitutionSchemaPage from "../development_pages/InstitutionMemberSchema";
import ProfilePage from "../pages/Profile";
import Dashboard from "../development_pages/dashboard";

export default function BlogRouter() {
  return (
    <Router>
      <Routes>
        {/* Pages with Header & Footer */}
        <Route
          path="*"
          element={
            <>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/Institution" element={<Institution />} />
                <Route path="/about" element={<About />} />
                <Route path="/dev/memberschema" element={<InstitutionSchemaPage />} />
                <Route path="/dev/profile" element={<ProfilePage />} />
              </Routes>
              <Footer />
            </>
          }
        />
        
        {/* Dashboard WITHOUT Header & Footer */}
        <Route path="/dev/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

