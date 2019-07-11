import React from 'react';
import ImgFinder from '../../components/ImgFinder/ImgFinder';
import styled, {css} from 'styled-components';

const StyledImageSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: red;
  background-color: #fff;
  padding: 20px;
  letter-spacing: 3px;
  color: #030221;
  animation: slidein 2s ease-out;
  
  @keyframes slidein {
    0% { opacity:0; }
    100% { opacity:1; }
  }
`;

const ImagesView = () => (
    <StyledImageSection>
        <h2>Search for the inspirational photos</h2>
        <ImgFinder />
    </StyledImageSection>
)

export default ImagesView;