import { FunctionComponent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Question1.css';
import FormContainer1 from '../../components/FormContainer1/FormContainer1';
import Container from '../../components/Container/Container';

const Question1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButton1Click = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate('/question2');
  }, [navigate]);

  return (
    <div className="question1-question1">
      <img
        className="question1-question1Child"
        alt=""
        src="images/group-1.svg"
      />
      <div className="question1-question1Item" />
      <div className="question1-ellipseParent">
        <div className="question1-frameChild" />
        <div className="question1-frameItem" />
        <div className="question1-frameItem" />
        <div className="question1-frameItem" />
      </div>
      <Container />
      <div className="question1-image1Parent">
        <img
          className="question1-image1Icon"
          alt=""
          src="images/image-1@2x.png"
        />
        <div className="question1-welcomeToWenlo">Welcome to Wenlo 👋</div>
      </div>
      <div className="question1-vectorParent">
        <img
          className="question1-vectorIcon"
          alt=""
          src="images/vector-4141.svg"
        />
        <img
          className="question1-frameChild1"
          alt=""
          src="images/vector-414.svg"
        />
        <div className="question1-ellipseGroup">
          <div className="question1-frameChild2" />
          <div className="question1-welcomeToWenlo">Wenlo</div>
        </div>
        <div className="question1-ellipseContainer">
          <div className="question1-frameChild3" />
          <div className="question1-welcomeToWenlo">Business</div>
        </div>
        <div className="question1-frameDiv">
          <div className="question1-frameChild4" />
          <div className="question1-welcomeToWenlo">Advertising</div>
        </div>
      </div>
      <div className="question1-frameParent">
        <div className="question1-frameGroup">
          <FormContainer1
            questionText="What is the size of your business?"
            propWidth="unset"
            propWidth1="unset"
            propFlex="1"
          />
          <FormContainer1
            questionText="What type of business are you doing?"
            questionSubtitle="texeter"
            propWidth="unset"
            propWidth1="unset"
            propFlex="1"
          />
        </div>
        <div className="question1-frameContainer">
          <button
            className="question1-previousWrapper"
            onClick={onFrameButton1Click}
          >
            <div className="question1-previous">Previous</div>
          </button>
          <button
            className="question1-nextWrapper"
            onClick={onFrameButton2Click}
          >
            <div className="question1-next">Next</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question1;
