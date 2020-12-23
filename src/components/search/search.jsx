import React from 'react';
import { block } from 'bem-cn';
import './search.scss';

const cn = block('search');
class Search extends React.Component {
    render() {
        return (
            <form className={ cn() }>
                <input type="text" placeholder="Поиск..." className={ cn('input') }/>
                <button type="submit" className={ cn('btn') }>Найти</button>
            </form>
        );
    }
}

export default Search;