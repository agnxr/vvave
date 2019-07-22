import React from 'react';
import VectorsFinder from '../../components/VectorsFinder/VectorsFinder';
import styled from 'styled-components';

const StyledVectorsSection = styled.section`
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

const VectorsView = () => (
    <StyledVectorsSection>
        <h2>Find a vector image for your project</h2>
        <VectorsFinder />
    </StyledVectorsSection>
)

export default VectorsView;