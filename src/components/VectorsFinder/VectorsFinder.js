import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import Form from './Form/Form';
import ImgList from './ImgList/ImgList';
import Loader from '../Loader/Loader';

import styled, {css} from 'styled-components';

const StyledListSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

class VectorsFinder extends React.Component {
    state = {
        term: null,
        allImages: [],
        selectedImages: [],
        error: null,
        numberOfResults: 3,
        showLoader: false,
        noResults: false,
    }

    handleChange = (e) => {
        this.setState({ 
            term: e.target.value,
            numberOfResults: 3,
        });
    }

    handleSearch = (e) => {
        e.preventDefault();
        fetch(`https://pixabay.com/api/?key=7129137-0ebf8cbfe5e38668049f26d2b&q=${this.state.term}&image_type=vector`)
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
                noResults: allImages.length < 1 ? true : false,
            })
        } )
        .catch(error => this.setState({ error: `An error occured` }))
    }


    fetchMoreData = () => {
        setTimeout(() => {
          this.setState(prevState =>({
            numberOfResults: prevState.numberOfResults + 3,
            selectedImages:  this.state.allImages.slice(0, prevState.numberOfResults + 3),
          }));
        }, 1500);
    };

    componentDidUpdate() {
        if (this.state.showLoader === true) {
          setTimeout(() => this.setState({
            showLoader: false
          }), 1000)
        }
    }

    render(){

        const { error, selectedImages, showLoader, allImages, noResults } = this.state;

        return (
            <>
                <p>{error}</p>

                <Form 
                    handleChangeFn={this.handleChange} 
                    handleSearchFn={this.handleSearch}
                />
                <StyledListSection>
                    { 
                        showLoader ? 
                        <Loader /> 
                        :  
                        <InfiniteScroll style={{overflow:'hidden'}}
                            dataLength={selectedImages.length}
                            next={this.fetchMoreData}
                            hasMore={selectedImages.length !== allImages.length ? true : false}
                            loader={<Loader />} 
                        >
                            <ImgList images={selectedImages} />        
                        </InfiniteScroll>
                    }
                </StyledListSection>
                { noResults && !showLoader ? <p>no results</p> : null }
            </>
        );
    }
}

export default VectorsFinder;