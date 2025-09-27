import React, { useState } from "react";
import "./Login.css";

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="section__padding app__bg flex__center login-section">
      <div className="login-card app__wrapper_info">
        <h1 className="headtext__cormorant">{isLogin ? "Log In" : "Register"}</h1>

        <form className="login-form">
          {!isLogin && (
            <input type="text" placeholder="Full Name" className="p__opensans" />
          )}
          <input type="email" placeholder="Email" className="p__opensans" />
          <input type="password" placeholder="Password" className="p__opensans" />

          <button type="submit" className="custom__button">
            {isLogin ? "Log In" : "Register"}
          </button>
        </form>

        <p className="p__opensans toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Register" : "Log In"}
          </span>
        </p>
      </div>
    </section>
  );
};

export default LoginRegister;
