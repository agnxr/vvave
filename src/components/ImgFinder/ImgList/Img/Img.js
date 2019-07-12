import React from 'react';
import styled, {css} from 'styled-components';

const StyledImg = styled.li`
  animation: slidein 1.5s ease-out forwards;
  flex: 1 30%;
  border: 1px solid red;
  width: 400px;
  height: 400px;
  
  @keyframes slidein{
    0%{ opacity:0; }
    100%{ opacity:1; }
  }

`;


const Img = props => (
    <StyledImg>
    
        <a target="_blank" href={props.url} >
            <img src={props.src} alt={props.alt}/>
        </a>
        <a href={props.download} download={props.download}>download</a> 
    </StyledImg>
)

export default Img;