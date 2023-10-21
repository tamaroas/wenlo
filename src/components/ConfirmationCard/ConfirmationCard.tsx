import { FunctionComponent } from 'react';
import './ConfirmationCard.css';

type ConfirmationCardType = {
  activationCodeInput?: string;
  confirmationCodeInput?: string;
};

const ConfirmationCard: FunctionComponent<ConfirmationCardType> = ({
  activationCodeInput,
  confirmationCodeInput,
}) => {
  return (
    <div className="confirmation-card-comp-frameWrapper">
      <div className="confirmation-card-comp-frameContainer">
        <div className="confirmation-card-comp-confirmationCodeParent">
          <div className="confirmation-card-comp-confirmationCode">
            <span>{activationCodeInput}</span>
            <span className="confirmation-card-comp-span">*</span>
          </div>
          <input
            className="confirmation-card-comp-frameChild"
            placeholder={confirmationCodeInput}
            type="number"
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmationCard;
