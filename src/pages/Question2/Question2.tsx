import { FunctionComponent, useCallback } from "react";
import SpendingIssuesFormContainer from "../../components/SpendingIssuesFormContainer/SpendingIssuesFormContainer";
import { useNavigate } from "react-router-dom";
import "./Question2.css";
import Container from "../../components/Container/Container";

const Question2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer53Click = useCallback(() => {
    navigate("/question1");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/pricing-default");
  }, [navigate]);

  return (
    <div className="question2-question2">
      <img className="question2-question2Child" alt="" src="images/group-1.svg" />
      <div className="question2-question2Item" />
      <div className="question2-ellipseParent">
        <div className="question2-frameChild" />
        <div className="question2-frameItem" />
        <div className="question2-frameItem" />
        <div className="question2-frameItem" />
      </div>
      <Container />
      <div className="question2-image1Parent">
        <img className="question2-image1Icon" alt="" src="images/image-1@2x.png" />
        <div className="question2-welcomeToWenlo">Welcome to Wenlo 👋</div>
      </div>
      <div className="question2-vectorParent">
        <img className="question2-vectorIcon" alt="" src="images/vector-4141.svg" />
        <img className="question2-frameChild1" alt="" src="images/vector-4141.svg" />
        <div className="question2-ellipseGroup">
          <div className="question2-frameChild2" />
          <div className="question2-welcomeToWenlo">Wenlo</div>
        </div>
        <div className="question2-ellipseContainer">
          <div className="question2-frameChild2" />
          <div className="question2-welcomeToWenlo">Business</div>
        </div>
        <div className="question2-frameDiv">
          <div className="question2-frameChild4" />
          <div className="question2-welcomeToWenlo">Advertising</div>
        </div>
      </div>
      <div className="question2-frameParent">
        <SpendingIssuesFormContainer />
        <div className="question2-frameGroup">
          <div
            className="question2-previousWrapper"
            onClick={onFrameContainer53Click}
          >
            <div className="question2-previous">Previous</div>
          </div>
          <button className="question2-nextWrapper" onClick={onFrameButton1Click}>
            <div className="question2-next">Next</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question2;
