import { Component } from 'react';

import './App.css';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchValue: '',
        };

        console.log('constructor');
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) =>
                this.setState(
                    () => {
                        return { monsters: users };
                    },
                    () => {
                        // console.log('this.state: ', this.state);
                    },
                ),
            );

        console.log('componentDidMount');
    }

    onSearchChange = (e) => {
        const searchValue = e.target.value.toLowerCase();

        this.setState(() => {
            return { searchValue };
        });
    };

    render() {
        const { onSearchChange } = this;
        const { monsters, searchValue } = this.state;

        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchValue);
        });

        console.log('render');
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
    }
}

export default App;
