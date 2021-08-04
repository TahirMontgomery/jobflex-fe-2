import React from "react";

interface SocialAuthButtonInput {
  mode: "login" | "register";
  social: "facebook" | "google" | "instagram" | "twitter";
}
function SocialAuthButton(props: SocialAuthButtonInput) {
  return (
    <a className={`btn btn-social-icon btn-round btn-${props.social}`} href="#">
      <i className={`fa fa-${props.social}`}></i>
    </a>
  );
}

export default SocialAuthButton;
