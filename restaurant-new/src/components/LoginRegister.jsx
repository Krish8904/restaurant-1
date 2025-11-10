import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { name, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      const user = {
        email,
        password,
      };

      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const body = JSON.stringify(user);

        const res = await axios.post("http://localhost:5000/api/users/login", body, config);

        localStorage.setItem("token", res.data.token);
        navigate("/profile");
      } catch (err) {
        setError(err.response.data.msg);
      }
    } else {
      const newUser = {
        name,
        email,
        password,
      };

      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const body = JSON.stringify(newUser);

        const res = await axios.post("http://localhost:5000/api/users/register", body, config);

        localStorage.setItem("token", res.data.token);
        navigate("/profile");
      } catch (err) {
        setError(err.response.data.msg);
      }
    }
  };

  return (
    <section className="section__padding app__bg flex__center login-section">
      <div className="login-card app__wrapper_info">
        <h1 className="headtext__cormorant">{isLogin ? "Log In" : "Register"}</h1>

        {error && <p className="p__opensans" style={{ color: "red" }}>{error}</p>}

        <form className="login-form" onSubmit={onSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={name}
              onChange={onChange}
              className="p__opensans"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChange}
            className="p__opensans"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            className="p__opensans"
          />

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
