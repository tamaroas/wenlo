import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import ForgetPasswordForm from "../../components/ForgetPasswordForm/ForgetPasswordForm";
import ThemeColorIdentityDefaultIcon from "../../components/ThemeColorIdentityDefaultIcon/ThemeColorIdentityDefaultIcon";
import ContainerWithFormAndButtons from "../../components/ContainerWithFormAndButtons/ContainerWithFormAndButtons";

const Login: FunctionComponent = () => {
  return (
    <div className="login-login">
      <img className="login-loginChild" alt="" src="images/group-1.svg" />
      <img className="login-loginItem" alt="" src="images/group-1.svg" />
      <div className="login-loginInner" />
      <div className="login-frameParent">
        <div className="login-frameGroup">
          <div className="login-image1Parent">
            <img className="login-image1Icon" alt="" src="images/image-13@2x.png" />
            <div className="login-welcomeToWenlo">Welcome to Wenlo 👋</div>
          </div>
          <ForgetPasswordForm />
        </div>
        <div className="login-frameContainer">
          <button className="login-loginWrapper">
            <div className="login-login1">Login</div>
          </button>
          <Link className="login-doesntHaveAnContainer" to="/register">
            <span
              className="login-doesntHaveAn"
            >{`Doesn’t have an account? `}</span>
            <span className="login-signUp">Sign up</span>
          </Link>
        </div>
      </div>
      <div className="login-ellipseParent">
        <img className="login-frameChild" alt="" src="images/ellipse-3@2x.png" />
        <div className="login-frameItem" />
        <div className="login-frameItem" />
        <div className="login-frameItem" />
      </div>
      <div className="login-astronautParent">
        <ThemeColorIdentityDefaultIcon
          themeColorIdentityDefault="images/astronaut.svg"
          themeColorIdentityDefaultWidth="120px"
          themeColorIdentityDefaultHeight="120px"
          themeColorIdentityDefaultPosition="relative"
          themeColorIdentityDefaultFlexShrink="0"
        />
        <div className="login-frameDiv">
          <div className="login-image1Parent">
            <b className="login-loremIpsumDolor">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </b>
            <div className="login-sedDoEiusmod">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </div>
          </div>
          <ContainerWithFormAndButtons />
        </div>
      </div>
    </div>
  );
};

export default Login;
