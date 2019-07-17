import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import Font from './Font/Font';
import Loader from './../Loader/Loader';
import Info from './Info/Info';
import Button from './Button/Button';

import styled, {css} from 'styled-components';


const StyledScroll = styled(InfiniteScroll)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

class FontFinder extends React.Component {
    state = {
        all: [],
        allSerif: [],
        allSansSerif: [],
        selectedToDisplay: [],
        visibleFonts: [],
        visibleSerif: [],
        visibleSansSerif: [],
        randomFont: [],
        categorySelected: [],
        fontFamilies: [],
        fontsAmount: null,
        results: 1,
        hasMore: false
    }

    componentDidMount() {
        fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDR7baDJT2PMQ-FuyAZHCYNQS93yy6n2Ms`)
        .then(response => {
            if(response.ok){
                return response;
            }
        })
        .then(response => response.json() )
        .then(json => {
            const allItems = json.items;
            const fonts = allItems.filter(item => item.category === "serif" || item.category === "sans-serif" ? item : null);
            const randomFont = [fonts[Math.floor(Math.random()*fonts.length)]];

            this.setState({
                all: fonts,
                allSerif: fonts.filter(item => item.category === "serif" ? item : null),
                allSansSerif: fonts.filter(item => item.category === "sans-serif" ? item : null),
                selectedToDisplay: fonts,
                visibleFonts: this.state.selectedToDisplay.slice(0, this.state.results),
                visibleSerif: this.state.allSerif.slice(0, this.state.results),
                visibleSansSerif: this.state.allSansSerif.slice(0, this.state.results),
                randomFont: randomFont,
                categorySelected: randomFont,
                fontFamilies: fonts.map(font => ( 
                        <link href={`https://fonts.googleapis.com/css?family=${font.family.split(' ').join('+')}&display=swap`} rel="stylesheet"></link>
                    )),
                fontsAmount: fonts.length,       
            })
        } )
        .catch(error => this.setState({ error: `An error occured` }))
    }


    showSerif = (e) => {
        e.preventDefault(e);

        this.setState({ 
            visibleFonts: this.state.selectedToDisplay.slice(0, 0),
            results: 0,
            hasMore: true,
            selectedToDisplay: this.state.allSerif,
            categorySelected: this.state.visibleSerif,
        })
    }

    showSansSerif = (e) => {
        e.preventDefault(e);

        this.setState({ 
            visibleFonts: this.state.selectedToDisplay.slice(0, 0),
            results: 0,
            hasMore: true,
            selectedToDisplay: this.state.allSansSerif,
            categorySelected: this.state.visibleSansSerif,
        })
    }

    showAll = (e) => {
        e.preventDefault(e);

        this.setState({ 
            visibleFonts: this.state.selectedToDisplay.slice(0, 0),
            results: 0,
            hasMore: true,
            selectedToDisplay: this.state.all,
            categorySelected: this.state.all,
        })
    }


    showRandom = (e) => {
        e.preventDefault(e);

        this.setState({ 
            visibleFonts: this.state.selectedToDisplay.slice(0, 0),
            results: 0,
            hasMore: true, 
            selectedToDisplay: this.state.randomFont,
            categorySelected: this.state.randomFont,
        })
    }

    fetchMoreData = () => {

        if (this.state.visibleFonts.length === this.state.selectedToDisplay.length) {
            
            this.setState({ hasMore: false });
            return;
        }

        setTimeout(() => {
        this.setState(prevState =>({
            results: prevState.results + 2,
            visibleFonts:  this.state.selectedToDisplay.slice(0, prevState.results + 3),
        }));
        }, 500);
    };

    render(){
        const {
            error, 
            hasMore, 
            all,  
            categorySelected, 
            visibleFonts, 
            visibleSerif, 
            visibleSansSerif, 
            fontFamilies, 
            randomFont, 
            fontsAmount
        } = this.state;
        
        return (
            <>
                {        
                    fontFamilies
                }
                <div>
                    {  fontsAmount === null ?  <Loader /> : <Info info={fontsAmount} /> }
                </div>
                <p>{error}</p>

                { 
                
                    fontsAmount !== null ? 
                    <div> 
                        <Button category={ categorySelected } whatToShow={randomFont} handleClickFn={this.showRandom}>random font</Button>
                        <Button category={ categorySelected } whatToShow={all} handleClickFn={this.showAll}>all fonts</Button>
                        <Button category={ categorySelected } whatToShow={visibleSerif} handleClickFn={this.showSerif}>serif only</Button>
                        <Button category={ categorySelected } whatToShow={visibleSansSerif} handleClickFn={this.showSansSerif}>sans-serif only</Button>
                    </div>
                    : 
                    null 
                }
                <div>
                    {
                        categorySelected === randomFont ?  randomFont.map(font => (
                            <Font
                                key={font.family}
                                fontFamily={font.family}
                                category={font.category}
                            />
                        )) :
                        <StyledScroll   
                            style={{overflow:'hidden'}}
                            dataLength={visibleFonts.length}
                            next={this.fetchMoreData}
                            hasMore={hasMore}
                            loader={<Loader />} 
                        >
                            {       
                                visibleFonts.map(font => (
                                    <Font
                                        key={font.family}
                                        fontFamily={font.family}
                                        category={font.category}
                                    />
                                )) 
                            } 
                        </StyledScroll> 
                    }
                </div>
            </>
        );
    }
}

export default FontFinder;