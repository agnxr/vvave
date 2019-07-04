import React from 'react';

class FontFinder extends React.Component {
    state = {
        fonts: []
    }


handleSearch = (e) => {
    e.preventDefault();

    fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDR7baDJT2PMQ-FuyAZHCYNQS93yy6n2Ms`)
    .then(response => {
        if(response.ok){
            return response;
        }
     throw Error (response.status)
    })
    .then(response => response.json() )
    .then(json => {
        this.setState({
            fonts: json.items
        })
    } )
    .catch(error => this.setState({ error: `An error occured (${error})` }))
}



render(){
    const fonts = this.state.fonts.map(font => (
        <li>ech</li>
      ))

    return (
        <>
        <p>Select font</p>
        <ul>
            {this.state.fonts}
        </ul>
        </>
    );
}
}

export default FontFinder;