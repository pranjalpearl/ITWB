import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import authService from "@/Redux/feature/auth/authService";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setUser } from "@/Redux/feature/auth/authSlice";

const LoginModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [isLoginView, setIsLoginView] = useState(true);

  const loginMutation = useMutation({
    mutationFn: (payload) => authService.login(payload),
    onSuccess: (data) => {
      dispatch(setUser(data));
      toast.success("Login successful!");
      onClose();
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Login failed!");
    },
  });

  const signUpMutation = useMutation({
    mutationFn: (payload) => authService.signup(payload),
    onSuccess: (data) => {
      toast.success("Sign up successful!");
      setIsLoginView(true);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Sign up failed!");
    },
  });

  if (!isOpen) {
    return null;
  }

  const handleShowSignUp = (e) => {
    e.preventDefault();
    setIsLoginView(false);
  };

  const handleShowLogin = (e) => {
    e.preventDefault();
    setIsLoginView(true);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    loginMutation.mutate(payload);
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    signUpMutation.mutate(payload);
  };

  return (
    <div
      className="modal fade show  backdrop-blur-sm"
      id="rtmodal-1"
      onClick={() => {
        onClose()
        setIsLoginView(true)
      }}
      style={{
        display: "block",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        fontSize: "16px",
      }}
    >
      <div
        className="modal-dialog modal-dialog-centered rt-lgoinmodal "
        role="document"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          {}
          <div className="modal-body m-12">
            {isLoginView ? (
              <>
                <div className="text-center mb-6">
                  <img
                    src="/images/logo/logo.png"
                    alt="modal logo"
                    className="mx-auto h-32 w-40"
                  />
                  <h4 className="text-2xl font-bold mt-4 text-gray-800">
                    Login in to Indi Tour
                  </h4>
                  <p className="text-gray-600 mt-2">
                    Log in to get in the moment updates on the things that
                    interest you.
                  </p>
                </div>
                <div>
                  <form onSubmit={handleLoginSubmit}>
                    <input
                      type="text"
                      name="email"
                      required
                      className="w-full border border-gray-300 rounded-full px-5 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="User name or Email"
                    />
                    <input
                      type="password"
                      name="password"
                      required
                      className="w-full border border-gray-300 rounded-full px-5 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Password"
                    />
                    <div className="flex items-center px-2 my-4 gap-2 ">
                      <input type="checkbox" />
                      <label className="itmes-centre">Remember Password</label>
                    </div>
                    <button
                      type="submit"
                      disabled={loginMutation.isPending}
                      className={`w-full text-white font-bold py-3 px-4 !rounded-full uppercase 
                        bg-gradient-to-r from-purple-600 to-blue-500 
                        hover:from-purple-700 hover:to-blue-600 
                        cursor-pointer 
                        transition duration-200 ease-in-out
                        ${
                          loginMutation.isPending
                            ? "opacity-70 cursor-not-allowed"
                            : ""
                        }`}
                    >
                      {loginMutation.isPending ? "Logging in..." : "Log In"}
                    </button>
                  </form>
                  <div className="text-center mt-6">
                    <span className="text-gray-700">
                      Don’t have an account?{" "}
                    </span>
                    <a
                      href="#"
                      onClick={handleShowSignUp}
                      className="font-semibold text-blue-600 hover:text-blue-800"
                    >
                      Sign Up Now &raquo;
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="text-center mb-6">
                  <img
                    src="/images/logo/logo.png"
                    alt="modal logo"
                    className="mx-auto h-32 w-40"
                  />
                  <h4 className="text-2xl font-bold mt-4 text-gray-800">
                    Create your Account
                  </h4>
                  <p className="text-gray-600 mt-2">
                    Sign up to get in the moment updates on the things that
                    interest you.
                  </p>
                </div>
                <div>
                  <form onSubmit={handleSignUpSubmit}>
                    <input
                      type="text"
                      name="username"
                      required
                      className="w-full border border-gray-300 rounded-full px-5 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="User name"
                    />
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full border border-gray-300 rounded-full px-5 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter your mail address"
                    />
                    <input
                      type="password"
                      name="password"
                      required
                      className="w-full border border-gray-300 rounded-full px-5 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Password"
                    />
                   
                    <button
                      type="submit"
                      disabled={signUpMutation.isPending}
                      className={`w-full !rounded-full text-white font-bold py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 cursor-pointer transition duration-200 ease-in-out
                        ${
                          signUpMutation.isPending
                            ? "opacity-70 cursor-not-allowed"
                            : ""
                        }`}
                    >
                      {signUpMutation.isPending ? "Signing up..." : "Sign Up"}
                    </button>
                  </form>
                  <div className="text-center mt-6">
                    <span className="text-gray-700">
                      Already have an account?{" "}
                    </span>
                    <a
                      href="#"
                      onClick={handleShowLogin}
                      className="font-semibold text-blue-600 hover:text-blue-800"
                    >
                      LOGIN &raquo;
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;