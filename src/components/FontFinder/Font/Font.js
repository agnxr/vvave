import React from 'react';
import styled, {css} from 'styled-components';
import Collapsible from './Collapsible/Collapsible';

const StyledFontFamily = styled.div`
  font-size: 64px;
  padding: 20px;
  background-color: #f9f9f9;


`;

const StyledFont = styled.div`
background-color: #F5F5F5;
  width: 500px;
  height: 500px;
  

  padding: 70px 80px 0;

 
  background-color: white;


  box-shadow: 0 20px 40px -5px #606060;

`;

const StyledTitle = styled.span`
  color: #445bb7;
  display: block;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Font = ({fontFamily, category }) => (
    <StyledFont>
        <StyledFontFamily><span style={{fontFamily: `${fontFamily}`}}>{fontFamily}</span></StyledFontFamily>
        <p><StyledTitle>Category:</StyledTitle> {category}</p>
        <p>
        <StyledTitle>CSS rule:</StyledTitle> 
            <span>
                font-family: '{fontFamily}', {category};
            </span>
        </p>
        <Collapsible title={'HTML code'}>{`<link href=https://fonts.googleapis.com/css?family=${fontFamily.split(' ').join('+')}&display=swap rel="stylesheet" />`}</Collapsible>

        <Collapsible title={'CSS code'}>{`@import url('https://fonts.googleapis.com/css?family=${fontFamily.split(' ').join('+')}&display=swap')`}</Collapsible>

    </StyledFont>
)

export default Font;