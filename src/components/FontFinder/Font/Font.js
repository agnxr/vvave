import React from 'react';
import styled, {css} from 'styled-components';


const StyledFontFamily = styled.div`
  font-size: 64px;
  padding: 20px;
  background-color: #f9f9f9;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

`;

const StyledFont = styled.div`
  border: 1px solid #030221;
  width: 500px;
  height: 500px;
  border-radius: 25px;
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
        <p><StyledTitle>HTML code to embed this font:</StyledTitle>   
            <span>
            &lt;link href={`https://fonts.googleapis.com/css?family=${fontFamily.split(' ').join('+')}&display=swap`} rel="stylesheet" /&gt;
            </span>
        </p>
        <p><StyledTitle>CSS import:</StyledTitle>  
            <span>
            @import url('{`https://fonts.googleapis.com/css?family=${fontFamily.split(' ').join('+')}&display=swap`}');
            </span>
        </p>
        <p>
        <StyledTitle>CSS rule:</StyledTitle> 
            <span>
                font-family: '{fontFamily}', {category};
            </span>
        </p>
    </StyledFont>
)

export default Font;