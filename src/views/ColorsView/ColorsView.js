import React from 'react';
import ColorGenerator from '../../components/ColorGenerator/ColorGenerator';
import styled from 'styled-components';

const StyledFontSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: red;
  background-color: #fff;
  padding: 20px;
  letter-spacing: 3px;
  color: ${({theme}) => theme.violet300};
  animation: slidein 2s ease-out;
  
  @keyframes slidein {
    0% { opacity:0; }
    100% { opacity:1; }
  }
`;

const ColorsView = () => (
    <StyledFontSection>
        <h2>Random color generator</h2>
        <ColorGenerator />
    </StyledFontSection>
)

export default ColorsView;