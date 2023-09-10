import { useState } from "react";
import styles from "./Quiz.module.scss";
import Result from "./Result";
import Question from "./Question";
import { questions } from "./questions";

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(0);

  const onClickVariants = (variantId) => {
    if (variantId === questions[step].correct) setRightAnswer(rightAnswer + 1);
    console.log('rightAnswer: ', rightAnswer);
    setStep(step + 1);
  };

  const resetStep = () => setStep(0);

  return (
    <div className={styles.window}>
      {step === questions.length ? (
        <Result
          result={rightAnswer}
          answerCount={questions.length}
          setStep={resetStep}
        />
      ) : (
        <Question
          question={questions[step]}
          onClickVariants={onClickVariants}
          progress={step / questions.length}
        />
      )}
    </div>
  );
};

export default Quiz;
