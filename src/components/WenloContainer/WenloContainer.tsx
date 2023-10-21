import { FunctionComponent } from "react";
import "./WenloContainer.css";

const WenloContainer: FunctionComponent = () => {
  return (
    <div className="wenlo-container-comp-frameParent">
      <div className="wenlo-container-comp-ellipseParent">
        <div className="wenlo-container-comp-frameChild" />
        <div className="wenlo-container-comp-wenlo">Wenlo</div>
      </div>
      <div className="wenlo-container-comp-ellipseGroup">
        <div className="wenlo-container-comp-frameItem" />
        <div className="wenlo-container-comp-wenlo">Business</div>
      </div>
      <div className="wenlo-container-comp-ellipseContainer">
        <div className="wenlo-container-comp-frameItem" />
        <div className="wenlo-container-comp-wenlo">Advertising</div>
      </div>
      <img className="wenlo-container-comp-vectorIcon" alt="" src="images/vector-414.svg" />
      <img className="wenlo-container-comp-frameChild1" alt="" src="images/vector-414.svg" />
    </div>
  );
};

export default WenloContainer;
