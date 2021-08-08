import React from "react";
import { Hub, Logger, Auth } from "aws-amplify";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import auth, { login, logout } from "../store/auth";

function CognitoAuthWrapper({ children }) {
  const logger = new Logger("My-Logger");
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const protectedRoutes = [
    "/",
    "/apps",
    "/jobs",
    "/inbox",
    "/calendar",
    "/settings",
  ];

  const logoutAndRedirect = () => {
    dispatch(logout());
    history.push("/login");
  };

  const authenticate = async (loc) => {
    let rootUrl = "/" + loc.pathname.split("/")[1];
    if (protectedRoutes.includes(rootUrl)) {
      try {
        let res = await Auth.currentSession();
        if (!res.isValid()) {
          logoutAndRedirect();
        }

        let user = await Auth.currentAuthenticatedUser();
        dispatch(
          login({
            ...user.attributes,
            username: user.username,
          })
        );
      } catch (error) {
        logoutAndRedirect();
      }
    }
  };

  const listener = (data) => {
    switch (data.payload.event) {
      case "signIn":
        logger.info("user signed in");
        dispatch(
          login({
            ...data.payload.data.attributes,
            username: data.payload.data.username,
          })
        );
        history.push("/");
        break;
      case "signUp":
        logger.info("user signed up");
        break;
      case "signOut":
        logger.info("user signed out");
        logoutAndRedirect();
        break;
      case "signIn_failure":
        logger.error("user sign in failed");
        break;
      case "tokenRefresh":
        logger.info("token refresh succeeded");
        break;
      case "tokenRefresh_failure":
        logger.error("token refresh failed");
        break;
      case "configured":
        logger.info("the Auth module is configured");
    }
  };

  React.useEffect(() => {
    Hub.listen("auth", listener);
    const unlisten = history.listen((loc) => {
      authenticate(loc);
    });

    authenticate(location);

    return () => {
      Hub.remove("auth", listener);
      unlisten();
    };
  });

  return <div>{children}</div>;
}

export default CognitoAuthWrapper;
