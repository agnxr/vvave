import React from 'react';

const Form = ({ handleChangeFn, handleSearchFn }) => (
    <form>
            <label htmlFor="name">Find images: </label>
            <input onChange={handleChangeFn} type="text" name="name" id="name" placeholder="Search images..."  required />
            <input onClick={handleSearchFn} type="submit" value="Search"/>
    </form>
  );
  
  export default Form;