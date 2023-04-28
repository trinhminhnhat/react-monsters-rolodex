import { ChangeEvent, useEffect, useState } from 'react';

import './App.css';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import { getData } from './utils/data.utils';

export type Monster = {
    id: string;
    name: string;
    email: string;
}

const App = () => {
    const [searchValue, setSearchValue] = useState('');
    const [monsters, setMonsters] = useState<Monster[]>([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const searchValueString = e.target.value.toLowerCase();

        setSearchValue(searchValueString);
    };

    useEffect(() => {
        const fetchUsers = async () => {
            // use Array<Monster> or Monster[] the same
            const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');

            setMonsters(users);
        }

        fetchUsers();
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
