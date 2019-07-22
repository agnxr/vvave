import React from 'react';
import FontFinder from '../../components/FontFinder/FontFinder';
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

const FontsView = () => (
    <StyledFontSection>
        <h2>Select a font for your project</h2>
        <FontFinder />
    </StyledFontSection>
)

export default FontsView;