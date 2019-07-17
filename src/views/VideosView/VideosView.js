import React from 'react';
import VideoFinder from '../../components/VideoFinder/VideoFinder';
import styled, {css} from 'styled-components';

const StyledVideoSection = styled.section`
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

const VideosView = () => (
    <StyledVideoSection>
        <h2>Find an inspirational video for your project</h2>
        <VideoFinder />
    </StyledVideoSection>
)

export default VideosView;