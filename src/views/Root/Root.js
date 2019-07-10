import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ImagesView from '../ImagesView/ImagesView';
import FontsView from '../FontsView/FontsView';
import VectorsView from '../VectorsView/VectorsView';
import VideosView from '../VideosView/VideosView';
import Navigation from '../../components/Navigation/Navigation';
import GlobalStyle from '../../theme/GlobalStyle';
import video from '../../assets/blue.mp4';
import logo from '../../assets/logo.svg';


import styled, {css} from 'styled-components';

const StyledHeader = styled.header`
    width: 100%;
    overflow:hidden;
    height: 520px;
    background-color: #000;
`;

const StyledContent = styled.div`
  position: fixed;
 /* background: rgba(0, 0, 0, 0.5); */
  height: 520px;
  color: #f1f1f1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
justify-content: center;
align-items: center;
text-align: center;
font-weight: 300;
position: absolute;
`;

const StyledTitle = styled.h1`
font-size: 40px;
`;

const StyledTopBar = styled.section`
  background-color: #000;
  color: #fff;
  display: flex;

align-items: center;
text-align: center;
letter-spacing: 3px;
font-size: 13px;
`;

const StyledLogo = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin: 0 20px;

`;

class Root extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <>
        <GlobalStyle />
        <StyledHeader>
          <section>
            <StyledTopBar>
              <a path="/images"><StyledLogo src={logo} alt="vvave"/></a>
              <p>vvave | Inspire yourself | Everything you need in one place</p>
            </StyledTopBar>
            <StyledContent>
              <StyledTitle>Find materials to your project</StyledTitle>
              <p>everything you need in one place</p>
            </StyledContent>
            <video autoplay="autoplay" muted="muted" loop="loop" width="100%">
              <source src={video} type="video/mp4"/>
            </video>
          </section>
        </StyledHeader>

          <Navigation />
          <Switch>
            <Route exact path="/images" component={ImagesView}/>
            <Route exact path="/fonts" component={FontsView}/>
            <Route exact path="/vectors" component={VectorsView}/>
            <Route exact path="/videos" component={VideosView}/>
          </Switch>
        </>
      </BrowserRouter>
    )
  };
}

export default Root;
