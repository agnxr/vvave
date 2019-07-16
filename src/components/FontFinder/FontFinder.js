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
        allFonts: [],
        allSerif: [],
        allSansSerif: [],
        fonts: [],
        serif: [],
        sansSerif: [],

        randomFont: [],
        fontFamilies: [],

        fontsAmount: null,
        results: 1,


        showLoader: false,
     
        test: [],
        categorySelected: [],
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
        const allFonts = json.items;
        const fonts = allFonts.filter(item => item.category === "serif" || item.category === "sans-serif" ? item : null);
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



showSerif = (e) => {
    e.preventDefault(e);

    this.setState({ 
        fonts: this.state.allFonts.slice(0, 0),
        hasMore: true,
        allFonts: this.state.allSerif,
        categorySelected: this.state.serif,
        results: 0,
        //showLoader: true,
    })

}

showSansSerif = (e) => {
    e.preventDefault(e);

    this.setState({ 
        fonts: this.state.allFonts.slice(0, 0),
        hasMore: true,
        allFonts: this.state.allSansSerif,
        categorySelected: this.state.sansSerif,
        results: 0,
        //showLoader: true,
    })

}

showAll = (e) => {
    e.preventDefault(e);

    this.setState({ 
        fonts: this.state.allFonts.slice(0, 0),
        hasMore: true,
        allFonts: this.state.test,
        categorySelected: this.state.test,
        results: 0,
        
        //showLoader: true,
    })
}


showRandom = (e) => {
    e.preventDefault(e);

    this.setState({ 
        fonts: this.state.allFonts.slice(0, 0),
        hasMore: true, 
        allFonts: this.state.randomFont,
        categorySelected: this.state.randomFont,
        results: 0,
        
        //showLoader: true,
    })
}

fetchMoreData = () => {

   
        if (this.state.fonts.length === this.state.allFonts.length) {
          this.setState({ hasMore: false });
          return;
        }

    setTimeout(() => {
      this.setState(prevState =>({
        //  selectItems: this.state.items.slice(0,6),
        results: prevState.results + 2,
        fonts:  this.state.allFonts.slice(0, prevState.results + 3),
        
      }));
    }, 500);
};



render(){
    const {error, test, showLoader, categorySelected, fonts, serif, sansSerif, fontFamilies, randomFont, fontsAmount} = this.state;
    

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
    <Button category={ categorySelected } whatToShow={test} handleClickFn={this.showAll}>all</Button>
       <Button category={ categorySelected } whatToShow={serif} handleClickFn={this.showSerif}>serif only</Button>
       <Button category={ categorySelected } whatToShow={sansSerif} handleClickFn={this.showSansSerif}>sans-serif only</Button>

        </div>
        :
        null 
}
         

        <div>
 
   <div>
    {showLoader ? <Loader /> : null}
</div>

{
    categorySelected === randomFont ?   randomFont.map(font => (
             <Font
                 key={font.family}
                 fontFamily={font.family}
                 category={font.category}

             />
         )) :

<StyledScroll style={{overflow:'hidden'}}
                            dataLength={fonts.length}
                            next={this.fetchMoreData}
                            hasMore={this.state.hasMore}
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
                        </StyledScroll> 

        }



            

            </div>
        </>
    );
}
}

export default FontFinder;