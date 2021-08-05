import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import bg from "../../images/auth-bg/bg-2.jpg";
import { Auth } from "aws-amplify";

const wrapperStyle = {
  backgroundImage: `url(${bg})`,
};

function ConfirmEmail() {
  const { state } = useLocation();
  const history = useHistory();
  const [confirmationCode, setConfirmationCode] = useState("");

  if (!state || !state.email || !state.username) {
    history.push("/login");
  }

  const confirmSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await Auth.confirmSignUp(state.username, confirmationCode);
      alert("Confirmation successful");
      history.push("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  const resendCode = async () => {
    try {
      await Auth.resendSignUp(state.username);
      alert("Code sent successfully. Please check your email for the new code");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="hold-transition theme-primary bg-img" style={wrapperStyle}>
      <div className="container" style={{ height: "100vh" }}>
        <div className="row align-items-center justify-content-md-center h-p100">
          <div className="col-12">
            <div className="row justify-content-center no-gutters">
              <div className="col-lg-5 col-md-5 col-12">
                <div className="bg-white rounded30 shadow-lg">
                  <div className="content-top-agile p-20">
                    <h3 className="mb-0">Confirmation</h3>
                    <p className="mt-2 mb-0">
                      Please enter the code that was sent to the email:
                    </p>
                    <p>{state.email}</p>
                  </div>
                  <div className="p-40">
                    <form onSubmit={confirmSignUp}>
                      <div className="form-group">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text bg-transparent">
                              <i className="ti-lock"></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control pl-15 bg-transparent"
                            placeholder="Confirm Code"
                            onChange={(e) =>
                              setConfirmationCode(e.target.value)
                            }
                            value={confirmationCode}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 text-center">
                          <button type="submit" className="btn btn-info mt-10">
                            Confirm
                          </button>
                        </div>
                      </div>
                    </form>

                    <div className="text-center">
                      <p className="mt-20">- OR -</p>
                      <p className="mb-5">
                        Click{" "}
                        <a
                          href="#"
                          onClick={resendCode}
                          className="text-danger"
                        >
                          <b>Here </b>
                        </a>
                        to resend confirmation code
                      </p>
                    </div>

                    <div className="text-center">
                      <p className="mt-15 mb-0">
                        Or{" "}
                        <a
                          href="#"
                          onClick={() => history.push("/login")}
                          className="text-warning"
                        >
                          <b>Sign In</b>
                        </a>{" "}
                        as a Different User
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmEmail;
