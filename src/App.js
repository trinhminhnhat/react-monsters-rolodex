import { useEffect, useState } from 'react';

import './App.css';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';

const App = () => {
    const [searchValue, setSearchValue] = useState('');
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    const onSearchChange = (e) => {
        const searchValueString = e.target.value.toLowerCase();

        setSearchValue(searchValueString);
    };

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => setMonsters(users));
    }, []);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchValue);
        });

        setFilteredMonsters(newFilteredMonsters);
    }, [monsters, searchValue]);

    return (
        <div className="App">
            <h1 className="app-title">Monsters Rolodex</h1>
            <SearchBox
                onChangeHandler={onSearchChange}
                className="monsters-search-box"
                placeholder="Search Monsters..."
            />
            <CardList monsters={filteredMonsters} />
        </div>
    );
};

export default App;
