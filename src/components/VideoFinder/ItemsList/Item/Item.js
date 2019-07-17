import React from 'react';
import styled, {css} from 'styled-components';

const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const Item = props => (
    <StyledListItem>
        <video width="400" controls>
            <source src={props.url} type="video/mp4" />
        </video>
    </StyledListItem>
)

export default Item;