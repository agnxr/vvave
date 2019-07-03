import React from 'react';
import './App.css';
import SearchBar from '../../components/SearchBar/SearchBar';


class Root extends React.Component {
  render(){
    return (
    <div className="App">
      <header className="App-header">
        <h1>Find inspirations for your project.</h1>
      </header>
      <SearchBar />
    </div>
    )
  };
}

export default Root;
