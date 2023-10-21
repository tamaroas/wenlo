import { FunctionComponent, useCallback } from "react";
import { Link } from "react-router-dom";
import ThemeColorIdentityDefaultIcon from "../../components/ThemeColorIdentityDefaultIcon/ThemeColorIdentityDefaultIcon";
import "./Register.css";
import ConfirmPasswordForm from "../../components/ConfirmPasswordForm/ConfirmPasswordForm";
import ContainerCardForm from "../../components/ContainerCardForm/ContainerCardForm";

const Register: FunctionComponent = () => {
  const onAlreadyHaveAnClick = useCallback(() => {
    window.open("/login");
  }, []);

  return (
    <div className="register-register">
      <img className="register-registerChild" alt="" src="images/group-1.svg" />
      <img className="register-registerItem" alt="" src="images/group-1.svg" />
      <section className="register-registerInner" />
      <div className="register-frameParent">
        <div className="register-image1Parent">
          <img className="register-image1Icon" alt="" src="images/image-11@2x.png" />
          <h4 className="register-welcomeToWenlo">Welcome to Wenlo 👋</h4>
        </div>
        <ConfirmPasswordForm />
      </div>
      <div className="register-frameGroup">
        <button className="register-nextWrapper">
          <div className="register-next">Next</div>
        </button>
        <Link
          className="register-alreadyHaveAnContainer"
          to="/login"
          onClick={onAlreadyHaveAnClick}
        >
          <span
            className="register-alreadyHaveAn"
          >{`Already have an account? `}</span>
          <span className="register-signIn">Sign in</span>
        </Link>
      </div>
      <div className="register-ellipseParent">
        <div className="register-frameChild" />
        <div className="register-frameItem" />
        <div className="register-frameItem" />
        <div className="register-frameItem" />
      </div>
      <div className="register-astronautParent">
        <ThemeColorIdentityDefaultIcon
          themeColorIdentityDefault="/astronaut.svg"
          themeColorIdentityDefaultWidth="120px"
          themeColorIdentityDefaultHeight="120px"
          themeColorIdentityDefaultPosition="relative"
          themeColorIdentityDefaultFlexShrink="0"
        />
        <div className="register-frameContainer">
          <div className="register-image1Parent">
            <h1 className="register-loremIpsumDolor">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h1>
            <h6 className="register-sedDoEiusmod">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </h6>
          </div>
          <ContainerCardForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
