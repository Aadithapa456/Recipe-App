import { Utensils } from "lucide-react";
import React, { useState } from "react";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
    checked: true,
  });
  const handleLoginInfo = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginInfo((prevInfo) => ({
      ...prevInfo,
      [name]: type === "checkbox" ? checked : value,
    }));
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
      <form action="" className="login-form mb-4 mt-10 flex flex-col gap-8">
        <div className="form-group form-email flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={loginInfo.email}
            onChange={handleLoginInfo}
            className="rounded-sm border border-border-light p-2 focus:border-0"
          />
        </div>
        <div className="form-group form-password flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginInfo.password}
            onChange={handleLoginInfo}
            placeholder="Enter your password"
            className="rounded-sm border border-border-light p-2 focus:border-0"
          />
        </div>
        <div className="form-footer flex justify-between">
          <label htmlFor="remember" className="flex items-center gap-2">
            <input
              type="checkbox"
              id="remember"
              name="checkbox"
              value={loginInfo.checked}
              onChange={handleLoginInfo}
            />
            <span>Remember Me</span>
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-primary py-2 text-white shadow-sm transition duration-300 hover:bg-primary-dark"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
