import React from 'react';
import Form from './Form/Form';
import Button from './Button/Button';
import ImgList from './ImgList/ImgList';
import Loader from './../Loader/Loader';

class ImgFinder extends React.Component {
    state = {
        term: null,
        images: [],
        error: null,
        numberOfResults: 10,
        isButtonVisible: false,
        showLoader: false,
    }


    handleChange = (e) => {
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
                isButtonVisible: true,
                showLoader: true,
            })
        } )
        .catch(error => this.setState({ error: `An error occured (${error})` }))
    }


    handleShowAll = (e) => {
        e.preventDefault(e);

        this.setState({ 
            images: this.state.allImages.slice(0, this.state.allImages.length),
            isButtonVisible: false,
        })
    } 



    componentDidUpdate() {
        if (this.state.showLoader === true) {
          setTimeout(() => this.setState({
            showLoader: false
          }), 1000)
        }
      }

    render(){
        const { images, isButtonVisible, showLoader } = this.state;

        return (
            <>
            <p>{this.state.error}</p>
                <Form 
                    handleChangeFn={this.handleChange} 
                    handleSearchFn={this.handleSearch}
                />
            { showLoader ? <Loader /> : null }
                <ul>
                    <ImgList 
                        images={images}
                    />
                </ul>

                {images.length < 1 && isButtonVisible ? <p>no results</p> : null }
                {images.length > 1 && isButtonVisible ? <Button showAllFn={this.handleShowAll} /> : null }
            </>
        );
    }
}

export default ImgFinder;