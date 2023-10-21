import { FunctionComponent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Question.css';
import Container from '../../components/Container/Container';
import WenloContainer from '../../components/WenloContainer/WenloContainer';
import FormContainer1 from '../../components/FormContainer1/FormContainer1';

const Question: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButton1Click = useCallback(() => {
    navigate('/register');
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate('/question1');
  }, [navigate]);

  return (
    <div className="question-question">
      <img className="question-questionChild" alt="" src="images/group-1.svg" />
      <div className="question-questionItem" />
      <div className="question-ellipseParent">
        <div className="question-frameChild" />
        <div className="question-frameItem" />
        <div className="question-frameItem" />
        <div className="question-frameItem" />
      </div>
      <Container />
      <div className="question-image1Parent">
        <img
          className="question-image1Icon"
          alt=""
          src="images/image-1@2x.png"
        />
        <div className="question-welcomeToWenlo">Welcome to Wenlo 👋</div>
      </div>
      <WenloContainer />
      <div className="question-frameParent">
        <FormContainer1
          questionText="How did you hear about Wenlo?"
          isAnswered={true}
        />
        <div className="question-frameGroup">
          <button
            className="question-previousWrapper"
            onClick={onFrameButton1Click}
          >
            <div className="question-previous">Previous</div>
          </button>
          <button
            className="question-nextWrapper"
            onClick={onFrameButton2Click}
          >
            <div className="question-next">Next</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
