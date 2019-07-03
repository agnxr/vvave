import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ImagesView from '../ImagesView/ImagesView';
import FontsView from '../FontsView/FontsView';

import SearchBar from '../../components/SearchBar/SearchBar';


class Root extends React.Component {
  render(){
    return (
    <div className="App">
      <header className="App-header">
        <h1>Find inspirations for your project.</h1>
      </header>
      <SearchBar />
      <BrowserRouter>
        <>
          <Route exact path="/images" component={ImagesView}/>
          <Route exact path="/fonts" component={FontsView}/>
        </>
      </BrowserRouter>
    </div>
    )
  };
}

export default Root;
