import { Link } from "react-router-dom";
import styles from "./Quiz.module.scss";
import PropTypes from "prop-types";

const Result = ({ result, answerCount ,setStep}) => {
  return (
    <>
      <h2 className={styles.title}>
        Right answers is {result} of {answerCount}{" "}
      </h2>
      <p className={styles.smile}>{result / answerCount < 0.7 ? "🤔" : "🎉"}</p>
      {result / answerCount < 0.7 ? (
        <div
          className="button"
          onClick={setStep}>
          Try again
        </div>
      ) : (
        <Link to="/react-mini-apps" className="button">Home page</Link>
      )}
    </>
  );
};

Result.propTypes = {
  result: PropTypes.number.isRequired,
  answerCount: PropTypes.number.isRequired,
  setStep:PropTypes.func,
};

export default Result;
