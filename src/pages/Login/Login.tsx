import React from "react";
import { Link } from "react-router-dom";
import bg from "../../images/auth-bg/bg-2.jpg";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";

const wrapperStyle = {
  backgroundImage: `url(${bg})`,
};
function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let res = await Auth.signIn(username, password);
    } catch (error) {
      console.log("error signing in", error);
      alert(error.message);
    }
    return;
  };
  return (
    <div className="hold-transition theme-primary bg-img" style={wrapperStyle}>
      <div className="container" style={{ height: "100vh" }}>
        <div className="row align-items-center justify-content-md-center h-p100">
          <div className="col-12">
            <div className="row justify-content-center no-gutters">
              <div className="col-lg-5 col-md-5 col-12">
                <div className="bg-white rounded30 shadow-lg">
                  <div className="content-top-agile p-20 pb-0">
                    <h2 className="text-primary">Let's Get Started</h2>
                    <p className="mb-0">Sign in to continue to Jobflex.</p>
                  </div>
                  <div className="p-40">
                    <form onSubmit={login}>
                      <div className="form-group">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text bg-transparent">
                              <i className="ti-user"></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control pl-15 bg-transparent"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text  bg-transparent">
                              <i className="ti-lock"></i>
                            </span>
                          </div>
                          <input
                            type="password"
                            className="form-control pl-15 bg-transparent"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="row">
                        {/* <div className="col-6">
                          <div className="checkbox">
                            <input type="checkbox" id="basic_checkbox_1" />
                            <label htmlFor="basic_checkbox_1">
                              Remember Me
                            </label>
                          </div>
                        </div> */}
                        <div className="col-12">
                          <div className="fog-pwd text-right">
                            <Link
                              to="forgot-password"
                              className="hover-warning"
                            >
                              <i className="ion ion-locked"></i> Forgot pwd?
                            </Link>
                            <br />
                          </div>
                        </div>
                        <div className="col-12 text-center">
                          <button
                            type="submit"
                            className="btn btn-danger mt-10"
                          >
                            SIGN IN
                          </button>
                        </div>
                      </div>
                    </form>
                    <div className="text-center">
                      <p className="mt-15 mb-0">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-warning ml-5">
                          Sign Up
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="text-center">
                  <p className="mt-20 text-white">- Sign With -</p>
                  <p className="gap-items-2 mb-20">
                    <a
                      className="btn btn-social-icon btn-round btn-facebook"
                      href="#"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a
                      className="btn btn-social-icon btn-round btn-twitter"
                      href="#"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-social-icon btn-round btn-instagram"
                      href="#"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
