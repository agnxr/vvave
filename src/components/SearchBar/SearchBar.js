import React from 'react';
//import './SearchBar.css';
import Img from '../Img/Img';

class SearchBar extends React.Component {
    state = {
        images: [
            {
                "id": 1,
                "title": "kot",
                "url": "https://upload.wikimedia.org/wikipedia/commons/7/71/Calico_tabby_cat_-_Savannah.jpg"
            },
            {
                "id": 2,
                "title": "pies",
                "url": "https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg"
            },
            {
                "id": 3,
                "title": "kot",
                "url": "https://upload.wikimedia.org/wikipedia/commons/7/71/Calico_tabby_cat_-_Savannah.jpg"
            }
        ]
    }

    render(){
        const images = this.state.images.map(img => (
            <Img key={img.id} src={img.url} alt={img.title} />
        ))

        return (
            <>
                <form action="" method="get" class="form-example">
                        <label for="name">Find images: </label>
                        <input type="text" name="name" id="name" placeholder="Search images..."  required />
                        <input type="submit" value="Search" />
                </form>
                <ul>
                    {images}
                </ul>
            </>
        );
    }

}

export default SearchBar;