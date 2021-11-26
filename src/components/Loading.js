import React, { useEffect } from 'react'
import { LoadingAnimation } from '../styledComponents/GlobalStyle'
import { categories } from '../fetchOptions'
function Loading({ setLoading, setData, difficulty, category, setIsQuiz }) {
  if (!category) category = 'general-knowledge'
  const fetchData = async () => {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=10&category=${categories[category]}&difficulty=${difficulty}`
    )
    return response.json()
  }
  useEffect(async () => {
    let data = await fetchData()
    data = [...data.results].sort(() => Math.random() - 0.5)
    setData(data)
    setLoading(false)
    setIsQuiz(true)
  }, [])
  return <LoadingAnimation />
}

export default Loading
