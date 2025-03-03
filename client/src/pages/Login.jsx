import { useForm } from "react-hook-form";
import { useState } from "react";
import "../styles/Login.css";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    setIsLoggedIn(true);
  };

  return (
    <div className="main-content">
      <div className="login-info">
        <h1>
          Welcome to <span className="highlight">CampusFind</span>
        </h1>
        <p className="login-subheading">
          Your go-to platform for seamless campus navigation and connections.
        </p>
        <p className="login-description">
          CampusFind helps students, faculty, and visitors explore and interact
          with their campus like never before. From finding locations to
          connecting with peers, we make campus life more efficient, precise,
          and simple.
        </p>
      </div>
      <div className="flex">
        {isLoggedIn ? (
          <div className="success-message">Login Successful!</div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>
            <input
              {...register("username", { required: "Username is required" })}
              placeholder="Username"
            />

            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", { required: "Password is required" })}
                placeholder="Password"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="password-toggle"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>

            <div className="error-center">
              {errors.username && (
                <p className="error-message">{errors.username.message}</p>
              )}
              {errors.password && (
                <p className="error-message">{errors.password.message}</p>
              )}
            </div>

            <button type="submit">Login</button>

            <div className="redirect">
              <p>
                Don't have an account?{" "}
                <span>
                  <Link to={"/Register"}>Register</Link>
                </span>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
