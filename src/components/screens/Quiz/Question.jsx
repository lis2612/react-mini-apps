import styles from "./Quiz.module.scss";
import PropTypes from "prop-types";

const Question = ({ question, onClickVariants ,progress}) => {
  return (
    <>
      <div className={styles.progressBar}>
        <div className={styles.progress} style={{ width: `${progress * 100}%` }}></div>
        <p className={styles.currentProgress}>{progress*100}%</p>
      </div>
      <h2 className={styles.title}>{question.title}</h2>
      <div className={styles.buttonContainer}>
        {question.variants.map((variant, id) => {
          return (
            <div
              className={`button ${styles.button}`}
              key={id}
              onClick={() => onClickVariants(id)}>
              {variant}
            </div>
          );
        })}
      </div>
    </>
  );
};

Question.propTypes = {
  question: PropTypes.object.isRequired,
  onClickVariants: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
};

export default Question;
