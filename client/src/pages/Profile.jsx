import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/Profile.css";

function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "John Doe",
    email: "admin@example.com",
    role: "Admin",
    institution: "Example University",
    location: "New York, USA",
  });

  const handleLogout = () => {
    alert("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className="maincont">
      <div className="profile-container">
        <h2>Profile</h2>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Role:</strong> {user.role}
        </p>
        <p>
          <strong>Institution:</strong> {user.institution}
        </p>
        <p>
          <strong>Location:</strong> {user.location}
        </p>
        <button onClick={handleLogout}>Logout</button>

        <button onClick={() => navigate("/InstitutionMemberSchemaPage")}>
          Go to Institution Schema
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
