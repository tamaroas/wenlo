import { FunctionComponent } from "react";
import "./ConfirmPasswordForm.css";

const ConfirmPasswordForm: FunctionComponent = () => {
  return (
    <div className="confirmation-password-card-comp-frameParent">
      <div className="confirmation-password-card-comp-frameGroup">
        <div className="confirmation-password-card-comp-firstNameParent">
          <h5 className="confirmation-password-card-comp-firstName">First name</h5>
          <input className="confirmation-password-card-comp-frameChild" name="name" type="text" />
        </div>
        <div className="confirmation-password-card-comp-firstNameParent">
          <h5 className="confirmation-password-card-comp-firstName">Last name</h5>
          <input className="confirmation-password-card-comp-frameChild" name="lastname" type="text" />
        </div>
      </div>
      <div className="confirmation-password-card-comp-emailParent">
        <h5 className="confirmation-password-card-comp-firstName">Email</h5>
        <input className="confirmation-password-card-comp-frameInner" name="email" type="email" />
      </div>
      <div className="confirmation-password-card-comp-frameGroup">
        <div className="confirmation-password-card-comp-firstNameParent">
          <h5 className="confirmation-password-card-comp-firstName">New password</h5>
          <div className="confirmation-password-card-comp-frameWrapper">
            <input
              className="confirmation-password-card-comp-frameInput"
              type="password"
              minLength={4}
            />
          </div>
          <h6 className="confirmation-password-card-comp-oneCapitalLetterContainer">
            <span>
              One capital letter required, one special character required, one
              number required
            </span>
            <span className="confirmation-password-card-comp-span">*</span>
          </h6>
        </div>
        <div className="confirmation-password-card-comp-firstNameParent">
          <h5 className="confirmation-password-card-comp-firstName">Confirm password</h5>
          <div className="confirmation-password-card-comp-frameWrapper">
            <input
              className="confirmation-password-card-comp-frameInput"
              type="password"
              minLength={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPasswordForm;
