import React from 'react';
import styled from 'styled-components';


const StyledInfo = styled.div`
    padding: 20px;
    color: ${({theme}) => theme.violet300};
    opacity:0;
    animation: slidein 1s ease-out forwards;
  
    @keyframes slidein {
        0% { opacity:0; }
        100% { opacity:1; }
    }
`;

const StyledNumber = styled.span`
    color: #445bb7;
    font-weight: bold;
`;

const Info = ({info}) => (
    <StyledInfo>
        <p>Available fonts: 
            <StyledNumber> {info} </StyledNumber> 
        </p>
    </StyledInfo>
)

export default Info;