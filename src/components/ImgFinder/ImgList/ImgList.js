import React from 'react';
import Img from './Img/Img';

const ImgList = ({ images }) => (
    images.map(img => (
      <Img key={img.id} src={img.previewURL} url={img.largeImageURL} download={img.largeImageURL}/>
    ))
  );
  
  export default ImgList;