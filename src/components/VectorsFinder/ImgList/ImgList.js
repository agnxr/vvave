import React from 'react';
import Img from './Img/Img';
import styled from 'styled-components';

const StyledImgList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  animation: slidein 2s ease-out forwards;
  
  @keyframes slidein{
    0%{ opacity:0; }
    100%{ opacity:1; }
  }
`;

const ImgList = ({ images }) => (
  <StyledImgList>
    {
      images.map(img => (
        <Img key={img.id} src={img.webformatURL} url={img.largeImageURL} download={img.largeImageURL}/>
      ))
    }
  </StyledImgList>
);
  
export default ImgList;