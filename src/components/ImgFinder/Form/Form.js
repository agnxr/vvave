import React from 'react';
import styled from 'styled-components';
import search from '../../../assets/search.svg';

const StyledSubmit = styled.input`
  border-top: 3px solid ${({theme}) => theme.violet300};
  border-bottom: 3px solid ${({theme}) => theme.violet300};
  border-right: 3px solid ${({theme}) => theme.violet200};
  border-left: none;
  border-bottom-right-radius: 25px;
  background-color: #03175b;
  padding: 20px;
  cursor: pointer;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-size: 63%;
  background-position: 9px 9px;
  width: 65px;
  font-size: 20px;
  margin-bottom: 50px;
  transition: 1s;
    &:hover {
      background-color: ${({theme}) => theme.violet300};
    }
`;

const StyledInput = styled.input`
  border-top: 3px solid ${({theme}) => theme.violet300};
  border-bottom: 3px solid ${({theme}) => theme.violet300};
  border-left: 3px solid ${({theme}) => theme.violet200};
  border-right: 3px solid ${({theme}) => theme.violet200};
  border-top-left-radius: 25px;
  background-color: #fff;
  padding: 20px;
  min-width: 200px;
  width: 30vw;
  color: #6070c4;
  font-size: 20px;
  margin-bottom: 50px;
    ::placeholder {
        color: #6070c4;
        opacity: 0.5; 
    }
`;

const Form = ({ handleChangeFn, handleSearchFn }) => (
    <form>
        <StyledInput onChange={handleChangeFn} type="text" name="name" id="name" placeholder="What are you looking for today?"  required />
        <StyledSubmit onClick={handleSearchFn} type="submit" value=" " />
    </form>
  );
  
  export default Form;