import React from 'react';
//import './SearchBar.css';
import Img from '../Img/Img';


class SearchBar extends React.Component {
    state = {
        images: []
    }

    componentDidMount() {
        fetch('https://pixabay.com/api/?key=7129137-0ebf8cbfe5e38668049f26d2b&q=yellow+flowers&image_type=photo')
        .then(response => response.json() )
        .then(json => {
            this.setState({
                images: json.hits
            })
        } )
    }

    

    render(){
        const images = this.state.images.map(img => (
            <Img src={img.previewURL} url={img.largeImageURL}/>
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