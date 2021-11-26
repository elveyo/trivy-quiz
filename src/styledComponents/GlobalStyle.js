import styled, { createGlobalStyle, keyframes } from 'styled-components'
import { FaQuestion } from 'react-icons/fa'
export const GlobalStyle = createGlobalStyle`

*,
*:after,
*::before {
   margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: 'Noto Sans JP', sans-serif;
}
#root{
  height:100vh;
  width:100%;
  display:flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #24243e, #302b63, #0f0c29); 
}
`
export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
export const QuizBody = styled.div`
  width: 60%;
  min-height: 88%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 25px;
  box-shadow: 2px 3px 10px #ff0099;
  position: relative;
  background: linear-gradient(to right, #ffffff, #abbaab);
  flex-direction: column;
  @media only screen and (max-width: 750px) {
    width: 90%;
  }
`
export const Animation = styled(FaQuestion)`
  position: absolute;
  color: purple;
  font-size: 350px;
  animation: ${rotate} 10s linear infinite;
  opacity: 0.1;
  @media only screen and (max-width: 600px) {
    font-size: 220px;
  }
`
export const LoadingAnimation = styled(Animation)`
  font-size: 50px;
  position: relative;
  animation: ${rotate} 1s linear infinite;
  opacity: 1;
  color: black;
`
