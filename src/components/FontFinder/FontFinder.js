import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import Font from './Font/Font';
import Loader from './../Loader/Loader';
import Info from './Info/Info';
import Button from './Button/Button';


class FontFinder extends React.Component {
    state = {
        allFonts: [],
        allSerif: [],
        allSansSerif: [],
        fonts: [],
        serif: [],
        sansSerif: [],

        randomFont: [],
        fontFamilies: [],
        isLoaded: false,
        isButtonVisible: true,
        fontsAmount: null,
        results: 0,
        hasMore: true,
        items: [],
        selectItems: [],
        showLoader: false,
        isSerif: false,
        test: [],
        categorySelected: [],
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
        const fonts = allFonts.filter(item => item.category === "serif" || item.category === "sans-serif" ? item : null).slice(0,10);
        const randomFont = [fonts[Math.floor(Math.random()*fonts.length)]];

        this.setState({
            test: fonts,
            allFonts: fonts,
            allSerif: fonts.filter(item => item.category === "serif" ? item : null),
            allSansSerif: fonts.filter(item => item.category === "sans-serif" ? item : null),
            fonts: this.state.allFonts.slice(0, this.state.results),
            serif: this.state.allSerif.slice(0, this.state.results),
            sansSerif: this.state.allSansSerif.slice(0, this.state.results),
            randomFont: randomFont,
            categorySelected: fonts,
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
        //results: 0
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


showSerif = (e) => {
    e.preventDefault(e);

    this.setState({ 
        fonts: this.state.allFonts.slice(0, 0),
        allFonts: this.state.allSerif,
        categorySelected: this.state.serif,
        //showLoader: true,
    })

}

showSansSerif = (e) => {
    e.preventDefault(e);

    this.setState({ 
        fonts: this.state.allFonts.slice(0, 0),
        allFonts: this.state.allSansSerif,
        categorySelected: this.state.sansSerif,
        //showLoader: true,
    })

}

showAll = (e) => {
    e.preventDefault(e);

    this.setState({ 
        fonts: this.state.allFonts.slice(0, 0),
        allFonts: this.state.test,
        categorySelected: this.state.test,
        
        //showLoader: true,
    })
}


showRandom = (e) => {
    e.preventDefault(e);

    this.setState({ 
        fonts: this.state.allFonts.slice(0, 0),
        allFonts: this.state.randomFont,
        categorySelected: this.state.randomFont,
        
        //showLoader: true,
    })
}

fetchMoreData = () => {

    setTimeout(() => {
      this.setState(prevState =>({
        //  selectItems: this.state.items.slice(0,6),
        results: prevState.results + 1,
        fonts:  this.state.allFonts.slice(0, prevState.results + 1),
        
      }));
    }, 500);
};



render(){
    const {error, isSerif, test, showLoader, categorySelected, fonts, serif, sansSerif, fontFamilies, randomFont, fontsAmount} = this.state;

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
    
   
    <Button category={ categorySelected } whatToShow={test} handleClickFn={this.showAll}>all</Button>
       <Button category={ categorySelected } whatToShow={serif} handleClickFn={this.showSerif}>serif only</Button>
       <Button category={ categorySelected } whatToShow={sansSerif} handleClickFn={this.showSansSerif}>sans-serif only</Button>
       <Button category={ categorySelected } whatToShow={randomFont} handleClickFn={this.showRandom}>random font</Button>

        </div>
        :
        null 
}
         

        <div>
 
   <div>
    {showLoader ? <Loader /> : null}
</div>
<InfiniteScroll style={{overflow:'hidden'}}
                            dataLength={fonts.length}
                            next={this.fetchMoreData}
                            hasMore={true}
                            loader={<Loader />} 
                        >
                                        {       
               fonts.map(font => (
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