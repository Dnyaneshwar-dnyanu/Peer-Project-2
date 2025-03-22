import React, { useState } from "react";
import "./styles_login_signup.css"; // Import external CSS

function App() {
  // State to toggle between login and signup
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      {isLogin ? (
        <section className="login-section">
          <div className="form-container">
            <div className="content login-content">
              <h1>LOGIN</h1>
              <form>
                <label>
                  <input type="text" placeholder="e.g., 1MS23CS001" />
                </label>
                <label>
                  <input type="password" placeholder="Password" />
                </label>
                <a href="#">Forget Your Password?</a>
                <input type="submit" value="LOGIN" />
              </form>
            </div>
            <div className="content login-side-content">
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details to use all site features</p>
              <button onClick={() => setIsLogin(false)}>SIGN UP</button>
            </div>
          </div>
        </section>
      ) : (
        <section className="signup-section">
          <div className="form-container">
            <div className="content signup-side-content">
              <h1>Welcome, Back!</h1>
              <p>Enter your personal details to use all site features</p>
              <button onClick={() => setIsLogin(true)}>SIGN IN</button>
            </div>
            <div className="content signup-content">
              <h1>SignUp</h1>
              <form>
                <label>
                  <input type="text" placeholder="Name" />
                </label>
                <label>
                  <input type="text" placeholder="e.g., 1MS23CS001" />
                </label>
                <select>
                  <option value="">Select semester</option>
                  <option value="1">I</option>
                  <option value="2">II</option>
                  <option value="3">III</option>
                  <option value="4">IV</option>
                  <option value="5">V</option>
                  <option value="6">VI</option>
                  <option value="7">VII</option>
                  <option value="8">VIII</option>
                </select>
                <label>
                  <input type="email" placeholder="Email" />
                </label>
                <label>
                  <input type="password" placeholder="Password" />
                </label>
                <input type="submit" value="SIGN UP" />
              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default login_signup;