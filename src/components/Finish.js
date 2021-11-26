import React from 'react'
import {
  FinalMessage,
  RestartButton,
  FunSmile,
  Peace,
  LoveSmile
} from '../styledComponents/Final.styled'

function Finish({ name, score, setIsFinished, setForm, setScore }) {
  return (
    <div>
      {/* bad score */}
      {score > 0 && score <= 3 && (
        <FinalMessage>
          <h2>Not good {name}! Your parents wouldn't be proud I guess</h2>
          <FunSmile />
          <h1>{score}/10</h1>
        </FinalMessage>
      )}
      {/* good score */}
      {score >= 4 && score <= 7 && (
        <FinalMessage>
          <h2>Good job {name}. It can always be better!</h2>
          <Peace />
          <h1>{score}/10</h1>
        </FinalMessage>
      )}
      {/* nice score */}
      {score > 7 && (
        <FinalMessage>
          <h2>Yeah {name}, you cracked it!!</h2>
          <LoveSmile />
          <h1>{score}/10</h1>
        </FinalMessage>
      )}
      <RestartButton
        text="Restart"
        func={() => {
          setScore(0)
          setIsFinished(false)
          setForm(true)
        }}
      />
    </div>
  )
}

export default Finish
