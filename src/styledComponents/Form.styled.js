import styled from 'styled-components'
import Select from '../components/Select'

export const StyledForm = styled.form`
  width: 80%;
  height: 80%;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  label {
    margin: 10px auto;
    width: auto;
    font-size: 20px;
    text-align: center;
    border-bottom: 2px solid #ff0099;
    letter-spacing: 2px;
    padding-bottom: 5px;
  }
`
export const Heading = styled.h1`
  text-align: center;
  font-size: 45px;
  margin-bottom: 25px;
  letter-spacing: 4px;
`
export const UserInput = styled.input`
  border-radius: 10px;
  padding: 4px 20px;
  font-size: 19px;
  font-weight: 700;
  outline: none;
  border: none;
  border: 1px solid #493240;
  text-align: center;
  letter-spacing: 3px;
  z-index: 100000;
  &:focus {
    border: 1px solid #ff0099;
    box-shadow: 1px 1px 2px #ff0099;
  }
`
export const StyledSelect = styled(Select)`
  border-radius: 50px;
  border: 1px solid #493240;
  font-size: 17px;
  .css-26l3qy-menu {
    border-radius: 10px !important;
    color: black;
    background: linear-gradient(to right, #ffffff, #abbaab);
    opacity: 0.9;
    z-index: 1000;
  }
  .css-yk16xz-control {
    border: none;
    border-radius: 50px;
  }
`

export const Button = styled.button`
  display: block;
  width: 50%;
  margin: 30px auto;
  padding: 10px 20px;
  background: linear-gradient(to right, #ff0099, #493240);
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  border-radius: 50px;
  outline: none;
  border: none;
  cursor: pointer;
  z-index: 100;
`
export const QMarks = styled.div`
  position: absolute;
  top: 0;
  z-index: 1000;
  display: flex;
  height: 50px;
  width: 100%;
  background-color: transparent;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
