import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgetPassword.css";
import Container from "../../components/Container/Container";

const ForgetPassword: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButton1Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="forget-password-forgetPassword">
      <img className="forget-password-forgetPasswordChild" alt="" src="images/group-1.svg" />
      <div className="forget-password-forgetPasswordItem" />
      <div className="forget-password-ellipseParent">
        <div className="forget-password-frameChild" />
        <div className="forget-password-frameItem" />
        <div className="forget-password-frameItem" />
        <div className="forget-password-frameItem" />
      </div>
      <Container />
      <div className="forget-password-image1Parent">
        <img className="forget-password-image1Icon" alt="" src="images/image-1@2x.png" />
        <div className="forget-password-welcomeToWenlo">Welcome to Wenlo 👋</div>
      </div>
      <div className="forget-password-frameParent">
        <div className="forget-password-frameGroup">
          <div className="forget-password-newPasswordParent">
            <div className="forget-password-newPassword">
              <span>New password</span>
              <span className="forget-password-span">*</span>
            </div>
            <input
              className="forget-password-frameInput"
              placeholder="Enter your new password"
              type="text"
            />
            <div className="forget-password-oneCapitalLetterContainer">
              <span>
                One capital letter required, one special character required, one
                number required
              </span>
              <span className="forget-password-span">*</span>
            </div>
          </div>
          <div className="forget-password-newPasswordParent">
            <div className="forget-password-newPassword">
              <span>Confirm password</span>
              <span className="forget-password-span">*</span>
            </div>
            <input
              className="forget-password-frameInput"
              placeholder="Confirm your new password"
              type="text"
            />
          </div>
        </div>
        <button className="forget-password-submitWrapper" onClick={onFrameButton1Click}>
          <div className="forget-password-submit">Submit</div>
        </button>
      </div>
      <div className="forget-password-setNewPasswordParent">
        <b className="forget-password-setNewPassword">Set New Password</b>
        <div className="forget-password-pleaseSetA">
          Please set a password for your account.
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
