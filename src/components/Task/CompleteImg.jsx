import completeImg from "../../assets/icon-check-on.svg";
import incompleteImg from "../../assets/icon-check-off.svg";

const CompleteImg = ({ itemCompleted }) => {
  return itemCompleted ? <img src={completeImg} alt="완료" /> : <img src={incompleteImg} alt="미완료" />;
};
export default CompleteImg;
