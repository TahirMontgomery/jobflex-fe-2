import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import bg from "../../images/auth-bg/bg-2.jpg";
import SocialAuthButton from "../../components/SocialAuthButton";
import { Auth } from "aws-amplify";

const wrapperStyle = {
  backgroundImage: `url(${bg})`,
};

interface RegisterInputProps {
  field: string;
  type: string;
  placeholder?: string;
  icon: string;
  onChangeMethod: Function;
  value: any;
}

function RegisterInput(props: RegisterInputProps) {
  return (
    <div className="form-group">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text bg-transparent">
            <i className={props.icon}></i>
          </span>
        </div>
        <input
          required={true}
          type={props.type}
          className="form-control pl-15 bg-transparent"
          placeholder={props.placeholder}
          value={props.value[props.field]}
          onChange={(e) => {
            props.onChangeMethod({
              ...props.value,
              [props.field]: e.target.value,
            });
          }}
        />
      </div>
    </div>
  );
}

function Register() {
  const fields = [
    {
      field: "firstName",
      type: "text",
      placeholder: "First Name",
      icon: "ti-user",
    },
    {
      field: "lastName",
      type: "text",
      placeholder: "Last Name",
      icon: "ti-user",
    },
    {
      field: "username",
      type: "text",
      placeholder: "User Name",
      icon: "ti-user",
    },
    {
      field: "email",
      type: "email",
      placeholder: "Email",
      icon: "ti-email",
    },
    {
      field: "companyName",
      type: "text",
      placeholder: "Company Name",
      icon: "ti-world",
    },
    {
      field: "companySize",
      type: "number",
      placeholder: "Company Size",
      icon: "ti-world",
    },
    {
      field: "phone",
      type: "tel",
      placeholder: "Phone Number",
      icon: "ti-mobile",
    },
    {
      field: "password",
      type: "password",
      placeholder: "Password",
      icon: "ti-lock",
    },
    {
      field: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      icon: "ti-lock",
    },
  ];

  const history = useHistory();
  const [registrationDetails, setRegistrationDetails] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    username: "",
    email: "",
    companySize: "",
    password: "",
    confirmPassword: "",
  });
  const [termsCheckbox, setTermsCheckbox] = useState(false);

  const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!termsCheckbox) {
      alert("In order to continue, please accept the terms & conditions.");
      return;
    }

    const fieldKeys = fields.map(({ field }) => field);
    const hasAllKeys = fieldKeys.every(
      (key) =>
        registrationDetails.hasOwnProperty(key) &&
        registrationDetails[key] !== ""
    );

    if (!hasAllKeys) {
      alert("Missing required fields");
      return;
    }

    if (
      registrationDetails["password"] !== registrationDetails["confirmPassword"]
    ) {
      alert("Passwords are not matching. Please re-enter password");
      return;
    }

    try {
      await Auth.signUp({
        username: registrationDetails.username,
        password: registrationDetails.password,
        attributes: {
          email: registrationDetails.email,
          given_name: registrationDetails.firstName,
          family_name: registrationDetails.lastName,
          "custom:companyName": registrationDetails.companyName,
        },
      });
      history.push({
        pathname: "/confirm",
        state: {
          email: registrationDetails.email,
          username: registrationDetails.username,
        },
      });
    } catch (err) {
      console.log(err);
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
                  <div className="content-top-agile p-20 pb-0">
                    <h2 className="text-primary">Get started with Us</h2>
                    <p className="mb-0">Register a new membership</p>
                  </div>
                  <div className="p-40">
                    <form onSubmit={(e) => registerUser(e)}>
                      {fields.map((field, idx) => {
                        return (
                          <RegisterInput
                            key={idx}
                            {...field}
                            onChangeMethod={setRegistrationDetails}
                            value={registrationDetails}
                          />
                        );
                      })}
                      <div className="row">
                        <div className="col-12">
                          <div className="checkbox">
                            <input
                              type="checkbox"
                              id="basic_checkbox_1"
                              checked={termsCheckbox}
                              onChange={(e) =>
                                setTermsCheckbox(e.target.checked)
                              }
                            />
                            <label htmlFor="basic_checkbox_1">
                              I agree to the{" "}
                              <a href="#" className="text-warning">
                                <b>Terms</b>
                              </a>
                            </label>
                          </div>
                        </div>
                        <div className="col-12 text-center">
                          <button
                            type="submit"
                            className="btn btn-info margin-top-10"
                          >
                            SIGN UP
                          </button>
                        </div>
                      </div>
                    </form>
                    <div className="text-center">
                      <p className="mt-15 mb-0">
                        Already have an account?
                        <Link to="/login" className="text-danger ml-5">
                          {" "}
                          Sign In
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div className="text-center">
                  <p className="mt-20 text-white">- Register With -</p>
                  <p className="gap-items-2 mb-20">
                    <SocialAuthButton mode="register" social="facebook" />
                    <SocialAuthButton mode="register" social="twitter" />
                    <SocialAuthButton mode="register" social="google" />
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

export { Register as default, RegisterInput };
