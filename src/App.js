import { useState, useEffect } from 'react';
// import logo from './logo.svg';
import CardList  from './components/card-list/card-list.component';          // Import CardList component
import SearchBox from './components/search-box/search-box.component';        // Import SearchBox component
import './App.css';


const App =  () => {
  const [searchField, setSearchField] = useState('');                 // [value, setValue] = InitialValue
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')         // returns with a Promise
      .then((response) => response.json())                        // convert to json
      .then((users) => setMonsters(users)
    );
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField]);
  
  const onSearchChange = (event) => {
    const searcString = event.target.value.toLocaleLowerCase();
    setSearchField(searcString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox                                        // SearchBox component 
        className='monster-search-box'                             // Properties
        placeHolder='search monsters'
        onChangeHandler={ onSearchChange }                // Event Handle reference
      />
      <CardList monsters={ filteredMonsters } />
    </div>
  )
}

export default App;
