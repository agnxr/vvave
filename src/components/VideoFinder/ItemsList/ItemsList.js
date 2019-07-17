import React from 'react';
import Item from './Item/Item';
import styled, {css} from 'styled-components';

const StyledItemsList = styled.ul`
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

const ItemsList = ({ items }) => (
  <StyledItemsList>
    {
      items.map(item => (
        <Item key={item.id} src={item.previewURL} url={item.videos.tiny.url} />
      ))
    }
  </StyledItemsList>
);
  
export default ItemsList;