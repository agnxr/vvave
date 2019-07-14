import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import Font from './Font/Font';
import Loader from './../Loader/Loader';
import Info from './Info/Info';
import Button from './Button/Button';


class FontFinder extends React.Component {
    state = {
        allFonts: [],
        fonts: [],
        serif: [],
        sansSerif: [],

        categorySelected: [],
        randomFont: [],
        fontFamilies: [],
        isLoaded: false,
        isButtonVisible: true,
        fontsAmount: null,
        results: 0,
        hasMore: true,
        items: [],
        selectItems: [],
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
        const allFonts = json.items;
        const fonts = allFonts.filter(item => item.category === "serif" || item.category === "sans-serif" ? item : null);
        const randomFont = [fonts[Math.floor(Math.random()*fonts.length)]];

        this.setState({
            allFonts: fonts,

            fonts: this.state.allFonts.slice(0, this.state.results),
            serif: this.state.allFonts.filter(item => item.category === "serif" ? item : null).slice(0, this.state.results),
            sansSerif: this.state.allFonts.filter(item => item.category === "sans-serif" ? item : null).slice(0, this.state.results),
            randomFont: randomFont,
            categorySelected: randomFont,
            fontFamilies: fonts.map(font => ( 
                
                <link href={`https://fonts.googleapis.com/css?family=${font.family.split(' ').join('+')}&display=swap`} rel="stylesheet"></link>
               // style={{@import url(`https://fonts.googleapis.com/css?family=${font.family}`)}}
    
                 )),
                 fontsAmount: fonts.length,
               //  isLoaded: true

                
        })
    } )
    .catch(error => this.setState({ error: `An error occured` }))
}


handleSerifClick = (e) => {
    e.preventDefault(e);

    this.setState({ 
        categorySelected: this.state.serif,
        results: 0
    })
}

handleSansSerifClick = (e) => {
    e.preventDefault(e);

    this.setState({ 
        categorySelected: this.state.sansSerif,
        results: 0
    })
}

handleShowAllClick = (e) => {
    e.preventDefault(e);

    this.setState({ 
        categorySelected: this.state.fonts,
        results: 0
    })
}

handleShowRandomFont = (e) => {
    e.preventDefault(e);

    this.setState({ 
        categorySelected: this.state.randomFont,
        results: 0
    })
}


fetchMoreData = (categorySelected) => {

    setTimeout(() => {
        this.setState(prevState =>({
          //  selectItems: this.state.items.slice(0,6),
          results: prevState.results + 3,
          [categorySelected]:  this.state.allFonts.slice(0, prevState.results + 3),
         // serif:  this.state.allSerif.slice(0, prevState.results + 3),
         // sansSerif:  this.state.allSansSerif.slice(0, prevState.results + 3),
        }));
      }, 500);

};


render(){
    const {error, categorySelected, fonts, serif, sansSerif, fontFamilies, randomFont, fontsAmount} = this.state;

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
    
       <Button category={ categorySelected } whatToShow={randomFont} handleClickFn={this.handleShowRandomFont}>random font</Button>
       <Button category={ categorySelected } whatToShow={serif} handleClickFn={this.handleSerifClick}>serif only</Button>
       <Button category={ categorySelected } whatToShow={sansSerif} handleClickFn={this.handleSansSerifClick}>sans-serif only</Button>
       <Button category={ categorySelected } whatToShow={fonts} handleClickFn={this.handleShowAllClick}>all</Button>
        </div>
        :
        null 
}
         

        <div>
        <InfiniteScroll style={{overflow:'hidden'}}
                            dataLength={categorySelected.length}
                            next={this.fetchMoreData(categorySelected)}
                            hasMore={true}
                            loader={<Loader />} 
                        >
                                        {       
               categorySelected.map(font => (
                    <Font
                        key={font.family}
                        fontFamily={font.family}
                        category={font.category}

                    />
                )) 
            } 
                        </InfiniteScroll>

            

            </div>
        </>
    );
}
}

export default FontFinder;