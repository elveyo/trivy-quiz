import React, { useState } from 'react'
import {
  AnswersDiv,
  StyledButton,
  CorrectButton,
  NextButton,
  IncorrectButton
} from '../styledComponents/Quiz.styled'

function Answers({
  sortedAnswers,
  correct_answer,
  setIsDisabled,
  setIsCorrect,
  isCorrect,
  setScore,
  setLineStatus,
  answers,
  setAnswers,
  animationEnd
}) {
  const [wrongAnswer, setWrongAnswer] = useState()
  console.log(animationEnd)
  if (isCorrect == true) {
    setLineStatus('paused')
    return (
      <AnswersDiv>
        {answers.map(answer => {
          if (answer === correct_answer) {
            return <CorrectButton text={answer} textSize={answer.length} />
          } else return <StyledButton text={answer} textSize={answer.length} />
        })}
      </AnswersDiv>
    )
  }
  if (isCorrect == false) {
    setLineStatus('paused')
    if (!animationEnd) {
      return (
        <AnswersDiv>
          {answers.map(answer => {
            if (answer === correct_answer) {
              return <CorrectButton text={answer} textSize={answer.length} />
            } else if (answer === wrongAnswer) {
              return <IncorrectButton text={answer} textSize={answer.length} />
            } else
              return <StyledButton text={answer} textSize={answer.length} />
          })}
        </AnswersDiv>
      )
    }
    return (
      <AnswersDiv>
        {answers.map(answer => {
          if (answer === correct_answer) {
            return <CorrectButton text={answer} textSize={answer.length} />
          }
          return <IncorrectButton text={answer} textSize={answer.length} />
        })}
      </AnswersDiv>
    )
  }

  return (
    <AnswersDiv>
      {sortedAnswers.map(answer => (
        <StyledButton
          text={answer}
          key={Math.random() * 100}
          textSize={answer.length}
          func={() => {
            if (answer === correct_answer) {
              setIsDisabled('auto')
              setAnswers(sortedAnswers)
              setScore(prev => prev + 1)
              setIsCorrect(true)
            } else {
              setIsDisabled('auto')
              setAnswers(sortedAnswers)
              setWrongAnswer(answer)
              setIsCorrect(false)
            }
          }}
        />
      ))}
    </AnswersDiv>
  )
}

export default Answers
