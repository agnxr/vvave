import React from 'react';
import Font from './Font/Font';
import styles from './FontFinder.module.scss';


class FontFinder extends React.Component {
    state = {
        fonts: [],
        serif: [],
        sansSerif: [],
        categorySelected: [],
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
        this.setState({
            fonts: fonts,
            serif: json.items.filter(item => item.category === "serif" ? item : null),
            sansSerif: json.items.filter(item => item.category === "sans-serif" ? item : null),
            categorySelected: fonts
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

render(){
const {categorySelected, fonts, serif, sansSerif } = this.state;

    return (
        <>
        <button 
            onClick={this.handleShowAllClick} 
            className={categorySelected === fonts ? styles.active : styles.option}>
                All
        </button>
        <button onClick={this.handleSerifClick}
        className={categorySelected === serif ? styles.active : styles.option}
        >Serif only</button> 
        <button onClick={this.handleSansSerifClick}
        className={categorySelected === sansSerif ? styles.active : styles.option}
        >sans-serif only</button>
            {        
                categorySelected.map(font => (
                    <Font
                        key={font.family}
                        fontFamily={font.family}
                        category={font.category}
                    />
                ))
            }
        </>
    );
}
}

export default FontFinder;