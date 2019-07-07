import React from 'react';
import Font from './Font/Font';
import styles from './FontFinder.module.scss';
import Loader from './Loader/Loader';


class FontFinder extends React.Component {
    state = {
        fonts: [],
        serif: [],
        sansSerif: [],
        categorySelected: [],
        randomFont: [],
        fontFamilies: [],
        isLoaded: false,
        isButtonVisible: true,
        fontsAmount: null,
    }


componentDidMount() {
setTimeout(this.setState({
    isLoaded: true
}),6000)
}

componentDidMount() {
    fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDR7baDJT2PMQ-FuyAZHCYNQS93yy6n2Ms`)
    .then(response => {
        if(response.ok){
            return response;
        }
    // throw Error (response.status)
    })
    .then(response => response.json() )
    .then(json => {
        const fonts = json.items;
        const randomFont = [json.items[Math.floor(Math.random()*fonts.length)]];
        /*fonts.map(font => ( 
                
            document.getElementsByTagName('head')[0].innerHTML = document.head.innerHTML + `<link href={https://fonts.googleapis.com/css?family=${font.family}} rel="stylesheet"></link>`
           // style={{@import url(`https://fonts.googleapis.com/css?family=${font.family}`)}}

             ))*/
        this.setState({
            fonts: fonts,
            serif: json.items.filter(item => item.category === "serif" ? item : null),
            sansSerif: json.items.filter(item => item.category === "sans-serif" ? item : null),
            randomFont: randomFont,
            categorySelected: randomFont,
            fontFamilies: fonts.map(font => ( 
                
                <link href={`https://fonts.googleapis.com/css?family=${font.family}`} rel="stylesheet"></link>
               // style={{@import url(`https://fonts.googleapis.com/css?family=${font.family}`)}}
    
                 )),
                 fontsAmount: fonts.length,
               //  isLoaded: true

                
        })
    } )
    .catch(error => this.setState({ error: `An error occured (${error})` }))
}

handleStart= (e) => {
    e.preventDefault(e);

    this.setState({ 
        isLoaded: true,
        isButtonVisible: false
    })
}

handleSerifClick = (e) => {
    e.preventDefault(e);

    this.setState({ 
        categorySelected: this.state.serif
    })
}

handleSansSerifClick = (e) => {
    e.preventDefault(e);

    this.setState({ 
        categorySelected: this.state.sansSerif
    })
}

handleShowAllClick = (e) => {
    e.preventDefault(e);

    this.setState({ 
        categorySelected: this.state.fonts
    })
}

handleShowRandomFont = (e) => {
    e.preventDefault(e);

    this.setState({ 
        categorySelected: this.state.randomFont
    })
}

/*
function countFonts(availableFonts) {
    let counter = 0;
        if(counter < availableFonts) {
            counter++; 
            return counter;
        } 
    setInterval(addSecond, 1000);
} */


countFonts = (availableFonts) => {
    let counter = 0;

setInterval(function(){
  while (counter < availableFonts) {
    counter++
  }
}, 1000);
  }



render(){
const {categorySelected, fonts, serif, sansSerif, fontFamilies, randomFont, isLoaded, isButtonVisible, fontsAmount} = this.state;


    return (
        <>
        { 
        
            fontFamilies
        }
<       div>
            <p>Available fonts: {  fontsAmount === null ?  <Loader /> : fontsAmount }


  

</p>
            { isButtonVisible ? <button onClick={this.handleStart}>Lets get started</button> : null }
        </div>


<div>
       { 
       isLoaded ? 
       <button 
            onClick={this.handleShowRandomFont} 
            className={categorySelected === randomFont ? styles.active : styles.option}>
                random font
        </button>
        : null
       }
        { isLoaded ?
        <button onClick={this.handleSerifClick}
        className={categorySelected === serif ? styles.active : styles.option}
        >Serif only</button> 
        : null }
        { isLoaded ?
        <button onClick={this.handleSansSerifClick}
        className={categorySelected === sansSerif ? styles.active : styles.option}
        >sans-serif only</button>
        : null
        }
               { isLoaded ?
        <button 
            onClick={this.handleShowAllClick} 
            className={categorySelected === fonts ? styles.active : styles.option}>
                All
        </button>
        : null}
        </div>
         

        <div>
            
            {       
                isLoaded ?
                categorySelected.map(font => (
                    <Font
                        key={font.family}
                        fontFamily={font.family}
                        category={font.category}

                    />
                )) : null
            }
            </div>
        </>
    );
}
}

export default FontFinder;