// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ChangeEvent, ChangeEventHandler } from 'react';

import './search-box.styles.css';

type SearchBoxProps = {
    // onChangeHandler2: ChangeEventHandler<HTMLInputElement>;
    // explicit, can define more parameters
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    className: string;
    placeholder?: string;
}

const SearchBox = ({ onChangeHandler, className, placeholder }: SearchBoxProps) => {
    return (
        <input
            type="search"
            className={`search-box ${className}`}
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    );
};

export default SearchBox;
