import React from "react";
import { Link } from "react-router-dom"; // Use React Router for navigation
import "./styles_home.css";
import logo from "./assets/college_log.png"; // Correct way to import images in React

const Home = () => {
  return (
    <div className="container">
      <header>
        <nav>
          <img src={logo} alt="College Logo" />
          <h1 className="title">Title</h1>
          <div className="buttons">
            <Link to="">GET IN</Link> {/* Using React Router Link */}
          </div>
        </nav>
      </header>

      <main>
        <div className="content">
          <h1>Hello Students!</h1>
          <p>Click Get Started to create an account or Login if you already have one.</p>
          <Link className="btn-getStart" to="">Get Started</Link> {/* React Router */}
        </div>
      </main>
    </div>
  );
};

export default Home;