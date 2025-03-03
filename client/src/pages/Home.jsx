import { Link } from "react-router-dom";
import "../styles/home.css";

const HomePage = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Find People Around You Instantly!</h1>
        <p>
          CampusFind helps you connect with students, faculty, and friends in
          your campus or area effortlessly. Discover, connect, and interact with
          ease.
        </p>
        <Link to="/Register" className="btn">
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>📍 Locate People Easily</h3>
            <p>
              Search and find students, faculty, or friends within your campus
              in real-time.
            </p>
          </div>
          <div className="feature-item">
            <h3>🔍 Smart Filters & Categories</h3>
            <p>
              Filter people by department, year, interests, or location to
              refine your search.
            </p>
          </div>
          <div className="feature-item">
            <h3>🔒 Secure & Private</h3>
            <p>
              Your data is safe with end-to-end encryption and user-controlled
              visibility settings.
            </p>
          </div>
          <div className="feature-item">
            <h3>💬 Messaging & Quick Connect</h3>
            <p>Send messages or connect instantly with just a tap.</p>
          </div>
          <div className="feature-item">
            <h3>🎉 Event & Group Discovery</h3>
            <p>
              Find and join events, clubs, and study groups around your campus.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Join CampusFind today and never lose track of your connections!</h2>
        <div className="cta-buttons">
          <Link to="/Register" className="btn">
            Sign Up Now
          </Link>
          <Link to="/explore" className="btn btn-secondary">
            Explore More
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
