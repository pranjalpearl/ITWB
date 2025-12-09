import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AuthModal = ({ show, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  // State for Login form fields
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  // State for Sign Up form fields
  const [signupData, setSignupData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  // Handler for Login input changes
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  // Handler for Sign Up input changes
  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };
  
  // Prevent form submission from reloading the page
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Login submitted:", loginData);
      // Add login logic here
    } else {
      console.log("Signup submitted:", signupData);
      // Add signup logic here
    }
  };

  // Reset to login and clear fields whenever modal closes
  useEffect(() => {
    if (!show) {
      // Use a small timeout to allow the exit animation to finish before reset
      setTimeout(() => {
        setIsLogin(true);
        setLoginData({ username: "", password: "" });
        setSignupData({ fullName: "", username: "", email: "", password: "" });
      }, 300); 
    }
  }, [show]);

  if (!show) return null;

  return (
    <div
      className={`modal fade ${show ? "show" : ""}`}
      style={{
        display: show ? "block" : "none",
        background: "rgba(0,0,0,0.6)",
      }}
      tabIndex="-1"
      role="dialog"
      aria-hidden={!show}
    >
      <div
        className="modal-dialog modal-dialog-centered rt-lgoinmodal"
        role="document"
      >
        <AnimatePresence>
          {show && (
            <motion.div
              key="auth-modal"
              className="modal-content"
              initial={{ opacity: 0, scale: 0.8, y: -50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="modal-body">
                {/* Header */}
                {isLogin ? (
                  <div className="rt-modal-headr rt-mb-20 one">
                    <img
                      src="/images/logo/Logo-icon.png"
                      alt="modal logo"
                      draggable="false"
                    />
                    <h4>Login in to Emigrar</h4>
                    <p>
                      Log in to get in the moment updates on the things that
                      interest you.
                    </p>
                  </div>
                ) : (
                  <div className="rt-modal-headr rt-mb-20 two">
                    <img
                      src="/assets/images/logo/Logo-icon.png"
                      alt="modal logo"
                      draggable="false"
                    />
                    <h4>Create your Account</h4>
                    <p>
                      Sign up to get in the moment updates on the things that
                      interest you.
                    </p>
                  </div>
                )}

                {/* Forms */}
                {isLogin ? (
                  <div className="rt-modal-input one">
                    <form className="rt-form" onSubmit={handleSubmit}>
                      <input
                        type="text"
                        name="username" // Added name
                        value={loginData.username} // Added value
                        onChange={handleLoginChange} // Added onChange
                        className="form-control pill rt-mb-15"
                        placeholder="User name"
                      />
                      <input
                        type="password"
                        name="password" // Added name
                        value={loginData.password} // Added value
                        onChange={handleLoginChange} // Added onChange
                        className="form-control pill rt-mb-15"
                        placeholder="Password"
                      />
                      <div className="form-group forgot-pass">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheckss"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="gridCheckss"
                          >
                            Remember Password
                          </label>
                        </div>
                      </div>
                      <input
                        type="submit"
                        className="rt-btn rt-gradient pill d-block text-uppercase"
                        value="Log In"
                      />
                    </form>
                    <div className="ac-register pb-12 -mt-6">
                      <span>
                        Don’t have an account?{" "}
                        <button
                          type="button"
                          className="open-creatac text-blue-600"
                          onClick={() => setIsLogin(false)}
                        >
                          Sign Up Now <i className="icofont-double-right"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="rt-modal-input two">
                    <form className="rt-form" onSubmit={handleSubmit}>
                      <input
                        type="text"
                        name="fullName" // Added name
                        value={signupData.fullName} // Added value
                        onChange={handleSignupChange} // Added onChange
                        className="form-control pill rt-mb-15"
                        placeholder="Full Name"
                      />
                      <input
                        type="text"
                        name="username" // Added name
                        value={signupData.username} // Added value
                        onChange={handleSignupChange} // Added onChange
                        className="form-control pill rt-mb-15"
                        placeholder="User name"
                      />
                      <input
                        type="email"
                        name="email" // Added name
                        value={signupData.email} // Added value
                        onChange={handleSignupChange} // Added onChange
                        className="form-control pill rt-mb-15"
                        placeholder="Enter your mail address"
                      />
                      <input
                        type="password"
                        name="password" // Added name
                        value={signupData.password} // Added value
                        onChange={handleSignupChange} // Added onChange
                        className="form-control pill rt-mb-15"
                        placeholder="Password"
                      />
                      <div className="form-group forgot-pass">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck333"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="gridCheck333"
                          >
                            I'd like to hear about promos, new products, and
                            more!
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck222"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="gridCheck222"
                          >
                            By clicking "Sign up" you agree to our Terms of
                            Service and Privacy Policy
                          </label>
                        </div>
                      </div>
                      <input
                        type="submit"
                        className="rt-btn rt-gradient pill d-block text-uppercase"
                        value="Sign Up"
                      />
                    </form>
                    <div className="ac-register">
                      <span>
                        Already have an account?{" "}
                        <button
                          type="button"
                          className="text-blue-600"
                          onClick={() => setIsLogin(true)}
                        >
                          LOGIN <i className="icofont-double-right"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                )}

                {/* Close button */}
                <button
                  type="button"
                  onClick={onClose}
                  style={{ fontSize: "30px", lineHeight: "1" }}
                  className="absolute top-2 right-2  font-bold"
                >
                  &times;
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AuthModal;