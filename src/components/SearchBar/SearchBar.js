import React from 'react';
//import './SearchBar.css';
import Img from '../Img/Img';


class SearchBar extends React.Component {
    state = {
        images: []
    }

    componentDidMount() {
        fetch('https://pixabay.com/api/')
        .then(response => response.json() )
        .then(json => {
            this.setState({
                images: json.images
            })
        } )
    }

    

    render(){
        const images = this.state.images.map(img => (
            <Img key={img.id} src={img.url} alt={img.title} />
        ))

        return (
            <>
                <form action="" method="get">
                        <label htmlFor="name">Find images: </label>
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