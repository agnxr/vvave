import React from 'react';
import styled from 'styled-components';

const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const StyledImg = styled.img`
    width: 400px;
    animation: slidein 1.5s ease-out forwards;

    @keyframes slidein {
        0%{ opacity:0; }
        100%{ opacity:1; }
    }
`;

const Img = props => (
    <StyledListItem>
        <a target="_blank" href={props.url} >
            <StyledImg src={props.src} alt={props.alt}/>
        </a>
    </StyledListItem>
)

export default Img;