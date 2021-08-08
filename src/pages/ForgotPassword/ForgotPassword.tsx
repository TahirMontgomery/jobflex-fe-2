import React from "react";
import bg from "../../images/auth-bg/bg-2.jpg";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";

const wrapperStyle = {
  backgroundImage: `url(${bg})`,
};

function RecoverPassword(props) {
  const sendResetCode = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await Auth.forgotPassword(props.username);
      props.change(true);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={sendResetCode}>
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
            placeholder="Your username"
            value={props.username}
            onChange={(e) => props.setUsername(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-info margin-top-10">
            Reset
          </button>
        </div>
      </div>
    </form>
  );
}

function ConfirmCode(props) {
  const history = useHistory();
  const resetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (props.confirmPassword !== props.password) {
      alert("Passwords are not a match. Try again.");
      return;
    }

    try {
      await Auth.forgotPasswordSubmit(
        props.username,
        props.code,
        props.password
      );
      alert("Successfully reset password. Please login");
      history.push("/login");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <form onSubmit={resetPassword}>
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
            placeholder="Your code"
            value={props.code}
            onChange={(e) => props.setCode(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text bg-transparent">
              <i className="ti-lock"></i>
            </span>
          </div>
          <input
            type="password"
            className="form-control pl-15 bg-transparent"
            placeholder="Your New Password"
            value={props.password}
            onChange={(e) => props.setPassword(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text bg-transparent">
              <i className="ti-lock"></i>
            </span>
          </div>
          <input
            type="password"
            className="form-control pl-15 bg-transparent"
            placeholder="Confirm New Password"
            value={props.confirmPassword}
            onChange={(e) => props.setConfirmPassword(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-info margin-top-10">
            Reset
          </button>
        </div>
      </div>
    </form>
  );
}

function ForgotPassword() {
  const [codeSent, setCodeSent] = React.useState(false);
  const [username, setUsername] = React.useState("d");
  const [code, setCode] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  return (
    <div className="hold-transition theme-primary bg-img" style={wrapperStyle}>
      <div className="container" style={{ height: "100vh" }}>
        <div className="row align-items-center justify-content-md-center h-p100">
          <div className="col-12">
            <div className="row justify-content-center no-gutters">
              <div className="col-lg-5 col-md-5 col-12">
                <div className="bg-white rounded30 shadow-lg">
                  <div className="content-top-agile p-20 pb-0">
                    <h3 className="mb-0 text-primary">
                      {codeSent ? "Confirm Recovery" : "Recover Password"}
                    </h3>
                  </div>
                  <div className="p-40">
                    {!codeSent ? (
                      <RecoverPassword
                        username={username}
                        setUsername={setUsername}
                        change={setCodeSent}
                      />
                    ) : (
                      <ConfirmCode
                        password={password}
                        setPassword={setPassword}
                        confirmPassword={confirmPassword}
                        setConfirmPassword={setConfirmPassword}
                        code={code}
                        setCode={setCode}
                        username={username}
                      />
                    )}
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

export default ForgotPassword;
