import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../context/AuthContext";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiUrl = import.meta.env.VITE_API_URL;

let role;

const handleAuthRequest = async (data, type) => {
  try {
    const endpoint = type === "register" ? "/register" : "/login";
    const response = await axios.post(
      `${baseUrl}${apiUrl}/auth${endpoint}`,
      data
    );

    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error.response.data.message ||
          `error sending ${type.charAt(0).toUpperCase() + type.slice(1)} data`
      );
    } else {
      throw new Error(error.message || "Something went wrong");
    }
  }
};

function Auth() {
  const ctx = useContext(AuthContext);
  const user = ctx.user;

  const navigate = useNavigate();
  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const changeAuthHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "register") {
      setRegisterForm({ ...registerForm, [name]: value });
    } else {
      setLoginForm({ ...loginForm, [name]: value });
    }
  };

  const handleSubmit = async (e, type) => {
    e.preventDefault();

    const formData = type === "register" ? registerForm : loginForm;

    try {
      const response = await handleAuthRequest(formData, type);
      localStorage.setItem("user", JSON.stringify(response.data));
      toast.success(
        `${type.charAt(0).toUpperCase() + type.slice(1)} Successful`
      );

      console.log(
        "response from the handlesubmit when clicked the button",
        response
      );

      if (response && response.data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
      console.error(error.message);
    }
  };

  useEffect(() => {
    if (user && user.role === "admin") {
      navigate("/admin");
    } else if (user && user.role === "user") {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="tabs tabs-lift tabs-top">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Register"
        />
        <div className="tab-content bg-base-100 border-base-300 p-8">
          <form
            className="flex flex-col gap-2 items-center justify-center"
            onSubmit={(e) => handleSubmit(e, "register")}
          >
            <label className="input validator w-full mb-2">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </g>
              </svg>
              <input
                type="input"
                name="username"
                value={registerForm.username}
                onChange={(e) => changeAuthHandler(e, "register")}
                required
                placeholder="Jhon Doe"
                pattern="[A-Za-z][A-Za-z0-9\-]*"
                minLength="3"
                maxLength="30"
                title="Only letters, numbers or dash"
              />
            </label>
            <label className="input validator w-full mb-2">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                name="email"
                value={registerForm.email}
                onChange={(e) => changeAuthHandler(e, "register")}
                placeholder="mail@site.com"
                required
              />
            </label>
            <label className="input validator w-full mb-4">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                name="password"
                value={registerForm.password}
                onChange={(e) => changeAuthHandler(e, "register")}
                required
                placeholder="Password"
                minLength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              />
            </label>
            <button type="submit" className="btn w-full">
              Register
            </button>
          </form>
        </div>

        {/* Login */}

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Login"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <form
            className="flex flex-col gap-2 items-center justify-center"
            onSubmit={(e) => handleSubmit(e, "login")}
          >
            <label className="input validator w-full mb-2">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                name="email"
                value={loginForm.email}
                onChange={(e) => changeAuthHandler(e, "login")}
                placeholder="mail@site.com"
                required
              />
            </label>
            <label className="input validator w-full mb-4">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                name="password"
                value={loginForm.password}
                onChange={(e) => changeAuthHandler(e, "login")}
                required
                placeholder="Password"
                minLength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              />
            </label>
            <button type="submit" className="btn w-full">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Auth;
