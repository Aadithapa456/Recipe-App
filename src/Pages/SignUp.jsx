import React, { useContext, useState } from "react";
import { supabase } from "../services/client";
import { ToastContext } from "../context/ToastContext";
import { useNavigate } from "react-router-dom";
import { Utensils } from "lucide-react";

const SignUp = () => {
  const navigate = useNavigate();
  const [signInInfo, setSignInInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    checkbox: false,
  });
  const handleSignInInfo = (e) => {
    const { name, value, type, checked } = e.target;
    setSignInInfo((prevInfo) => ({
      ...prevInfo,
      [name]: type === "checkbox" ? checked : value,
    }));
    console.log(signInInfo);
  };
  const { triggerToast } = useContext(ToastContext);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: signInInfo.email,
        password: signInInfo.password,
        options: {
          data: {
            first_name: signInInfo.first_name,
            last_name: signInInfo.last_name,
          },
        },
      });
      if (error) {
        triggerToast(error.message);
      } else {
        triggerToast("Login Sucessful!");
        navigate("/");
      }
    } catch (error) {
      console.error(error.message);
      triggerToast(error.message);
    }
  };
  return (
    <div className="min-w-[450px] bg-white px-8 py-4 shadow-md">
      <div className="login-header flex flex-col items-center gap-1">
        <div className="login-branding flex items-center justify-center gap-4 pb-2 pt-4 font-bold text-primary">
          <span className="text-4xl">ReciPie</span>
          <Utensils />
        </div>
        <div className="login-title mt-2 text-base">Welcome Back!</div>
        <div className="login-subtitle text-sm">
          Sign in to access your recipes
        </div>
      </div>
      <form
        action=""
        className="login-form mb-4 mt-10 flex flex-col gap-6"
        onSubmit={handleLoginSubmit}
      >
        <div className="form-group form-name flex gap-4">
          <div className="form-group-first-name flex flex-col">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              name="first_name"
              placeholder="Enter your full name"
              value={signInInfo.first_name}
              onChange={handleSignInInfo}
              className="rounded-sm border border-border-light p-2 focus:border-0"
            />
          </div>
          <div className="form-group-last-name flex flex-col">
            <label htmlFor="name">Last Name</label>
            <input
              type="text"
              id="last-name"
              name="last_name"
              placeholder="Enter your full name"
              value={signInInfo.last_name}
              onChange={handleSignInInfo}
              className="rounded-sm border border-border-light p-2 focus:border-0"
            />
          </div>
        </div>
        <div className="form-group form-email flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={signInInfo.email}
            onChange={handleSignInInfo}
            className="rounded-sm border border-border-light p-2 focus:border-0"
          />
        </div>
        <div className="form-group form-password flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={signInInfo.password}
            onChange={handleSignInInfo}
            placeholder="Enter your password"
            className="rounded-sm border border-border-light p-2 focus:border-0"
          />
        </div>
        <div className="form-footer flex justify-between">
          <label htmlFor="remember" className="flex items-center gap-4">
            <input
              type="checkbox"
              id="remember"
              name="checkbox"
              value={signInInfo.checked}
              onChange={handleSignInInfo}
            />
            <span>
              I agree to the{" "}
              <a
                href="#!"
                className="text-primary transition duration-300 hover:underline"
              >
                Terms & conditions
              </a>
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-primary py-2 text-white shadow-sm transition duration-300 hover:bg-primary-dark"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
