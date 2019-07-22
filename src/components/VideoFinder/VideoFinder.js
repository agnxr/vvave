import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import styled from 'styled-components';
import Form from './Form/Form';
import ItemsList from './ItemsList/ItemsList';
import Loader from '../Loader/Loader';

const StyledListSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

class VideoFinder extends React.Component {
    state = {
        term: null,
        allItems: [],
        selectedItems: [],
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
        fetch(`https://pixabay.com/api/videos/?key=7129137-0ebf8cbfe5e38668049f26d2b&q=${this.state.term}`)
        .then(response => {
            if(response.ok){
                return response;
            }
        })
        .then(response => response.json() )
        .then(json => {
            const allItems = json.hits;
            this.setState({
                allItems: allItems,
                selectedItems: allItems.slice(0, this.state.numberOfResults),
                showLoader: true,
                noResults: allItems.length < 1 ? true : false,
            })
        } )
        .catch(error => this.setState({ error: `An error occured` }))
    }


    fetchMoreData = () => {
        setTimeout(() => {
          this.setState(prevState =>({
            numberOfResults: prevState.numberOfResults + 3,
            selectedItems:  this.state.allItems.slice(0, prevState.numberOfResults + 3),
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

        const { error, selectedItems, showLoader, allItems, noResults } = this.state;

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
                            dataLength={selectedItems.length}
                            next={this.fetchMoreData}
                            hasMore={selectedItems.length !== allItems.length ? true : false}
                            loader={<Loader />} 
                        >
                            <ItemsList items={selectedItems} />        
                        </InfiniteScroll>
                    }
                </StyledListSection>
                { noResults && !showLoader ? <p>no results</p> : null }
            </>
        );
    }
}

export default VideoFinder;