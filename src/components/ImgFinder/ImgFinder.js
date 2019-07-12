import React from 'react';
import Form from './Form/Form';
import ImgList from './ImgList/ImgList';
import Loader from './../Loader/Loader';

import InfiniteScroll from "react-infinite-scroll-component";



class ImgFinder extends React.Component {
    state = {
        term: null,
        allImages: [],
        selectedImages: [],
        error: null,
        start: 0,
        numberOfResults: 3,
        isButtonVisible: false,
        showLoader: false,
        items: Array.from({ length: 20 })
    }

    handleChange = (e) => {
        this.setState({ 
            term: e.target.value,
            numberOfResults: 3,
        });
    }

    handleSearch = (e) => {
        e.preventDefault();
        fetch(`https://pixabay.com/api/?key=7129137-0ebf8cbfe5e38668049f26d2b&q=${this.state.term}&image_type=photo`)
        .then(response => {
            if(response.ok){
                return response;
            }
        })
        .then(response => response.json() )
        .then(json => {
            const allImages = json.hits;
            this.setState({
                allImages: allImages,
                selectedImages: allImages.slice(0, this.state.numberOfResults),
                showLoader: true,
            })
        } )
        .catch(error => this.setState({ error: `An error occured` }))
    }


    handleShowAll = (e) => {
        e.preventDefault(e);

        this.setState({ 
            start: this.state.selectedImages.length,
            selectedImages: this.state.allImages.slice(this.state.start, this.state.allImages.length),
            isButtonVisible: false,
        })
    } 


    fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
          this.setState(prevState =>({
            numberOfResults: prevState.numberOfResults + 3,
            selectedImages:  this.state.allImages.slice(0, prevState.numberOfResults + 3),

          }));
        }, 1500);

      };
/*
      this.setState(prevState => ({
        items: [newItem, ...prevState.items],
        message: 'The new user has been added successfully.',
      })); */


    componentDidUpdate() {
        if (this.state.showLoader === true) {
          setTimeout(() => this.setState({
            showLoader: false
          }), 1000)
        }
      }

    render(){
        const { error, selectedImages, isButtonVisible, showLoader, allImages } = this.state;

        return (
            <>
            <p>{error}</p>
           
                <Form 
                    handleChangeFn={this.handleChange} 
                    handleSearchFn={this.handleSearch}
                />
                
            { showLoader ? <Loader /> :  

            <InfiniteScroll
          dataLength={selectedImages.length}
          next={this.fetchMoreData}
          hasMore={selectedImages.length !== allImages.length ? true : false}
          loader={<Loader />}
        >
     

        <ul>
                    <ImgList 
                        images={selectedImages}
                    />
                </ul>
          
        </InfiniteScroll>
            }
      

                {selectedImages.length < 1 && isButtonVisible ? <p>no results</p> : null }
            </>
        );
    }
}

export default ImgFinder;