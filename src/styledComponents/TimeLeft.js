import styled,{keyframes} from 'styled-components'
export const shrink = keyframes`
  from {
   width:80%;
  }

  to {
      background-color:red;
    width:0%;
  }
`
export const Line = styled.div`
margin-top: 30px;
margin-left: 10%;
width:80%;
height:3px;
background-color: green;
animation: ${shrink} 15s linear ;
display:block;
align-self: flex-start;
animation-play-state:${props =>props.status};
`