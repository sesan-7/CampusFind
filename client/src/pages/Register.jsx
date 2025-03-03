import { useForm } from "react-hook-form";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/Register.css";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const onSubmit = (data) => {
    console.log("User Data:", data);
    setIsRegistered(true);
  };

  const password = watch("password");

  return (
    <div className="main-content">
      <div className="login-info">
        <h1>
          Welcome to <span className="highlight">CampusFind</span>
        </h1>
        <p>
          The ultimate platform to navigate, explore, and connect within your
          campus. Find locations, events, and fellow students effortlessly.
        </p>
        <p>
          Sign up now to access personalized recommendations, campus guides, and
          community discussions!
        </p>
      </div>
      <div className="flex">
        {isRegistered ? (
          <div className="success-message">Registration Successful!</div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <div className="logo">
              <h1>CampusFind</h1>
              <p>Efficient. Precise. Simple.</p>
            </div> */}
            <h1>Sign-Up</h1>
            <input
              {...register("name", { required: "Full name is required" })}
              placeholder="Full Name"
            />

            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Email"
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

            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                placeholder="Confirm Password"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="password-toggle"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>

            <div className="error-center">
              {errors.name && (
                <p className="error-message">{errors.name.message}</p>
              )}
              {errors.email && (
                <p className="error-message">{errors.email.message}</p>
              )}
              {errors.password && (
                <p className="error-message">{errors.password.message}</p>
              )}
              {errors.confirmPassword && (
                <p className="error-message">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button type="submit">Register</button>

            <div className="redirect">
              <p>
                Already have an account? <span />
                <Link to={"/Login"}> Login</Link>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
