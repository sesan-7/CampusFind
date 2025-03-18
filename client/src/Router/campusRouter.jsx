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
import { AuthProvider } from "../context/AuthContext";

export default function BlogRouter() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Pages with Header & Footer */}
          <Route path="/" element={<><Header /><Home /><Footer /></>} />
          <Route path="/login" element={<><Header /><Login /><Footer /></>} />
          <Route path="/register" element={<><Header /><Register /><Footer /></>} />
          <Route path="/institution" element={<><Header /><Institution /><Footer /></>} />
          <Route path="/about" element={<><Header /><About /><Footer /></>} />
          <Route path="/dev/memberschema" element={<><Header /><InstitutionSchemaPage /><Footer /></>} />
          <Route path="/dev/profile" element={<><Header /><ProfilePage /><Footer /></>} />

          {/* Dashboard WITHOUT Header & Footer */}
          <Route path="/dev/dashboard" element={<Dashboard />} />

          {/* 404 Page */}
          <Route path="*" element={<><Header /><h2>404 - Page Not Found</h2><Footer /></>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

