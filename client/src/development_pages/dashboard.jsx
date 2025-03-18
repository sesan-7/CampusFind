import { useState } from "react";
import "./Dashboard.css";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const [selected, setSelected] = useState("Home");
  const { user, token } = useAuth();

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
            { name: "Analytics", icon: "📊" },
            { name: "Settings", icon: "⚙️" },
            { name: "Log Out", icon: "" },
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
        <div className="center-pane"></div>
      </div>
    </div>
  );
}

