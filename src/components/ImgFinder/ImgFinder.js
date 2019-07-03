import React from 'react';
import Img from '../Img/Img';


class ImgFinder extends React.Component {
    state = {
        term: null,
        images: [],
        error: null,
        numberOfResults: 10,
        isButtonVisible: false,
    }


    handleChange = (e) => {
        e.preventDefault();

        this.setState({ 
            term: e.target.value
        });
    }

handleSearch = (e) => {
    e.preventDefault();

    fetch(`https://pixabay.com/api/?key=7129137-0ebf8cbfe5e38668049f26d2b&q=${this.state.term}&image_type=photo`)
    .then(response => {
        if(response.ok){
            return response;
        }
       // throw Error (response.status)
    })
    .then(response => response.json() )
    .then(json => {
        const allImages = json.hits;
        this.setState({
            allImages: allImages,
            images: allImages.slice(0,this.state.numberOfResults),
            isButtonVisible: true
        })
    } )
    .catch(error => this.setState({ error: `An error occured (${error})` }))
}



handleShowAll = (e) => {
    e.preventDefault(e);
    
    this.setState({ 
        images: this.state.allImages.slice(0, this.state.allImages.length),
        isButtonVisible: false
    })
} 

    /*
    response.json() )
    .then(json => {
        this.setState({
            images: json.hits
        })
    } )
} */

    render(){
        const images = this.state.images.map(img => (
            <Img key={img.id} src={img.previewURL} url={img.largeImageURL} download={img.largeImageURL}/>
        ))

        return (
            <>
            <p>{this.state.error}</p>
                <form action="" method="get">
                        <label htmlFor="name">Find images: </label>
                        <input onChange={this.handleChange} type="text" name="name" id="name" placeholder="Search images..."  required />
                        <input onClick={this.handleSearch} type="submit" value="Search"/>
                </form>
                <ul>
                    {images}
                </ul>
                {images.length < 1 ? <p>no results</p> : null }
                {images.length > 1 && this.state.isButtonVisible ? <button onClick={this.handleShowAll}>show all images</button> : null }
            </>
        );
    }

}

export default ImgFinder;