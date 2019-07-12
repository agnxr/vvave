import React from 'react';
import styled, {css} from 'styled-components';

const StyledListItem = styled.li`
  animation: slidein 1.5s ease-out forwards;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  margin: 20px;

  @keyframes slidein{
    0%{ opacity:0; }
    100%{ opacity:1; }
  }

`;

const StyledImg = styled.img`
    width: 400px;
`;

const Img = props => (
    <StyledListItem>
        <a target="_blank" href={props.url} >
            <StyledImg src={props.src} alt={props.alt}/>
        </a>
    </StyledListItem>
)

export default Img;