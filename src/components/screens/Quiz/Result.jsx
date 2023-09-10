// import styles from "./Quiz.module.scss";
import PropTypes from "prop-types";

const Result = ({ result, answerCount ,setStep}) => {
  return <div>
    <h2>Right answers is {result} of {answerCount}</h2>
    <div className="button" onClick={setStep}>Try again</div>
  </div>;
};

Result.propTypes = {
  result: PropTypes.number.isRequired,
  answerCount: PropTypes.number.isRequired,
  setStep:PropTypes.func,
};

export default Result;
