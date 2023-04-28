import { ChangeEventHandler, Component } from 'react';

import './search-box.styles.css';

interface ISearchBoxProps {
    onChangeHandler: ChangeEventHandler<HTMLInputElement>;
    className: string;
    placeholder?: string;
}

class SearchBox extends Component<ISearchBoxProps> {
    render() {

        const { onChangeHandler, className, placeholder } = this.props;

        return (
            <input
                type="search"
                className={`search-box ${className}`}
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
        );
    }
}

export default SearchBox;
