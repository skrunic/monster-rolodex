import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ""
    }

    // this.handleChange = this.handleChange.bind(this);
  } // end constructor

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then( response => response.json() )
    .then( users => this.setState({ monsters: users }) )
    ;
  }

  searchFn(e){
    this.setState({ searchField: e.target.value });
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

  render(){
    const { searchField, monsters } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="Search monsters" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
