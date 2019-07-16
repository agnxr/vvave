import React from 'react';
import styled, {css} from 'styled-components';
import Collapsible from './Collapsible/Collapsible';

const StyledFontFamily = styled.div`
  font-size: 60px;
  padding: 20px;
  background-color: #f9f9f9;
  overflow: hidden;
  /* width */
::-webkit-scrollbar {
            width: 2px;
            height: 2px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
  background-color: #fff;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #D0D0D0; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #B8B8B8; 
}

`;

const StyledFont = styled.div`
background-color: #F5F5F5;
  width: 500px;

  padding: 50px 70px;
  background-color: white;
  box-shadow: 0 20px 40px -5px #606060;
  margin: 30px;
margin-bottom: 50px;
`;

const StyledTitle = styled.span`
  color: #445bb7;
  display: block;
  font-weight: bold;
  margin-bottom: 15px;
`;

const StyledSpan = styled.span`
  padding: 10px;
  width: 100%;
  display: block;
  background-color: #f9f9f9;
  margin: 10px;
`;

const Font = ({fontFamily, category }) => (
    <StyledFont>
        <StyledFontFamily><span style={{fontFamily: `${fontFamily}`}}>{fontFamily}</span></StyledFontFamily>
        <p><StyledTitle>Category:</StyledTitle> {category}</p>
        <p>
        <StyledTitle>CSS rule:</StyledTitle> 
            <StyledSpan>
                font-family: '{fontFamily}', {category};
            </StyledSpan>
        </p>
        <Collapsible title={'HTML code'}>{`<link href=https://fonts.googleapis.com/css?family=${fontFamily.split(' ').join('+')}&display=swap rel="stylesheet" />`}</Collapsible>

        <Collapsible title={'CSS code'}>{`@import url('https://fonts.googleapis.com/css?family=${fontFamily.split(' ').join('+')}&display=swap')`}</Collapsible>

    </StyledFont>
)

export default Font;