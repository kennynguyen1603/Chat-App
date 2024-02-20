import React from "react";

const Login = () => {
  return (
    <div id="login">
      <div className="formContainer">
        <div className="formWrapper">
          <form>
            <div className="formTitle">
              <span>Login</span>
            </div>
            <div className="formInput">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="email" />
            </div>
            <div className="formInput">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="password" />
            </div>
            <div className="formButton">
              <button type="submit">Login</button>
            </div>
          </form>
          <p>
            Do you have an account? <a href="">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
