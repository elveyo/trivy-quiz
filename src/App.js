import Form from './components/Form'
import { FaQuestion } from 'react-icons/fa'
import { QMarks } from './styledComponents/Form.styled'
import react, { useState } from 'react'
import {
  GlobalStyle,
  QuizBody,
  Animation
} from './styledComponents/GlobalStyle'
import Quiz from './components/Quiz'
import Loading from './components/Loading'
import Finish from './components/Finish'

const questionStyle = {
  fontSize: '40px',
  color: '#302b63'
}

function App() {
  const [isLoading, setLoading] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const [isQuiz, setIsQuiz] = useState(false)
  const [name, setName] = useState('')
  const [category, setCategory] = useState()
  const [difficulty, setDifficulty] = useState()
  const [isForm, setForm] = useState(true)
  const [data, setData] = useState([])
  const [score, setScore] = useState(0)
  const fetchOptions = {
    name,
    category,
    difficulty
  }
  if (isLoading) {
    return (
      <>
        <GlobalStyle />
        <QuizBody>
          <Loading
            setLoading={setLoading}
            setData={setData}
            setIsQuiz={setIsQuiz}
            {...fetchOptions}
          />
        </QuizBody>
      </>
    )
  }
  return (
    <>
      <GlobalStyle />
      <QuizBody>
        {/* {isLoading && (
          <Loading
            setLoading={setLoading}
            setData={setData}
            {...fetchOptions}
          />
        )} */}

        <Animation />
        {isFinished && (
          <Finish
            name={name}
            score={score}
            setScore={setScore}
            setIsFinished={setIsFinished}
            setForm={setForm}
          />
        )}
        {isForm && (
          <>
            <QMarks>
              <FaQuestion style={questionStyle} />
              <FaQuestion style={questionStyle} />
            </QMarks>
            <Form
              setLoading={setLoading}
              setForm={setForm}
              setName={setName}
              setCategory={setCategory}
              setDifficulty={setDifficulty}
            />
          </>
        )}
        {isQuiz && (
          <Quiz
            data={data}
            setIsFinished={setIsFinished}
            setIsQuiz={setIsQuiz}
            setScore={setScore}
          />
        )}
      </QuizBody>
    </>
  )
}

export default App
