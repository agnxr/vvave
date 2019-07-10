import React from 'react';
import Font from './Font/Font';
import styles from './FontFinder.module.scss';
import Loader from './Loader/Loader';
import Info from './Info/Info';


const clientID = zLixvs6LAu9YluVBoSHvBNqPDcMVYJAwQ2GLeg1FdP2aCh5RWTEyBzxdgEofsRv6;
const clientSecret= XrWCPKlRz64QCYtPqaNO8GjrKMZhMPy5HgW52t60ZNuc2iL1GEOyO4sHWcYVHuif;


const apiKey = '1bc1ab5ca43212b65bbb8f5dca2e5e9862346da1';

const Yelp = { 
    searchYelp(term, location, sortBy) {
        return fetch(`https://api.flaticon.com/v2/app/authentication`, { 
            headers: {
                Authorization: `Bearer ${apiKey}`
                },
            }).then((response) => { 
            return response.json() ;
        }).then((jsonResponse) => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(((business) => {
                    console.log(business);
                    return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                    };
                }));
            }
        })
    }
};

export default Yelp;


https://api.iconfinder.com/v3/iconsets?client_id=zLixvs6LAu9YluVBoSHvBNqPDcMVYJAwQ2GLeg1FdP2aCh5RWTEyBzxdgEofsRv6&client_secret=XrWCPKlRz64QCYtPqaNO8GjrKMZhMPy5HgW52t60ZNuc2iL1GEOyO4sHWcYVHuif

https://api.dribbble.com/v2/user/shots?access_token=b5cb844bdd2cfc34ae3b1a569cec308db6b1333d9e512f5c9f37626370775103

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
    fetch(`https://api.dribbble.com/v2/user/shots?access_token=b5cb844bdd2cfc34ae3b1a569cec308db6b1333d9e512f5c9f37626370775103`)
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


render(){
const {categorySelected, fonts, serif, sansSerif, fontFamilies, randomFont, isLoaded, isButtonVisible, fontsAmount} = this.state;


    return (
        <>
        { 
        
            fontFamilies
        }
<       div>
  <p>Available fonts: {  fontsAmount === null ?  <Loader /> : <Info info={fontsAmount} /> } </p>


  
            { isButtonVisible && fontsAmount !== null ? <button className={styles.btn} onClick={this.handleStart}>Lets get started</button> : null }
        </div>


{ 
    isLoaded ? <div className={styles.btn2} > 
       
       <button 
            onClick={this.handleShowRandomFont} 
            className={categorySelected === randomFont ? styles.active : styles.option}>
                random font
        </button>

        <button onClick={this.handleSerifClick}
        className={categorySelected === serif ? styles.active : styles.option}
        >Serif only</button> 

        <button onClick={this.handleSansSerifClick}
        className={categorySelected === sansSerif ? styles.active : styles.option}
        >sans-serif only</button>

        <button 
            onClick={this.handleShowAllClick} 
            className={categorySelected === fonts ? styles.active : styles.option}>
                All
        </button>
        </div>
        :
        null 
}
         

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