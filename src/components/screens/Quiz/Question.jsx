import styles from "./Quiz.module.scss";
import PropTypes from "prop-types";

const Question = ({ question, onClickVariants }) => {
  return (
    <>
      <div className={styles.progressBar}>
        <div className={styles.progress}></div>
      </div>
      <h2>{question.title}</h2>
      <div>
        {question.variants.map((variant, id) => {
          return (
            <div
              className="button"
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
  onClickVariants:PropTypes.func.isRequired,
};

export default Question;
