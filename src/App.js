import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';


class App extends React.Component {
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

export default App;
