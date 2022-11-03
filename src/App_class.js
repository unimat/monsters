import { Component } from 'react';
// import logo from './logo.svg';
import CardList  from './components/card-list/card-list.component';          // Import CardList component
import SearchBox from './components/search-box/search-box.component';        // Import SearchBox component
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')         // returns with a Promise
    .then((response) => response.json())                        // convert to json
    .then((users) => this.setState(() => {                      // Set the state object array
      return {monsters: users}
    },/*
    () => {
      console.log(this.state);                                  // Callback function to see the sesult
    }*/
    ));
  }

  onSearchChange = (event) => {                                 // Event Handler, rendering one time only
    const searchField = event.target.value.toLocaleLowerCase()
    this.setState(() => {
      return { searchField }
    });
  }

  render() {
    // const { monsters, searchField } = this.state               // Object destrcturing
    const { onSearchChange } = this                             // Object destrcturing

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className='App'>
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox                                        // SearchBox component 
        className='monster-search-box'                             // Properties
        placeHolder='search monsters'
        onChangeHandler={ onSearchChange }                // Event Handle reference
      />                                                
      <CardList monsters={ filteredMonsters } /> 
      
      {/* // The following code were Before component extraction
      <input 
        className='seach-box' 
        type='search' 
        placeholder=''
        onChange={(event) => {                          // Event Handler
          const searchField = event.target.value.toLocaleLowerCase()
          this.setState(() => {
            return { searchField }
          });
        }} 
      />
                                                      
      {
        filtered.map((monster) => {                         // this is the callback function of map() function
          return <div key={monster.id}>                     
            <h1>{ monster.name }</h1>
          </div>
        })
      }
      */}
    </div>
    )
  }
}

export default App;
