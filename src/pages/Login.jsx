import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import "../styles/Login.css"
import { Eye, EyeOff } from "lucide-react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext.jsx"
import axios from 'axios'
import Header from "../components/Header.jsx"

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const authContext = useAuth()

  const { login } = authContext || {}

  useEffect(() => {
    console.log(authContext.token)
  }, [authContext.token])

  const loginWithEmailAndPassword = async () => {
    await login(email, password)
    console.log(authContext.token)
    
    axios
      .get('http://localhost:8080/institution/configuration_status', {
        headers: {
          "Authorization": `Bearer ${authContext.token}`
        }
      })
      .then((response) => {
        console.log(response)
        console.log(response.data.institution_configuration_status)
        let institutionRegistered = response.data.institution_configuration_status;
        
        if (institutionRegistered) {
          navigate("/dev/dashboard")
        }
        else {
          navigate("/institution")
        }
      })
      .catch((error) => console.log(error))
  }

  return (
    <div className="main-content">
      <div className="login-info">
        <h1>Welcome to <span className="highlight">CampusFind</span></h1>
        <p className="login-subheading">
          Your go-to platform for seamless campus navigation and connections.
        </p>
      </div>
      <div className="flex">
        {(<form onSubmit={handleSubmit(loginWithEmailAndPassword)}> 
          <h1>Login</h1>
          <input
            className="input"
            {...register("email", { required: "Email is required" })}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", { required: "Password is required" })}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="password-toggle"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>

          <div className="error-center">
            {errors.email && <p className="error-message">{errors.email.message}</p>}
            {errors.password && <p className="error-message">{errors.password.message}</p>}
          </div>

          {/* <Link to={"/institution"} type="submit"> */}
          <button type="submit" onClick={() => { loginWithEmailAndPassword() }}>
            Login
          </button>
          {/* </Link> */}

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
  )
}

