import styled, { css, keyframes } from 'styled-components'
import Button from '../components/Button'
import { blink } from '../styledComponents/Quiz.styled'
import { FaRegGrinTears, FaRegGrinHearts, FaRegHandPeace } from 'react-icons/fa'
const shrink = keyframes`
  from{
      transform:scale(0.9)
  }
  to{
      transform:scale(1);
      background:black;
      color:white
  }
`
const iconsStyle = css`
  font-size: 100px;
  margin: 25px auto 0 auto;
  animation: ${blink} 1s linear infinite;
`
export const FunSmile = styled(FaRegGrinTears)`
  ${iconsStyle}
`
export const Peace = styled(FaRegHandPeace)`
  ${iconsStyle}
`
export const LoveSmile = styled(FaRegGrinHearts)`
  ${iconsStyle}
`

export const FinalMessage = styled.div`
  text-align: center;
  h2 {
    font-size: 28px;
    letter-spacing: 2px;
    font-size: bold;
  }
  h1 {
    margin-top: 40px;
    letter-spacing: 5px;
  }
`
export const RestartButton = styled(Button)`
  display: block;
  width: 55%;
  padding: 10px 20px;
  background: white;
  border: 1px solid #302b63;
  border-radius: 5px;
  margin: 60px auto 0 auto;
  font-size: 19px;
  letter-spacing: 3px;
  cursor: pointer;
  position: relative;
  transition: 0.2s ease;
  transform: scale(0.9);
  :hover {
    color: purple;
    font-weight: 600;
  }
`
