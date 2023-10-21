/* eslint-disable jsx-a11y/anchor-is-valid */
import { FunctionComponent } from "react";
import "./ActivateAccount.css";
import Container from "../../components/Container/Container";
import ConfirmationCard from "../../components/ConfirmationCard/ConfirmationCard";

const ActivateAccount: FunctionComponent = () => {
  return (
    <div className="activate-account-activateAccount">
      <img className="activate-account-activateAccountChild" alt="" src="images/group-1.svg" />
      <div className="activate-account-activateAccountItem" />
      <div className="activate-account-ellipseParent">
        <div className="activate-account-frameChild" />
        <div className="activate-account-frameItem" />
        <div className="activate-account-frameItem" />
        <div className="activate-account-frameItem" />
      </div>
      <Container />
      <div className="activate-account-image1Parent">
        <img className="activate-account-image1Icon" alt="" src="images/image-1@2x.png" />
        <div className="activate-account-welcomeToWenlo">Welcome to Wenlo 👋</div>
      </div>
      <div className="activate-account-frameParent">
        <ConfirmationCard
          activationCodeInput="Enter the activation code"
          confirmationCodeInput="334b86"
        />
        <div className="activate-account-frameGroup">
          <button className="activate-account-submitWrapper">
            <div className="activate-account-submit">Submit</div>
          </button>
          <a className="activate-account-didntReceiveAContainer" href="#">
            <span
              className="activate-account-didntReceiveA"
            >{`Didn’t receive a mail, `}</span>
            <span className="activate-account-clickHere">click here</span>
            <span className="activate-account-didntReceiveA">
              {" "}
              and check your mailbox again.
            </span>
          </a>
        </div>
      </div>
      <div className="activate-account-activateYourAccountParent">
        <b className="activate-account-activateYourAccount">Activate your account</b>
        <div className="activate-account-enterTheActivation">
          Enter the activation code present in your mail
        </div>
      </div>
    </div>
  );
};

export default ActivateAccount;
