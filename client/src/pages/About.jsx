import { useEffect } from "react";
import "../styles/About.css";

export default function About() {
  useEffect(() => {
    document.title = "About | CampusFind";
  }, []);

  return (
    <div className="about-container">
      <header className="about-header">
        <h1>
          Welcome to <span className="highlight">CampusFind</span>
        </h1>
        <p>Your ultimate **campus navigation and discovery platform**</p>
      </header>

      <section className="about-content">
        <h2>📍 What is CampusFind?</h2>
        <p>
          **CampusFind** is a smart platform designed to **help students,
          faculty, and visitors** navigate their campus, discover events, and
          connect with communities. Whether you're searching for a **lecture
          hall, a library, or a social event**, CampusFind makes it easy and
          efficient.
        </p>

        <h2>🌟 Why Choose CampusFind?</h2>
        <ul>
          <li>
            <strong>📍 Accurate Navigation:</strong> Get step-by-step directions
            to campus locations.
          </li>
          <li>
            <strong>📅 Event Discovery:</strong> Stay updated with campus
            activities and important announcements.
          </li>
          <li>
            <strong>📢 Community Engagement:</strong> Connect with fellow
            students and faculty members.
          </li>
          <li>
            <strong>📱 User-Friendly Interface:</strong> A sleek and intuitive
            design for easy access.
          </li>
          <li>
            <strong>🚀 AI-Powered Search:</strong> Find places, events, and
            people with **AI-driven recommendations**.
          </li>
        </ul>

        <h2>🛠️ How It Works?</h2>
        <p>
          Using **advanced mapping, AI, and real-time data**, CampusFind allows
          users to:
        </p>
        <ol>
          <li>🔎 **Search** for buildings, events, or people.</li>
          <li>🗺️ **Get Directions** to classrooms, offices, and facilities.</li>
          <li>
            📢 **Stay Informed** with notifications about campus activities.
          </li>
          <li>
            💬 **Connect** with students and faculty for discussions and
            networking.
          </li>
        </ol>

        <h2>📞 Contact Us</h2>
        <p>
          Have feedback or need support? Reach out to us at
          <a href="mailto:support@campusfind.com"> support@campusfind.com</a>
        </p>
      </section>
    </div>
  );
}
