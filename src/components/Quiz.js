import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import { Question, NextButton } from '../styledComponents/Quiz.styled'
import Answers from './Answers'
import { Line } from '../styledComponents/TimeLeft'
import { FaChevronRight } from 'react-icons/fa'

function Quiz({ data, setIsFinished, setScore, setIsQuiz }) {
  const [questionNum, setQuestionNum] = useState(0)
  //next button
  const [isDisabled, setIsDisabled] = useState('none')
  //see if answer is corrrect or not so different UI should be rendered
  const [isCorrect, setIsCorrect] = useState(undefined)
  const [lineStatus, setLineStatus] = useState('unset')
  const [animationEnd, setAnimationEnd] = useState(false)
  const currentQuestion = data[questionNum]
  const { correct_answer, incorrect_answers } = currentQuestion
  const sortedAnswers = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  )
  const [answers, setAnswers] = useState()
  //Animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnswers(sortedAnswers)
      setAnimationEnd(true)
      setIsCorrect(false)
      setIsDisabled('auto')
    }, 15000)
    return () => clearTimeout(timer)
  }, [questionNum])

  return (
    <>
      <Question>
        <div
          dangerouslySetInnerHTML={{
            __html: `${questionNum + 1}. ${currentQuestion.question}`
          }}
        ></div>
      </Question>
      <Line key={Math.random()} status={lineStatus} />
      <h1></h1>
      <Answers
        sortedAnswers={sortedAnswers}
        correct_answer={correct_answer}
        setIsDisabled={setIsDisabled}
        isCorrect={isCorrect}
        setIsCorrect={setIsCorrect}
        setScore={setScore}
        setLineStatus={setLineStatus}
        answers={answers}
        setAnswers={setAnswers}
        animationEnd={animationEnd}
      />
      {questionNum < 9 && (
        <NextButton
          text="Next"
          func={() => {
            setQuestionNum(questionNum + 1)
            setAnimationEnd(false)
            setIsCorrect(undefined)
            setIsDisabled('none')
            setLineStatus('unset')
          }}
          disabled={isDisabled}
        />
      )}
      {questionNum === 9 && (
        <NextButton
          text="Finish"
          func={() => {
            setIsQuiz(false)
            setIsFinished(true)
          }}
          disabled={isDisabled}
        />
      )}
    </>
  )
}

export default Quiz
