import React, { useState } from "react";
import styles from "./Login.module.css";
import GoogleLogin from "react-google-login";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const str = e.target.value;
    setShowPassword(str.includes("@") && str.includes("."));
  };

  const responseGoogle = (res) => {
    if (res.profileObj) {
      const data = { ...res.profileObj, events: {} };
      localStorage.setItem("login", JSON.stringify(data));
    } else {
      setError("Google login failed. Please try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className={styles.login}>
      <div className={styles.nav}>
        <svg
          viewBox="0 0 256 48"
          xmlns="http://www.w3.org/2000/svg"
          className="icon-logo"
          width="110"
          height="24"
          aria-label="Booking.com Logo"
        >
          {/* SVG paths here */}
        </svg>
        <img
          className={styles.buiavatarimage}
          src="https://q-xx.bstatic.com/backend_static/common/flags/new/48/in.png"
          alt="India Flag"
        />
      </div>

      <div className={styles.form}>
        <h2 className={styles.formheading}>Sign in or create an account</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>
          <input
            onChange={handleChange}
            className={styles.input}
            type="email"
            name="email"
            id="email"
            autoFocus
            required
          />
          {showPassword && (
            <div>
              <label htmlFor="password1">Password</label>
              <input
                className={styles.input}
                type="password"
                name="password1"
                id="password1"
                required
              />
              <label htmlFor="password2">Confirm Password</label>
              <input
                className={styles.input}
                type="password"
                name="password2"
                id="password2"
                required
              />
            </div>
          )}
          <input
            className={styles.button}
            type="submit"
            value="Create account"
            aria-label="Create account"
          />
        </form>
        {error && <p className={styles.error}>{error}</p>}
      </div>

      <div className={styles.line}>
        <hr className={styles.hr} />
        <p className={styles.p}>or use one of these options</p>
        <hr className={styles.hr} />
      </div>

      <div className={styles.authlogin}>
        <GoogleLogin
          clientId="378817930652-26drd8dhlmr4qet0ilu2qts92m12mpdr.apps.googleusercontent.com"
          render={({ onClick, disabled }) => (
            <button
              className={styles.google}
              onClick={onClick}
              disabled={disabled}
              aria-label="Sign in with Google"
            >
              <img
                className={styles.googleimage}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC-KxlZ9aqVMbPO3Ll49gBa3Ro245LV3KdLR2w4kQO4gy_PYVGJTPv4mBaJmVRNK4WPp4&usqp=CAU"
                alt="Google Icon"
              />
            </button>
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          isSignedIn={true}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
};

export default Login;
