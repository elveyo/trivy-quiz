import React from 'react'
import {
  StyledForm,
  Heading,
  UserInput,
  Button,
  StyledSelect
} from '../styledComponents/Form.styled'
import { categoryOptions, difficultyOptions } from '../fetchOptions'

function Form({ setForm, setName, setDifficulty, setCategory, setLoading }) {
  const handleSubmit = e => {
    e.preventDefault()
    const { name, category, difficulty } = e.target
    setName(name.value)
    setCategory(category.value)
    setDifficulty(difficulty.value)
    setForm(false)
    setLoading(true)
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <Heading>Trivia Quiz</Heading>
        <label htmlFor="name">Name</label>
        <UserInput type="text" id="name" name="username" required></UserInput>
        <label>Category</label>
        <StyledSelect options={categoryOptions} selectType="category" />
        <label>Difficulty</label>
        <StyledSelect options={difficultyOptions} selectType="difficulty" />
        <Button>Start</Button>
      </StyledForm>
    </>
  )
}

export default Form
