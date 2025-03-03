// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "../styles/Header.css";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <header className={`header ${scrolled ? "scrolled" : ""}`}>
//       <div className="container">
//         <Link to="/" className="logo">
//           <h1>CampusFind</h1>
//           <p>Efficient.Precise.Simple</p>
//         </Link>
//         <nav className={`nav ${menuOpen ? "open" : ""}`}>
//           <ul>
//             <li>
//               <Link to="/" onClick={() => setMenuOpen(false)}>
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/about" onClick={() => setMenuOpen(false)}>
//                 About
//               </Link>
//             </li>

//             <li>
//               <Link to="/Institution" onClick={() => setMenuOpen(false)}>
//                 Institution
//               </Link>
//             </li>
//             <li>
//               <Link to="/Register" onClick={() => setMenuOpen(false)}>
//                 Sign-Up
//               </Link>
//             </li>
//           </ul>
//         </nav>
//         <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
//           ☰
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <Link to="/" className="logo">
          <h1>CampusFind</h1>
          <p>Efficient.Precise.Simple</p>
        </Link>
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/Institution" onClick={() => setMenuOpen(false)}>
                Institution
              </Link>
            </li>
            <li>
              <Link to="/Register" onClick={() => setMenuOpen(false)}>
                Sign-Up
              </Link>
            </li>
          </ul>
        </nav>
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>
    </header>
  );
};

export default Header;
