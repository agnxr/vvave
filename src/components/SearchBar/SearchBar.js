import React from 'react';
//import './SearchBar.css';
import Img from '../Img/Img';
import '../../data/images.json';

class SearchBar extends React.Component {
    state = {
        images: []
    }

    componentDidMount() {
        fetch('../../data/images.json')
        .then(response => response.json() )
        .then(data => {
            this.setState({
                images: data.images
            })
        } )
    }

    render(){
        const images = this.state.images.map(img => (
            <Img key={img.id} src={img.url} alt={img.title} />
        ))

        return (
            <>
                <form action="" method="get" class="form-example">
                        <label for="name">Find images: </label>
                        <input type="text" name="name" id="name" placeholder="Search images..."  required />
                        <input type="submit" value="Search" />
                </form>
                <ul>
                    {images}
                </ul>
            </>
        );
    }

}

export default SearchBar;