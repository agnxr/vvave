import React from 'react';
//import './SearchBar.css';

class SearchBar extends React.Component {
    render(){
        return (
            <form action="" method="get" class="form-example">
                <div>
                    <label for="name">Find images: </label>
                    <input type="text" name="name" id="name" placeholder="Search images..."  required />
                </div>
                <div class="form-example">
                    <input type="submit" value="Search" />
                </div>
            </form>
        );
    }

}

export default SearchBar;