import styled, { keyframes } from 'styled-components'
import Button from '../components/Button'
import { FcNext } from 'react-icons/fc'
export const Question = styled.div`
  width: 80%;
  height: 190px;
  background-color: white;
  opacity: 0.8;
  z-index: 10000;
  position: relative;
  border: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    transform: rotate(2deg);
    border: 1px solid grey;
    z-index: -1;
  }
  div {
    width: 90%;
    word-wrap: break-word;
    letter-spacing: 1px;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 130px;
  }
`
export const AnswersDiv = styled.div`
  margin-top: 25px;
  width: 80%;
  display: flex;
  background-color: transparent;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`
export const StyledButton = styled(Button)`
  display: block;
  width: 44%;
  height: 85px;
  padding: 10px;
  margin: 10px;
  z-index: 10000;
  font-size: ${props => (props.textSize < 25 ? '18px' : '15px')};
  letter-spacing: ${props => (props.textSize < 25 ? '1px' : '0')};
  word-wrap: break-word;
  position: relative;
  border: 1px solid #302b63;
  cursor: pointer;
  transition: 0.2s ease;
  border-radius: 5px;
  opacity: 0.8;
  background:white
  font-weight: 900;
  color: black;
  div{
    width:100%;
    height:100%;
    display:flex;
    align-items: center;
    justify-content: center;
  }
  :hover {
    color: black;
    border: 1px solid black;
    font-weight: 700;
  }
  
  @media only screen and (max-width: 600px) {
    width:100%;
    margin-top:5px;
    height:55px;
    font-size: ${props => (props.textSize < 15 ? '18px' : '14px')};
  }
`
export const NextButton = styled(StyledButton)`
  width: 30%;
  letter-spacing: 3px;
  height: 40px;
  margin-top: 35px;
  padding: 10px 15px;
  border: 1px solid #302b63;
  background: transparent;
  transition: 0.2s ease-in-out;
  opacity: 0.9;
  color: black;
  font-size: 19px;

  :hover {
    color: purple;
    font-weight: 600;
  }
  pointer-events: ${props => props.disabled};
  @media only screen and (max-width: 600px) {
    width: 50%;
  }
`
//animation for corect button
export const blink = keyframes`
  40% {
    transform:scale(0.9)
    
  }

  80% {
    transform: scale(1.1)
    
  }
  
`
export const CorrectButton = styled(StyledButton)`
  color: white;
  background: linear-gradient(to top, #4776e6, #8e54e9);
  animation: ${blink} 1s linear infinite;
  border: 1px solid white;
  pointer-events: none;
`
export const IncorrectButton = styled(StyledButton)`
  pointer-events: none;
  :after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70%;
    height: 4px;
    background-color: black;
    opacity: 0.7;
    transform: translate(-50%, -50%) rotate(15deg);
    transform-origin: center center;
    @media only screen and (max-width: 600px) {
      transform: translate(-50%, -50%) rotate(10deg);
    }
  }
  :before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70%;
    height: 4px;
    background-color: black;
    transform: translate(-50%, -50%) rotate(-15deg);
    transform-origin: center center;
    opacity: 0.7;
    @media only screen and (max-width: 600px) {
      transform: translate(-50%, -50%) rotate(-10deg);
    }
  }
`
