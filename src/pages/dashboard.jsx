import { useEffect, useState } from "react";
import "../styles/Dashboard.css";
import { useAuth } from "../context/AuthContext";
import LoginForm from "./Login";
import InstitutionSchemaPage from "./InstitutionMemberSchema.jsx";
import { useNavigate } from "react-router-dom";
import UserManagementPage from "./UserManagement.jsx";

export default function Dashboard() {
  const [selected, setSelected] = useState("Home");
  const { user, token } = useAuth();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (user == null) {
  //     alert("You have to login to view the dashboard!");
  //     navigate("/login");
  //   }
  // }, [user])

  return (
    <div className="dashboard-container main-content">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h2 className="dashboard-text">Dashboard</h2>
        </div>
        <nav className="menu">
          {[
            { name: "Home", icon: "🏠" },
            { name: "Member Schema", icon: "" },
            { name: "User Management", icon: "" },
            { name: "Settings", icon: "⚙️" },
            { name: "Log Out", icon: "<- " },
          ].map((item) => (
            <button
              key={item.name}
              className={`menu-item ${selected === item.name ? "active" : ""}`}
              onClick={() => setSelected(item.name)}
            >
              <span className="icon">{item.icon}</span>
              <span>{item.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Bar */}
        <div className="top-bar">
          <h1>{selected}</h1>
          <span>User: John Doe</span>
        </div>

        {/* Empty Center Pane */}
        <div className="center-pane">
          {selected === "Member Schema" && <InstitutionSchemaPage />}
          {selected === "User Management" && <UserManagementPage/>}
        </div>
      </div>
    </div>
  );
}

