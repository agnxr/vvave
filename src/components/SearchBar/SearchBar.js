import React from 'react';
//import './SearchBar.css';
import Img from '../Img/Img';


class SearchBar extends React.Component {
    state = {
        images: [],
        users: [], 
        ech: false
    }
/*
    componentDidMount() {
        fetch('../../data/images.json')
        .then(response => response.json() )
        .then(json => {
            this.setState({
                images: json.images
            })
        } )
    }

*/
    
    componentDidMount() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

        xhr.onload = () => {
            console.log(xhr.status);
            console.log(xhr.response);

            if(xhr.status === 200) {
                const users = JSON.parse(xhr.response);
                console.log(users);
                this.setState({ users })
            }

            if(xhr.status === 404) {
                this.setState({ ech: true })
            }
        }
        xhr.send(null)
    }
    

    render(){

        const users = this.state.users.map(user => (
            <div>
                <p>{user.address.geo.lat}</p>
            </div>
        ))

        const ech = this.state.ech;
        return (
            <>
                <form action="" method="get" class="form-example">
                        <label for="name">Find images: </label>
                        <input type="text" name="name" id="name" placeholder="Search images..."  required />
                        <input type="submit" value="Search" />
                </form>
                <ul>
                    {ech ? "nie udalo sie" : users}
                </ul>
            </>
        );
    }

}

export default SearchBar;