import { Component } from 'react';

import './App.css';

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

    render() {
        const filteredMonsters = this.state.monsters.filter((monster) => {
            console.log('filteredMonsters: ');
            return monster.name.toLowerCase().includes(this.state.searchValue);
        });

        console.log('render');
        return (
            <div className="App">
                <input
                    type="text"
                    className="search-box"
                    placeholder="Search Monsters..."
                    onChange={(e) => {
                        const searchValue = e.target.value.toLowerCase();

                        this.setState(() => {
                            return { searchValue };
                        });
                    }}
                />
                {filteredMonsters.map((monster) => (
                    <h1 key={monster.id}>{monster.name}</h1>
                ))}
            </div>
        );
    }
}

export default App;
