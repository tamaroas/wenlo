import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SetPassword.css";
import Container from "../../components/Container/Container";
import ConfirmationCard from "../../components/ConfirmationCard/ConfirmationCard";

const SetPassword: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButton1Click = useCallback(() => {
    navigate("/forget-password");
  }, [navigate]);

  return (
    <div className="set-password-setPassword">
      <img className="set-password-setPasswordChild" alt="" src="images/group-1.svg" />
      <div className="set-password-setPasswordItem" />
      <div className="set-password-ellipseParent">
        <div className="set-password-frameChild" />
        <div className="set-password-frameItem" />
        <div className="set-password-frameItem" />
        <div className="set-password-frameItem" />
      </div>
      <Container />
      <div className="set-password-image1Parent">
        <img className="set-password-image1Icon" alt="" src="images/image-1@2x.png" />
        <div className="set-password-welcomeToWenlo">Welcome to Wenlo 👋</div>
      </div>
      <div className="set-password-frameParent">
        <ConfirmationCard
          activationCodeInput="Confirmation code"
          confirmationCodeInput="Enter your confirmation code"
        />
        <div className="set-password-frameGroup">
          <button
            className="set-password-continueWrapper"
            onClick={onFrameButton1Click}
          >
            <div className="set-password-continue">Continue</div>
          </button>
          <div className="set-password-didntGetAContainer">
            <span className="set-password-didntGetA">{`Didn’t get a code? `}</span>
            <span className="set-password-resendCode">Resend Code</span>
          </div>
        </div>
      </div>
      <div className="set-password-forgetPasswordParent">
        <b className="set-password-forgetPassword">Forget Password</b>
        <div className="set-password-weHaveSent">
          We have sent a confirmation code to Renaldaaji123@gmail.com
        </div>
      </div>
    </div>
  );
};

export default SetPassword;
