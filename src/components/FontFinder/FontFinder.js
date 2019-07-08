import React from 'react';
import Font from './Font/Font';
import styles from './FontFinder.module.scss';
import Loader from './Loader/Loader';
import Info from './Info/Info';
import Button from './Button/Button';





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
    fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDR7baDJT2PMQ-FuyAZHCYNQS93yy6n2Ms`)
    .then(response => {
        if(response.ok){
            return response;
        }
    // throw Error (response.status)
    })
    .then(response => response.json() )
    .then(json => {
        const allFonts = json.items;
        const fonts = allFonts.filter(item => item.category === "serif" || item.category === "sans-serif" ? item : null).slice(60,180);
        const randomFont = [fonts[Math.floor(Math.random()*fonts.length)]];
        /*fonts.map(font => ( 
                
            document.getElementsByTagName('head')[0].innerHTML = document.head.innerHTML + `<link href={https://fonts.googleapis.com/css?family=${font.family}} rel="stylesheet"></link>`
           // style={{@import url(`https://fonts.googleapis.com/css?family=${font.family}`)}}

             ))*/
             /*
             fonts.map(font => ( 
                
                document.getElementsByTagName('head')[0].appendChild(<link href={`https://fonts.googleapis.com/css?family=${font.family}`} rel="stylesheet"></link>)
               // style={{@import url(`https://fonts.googleapis.com/css?family=${font.family}`)}}

                 )) */
        this.setState({
            fonts: fonts,
            serif: fonts.filter(item => item.category === "serif" ? item : null),
            sansSerif: fonts.filter(item => item.category === "sans-serif" ? item : null),
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
    .catch(error => this.setState({ error: `An error occured (${error})` }))
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


render(){
const {categorySelected, fonts, serif, sansSerif, fontFamilies, randomFont, fontsAmount} = this.state;


    return (
        <>
        { 
        
            fontFamilies
        }
<div>

  {  fontsAmount === null ?  <Loader /> : <Info info={fontsAmount} /> }



        </div>


{ 
    fontsAmount !== null ? 
    
    <div className={styles.btn2} > 
    
       <Button category={ categorySelected } whatToShow={randomFont} handleClickFn={this.handleShowRandomFont}>random font</Button>
       <Button category={ categorySelected } whatToShow={serif} handleClickFn={this.handleSerifClick}>serif only</Button>
       <Button category={ categorySelected } whatToShow={sansSerif} handleClickFn={this.handleSansSerifClick}>sans-serif only</Button>
       <Button category={ categorySelected } whatToShow={fonts} handleClickFn={this.handleShowAllClick}>all</Button>
        </div>
        :
        null 
}
         

        <div>
            
            {       
                categorySelected.map(font => (
                    <Font
                        key={font.family}
                        fontFamily={font.family}
                        category={font.category}

                    />
                )) 
            }
            </div>
        </>
    );
}
}

export default FontFinder;