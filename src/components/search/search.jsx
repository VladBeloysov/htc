import React from 'react';
import { block } from 'bem-cn';
import './search.scss';

const cn = block('search');
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { search: '' };
        this.props.onFormSearch({ str: '' });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSearch({ str: this.state.search });
        // this.setState({ search: '' });
    };

    handleChangeSearch = (event) => {
        this.setState({ search: event.target.value });
        if (event.target.value === '') this.props.onFormSearch({ str: '' });
    }

    render() {
        return (
            <form className={ cn() } onSubmit={ this.handleSubmit }>
                <input value={ this.state.search } onChange={ this.handleChangeSearch } type="text" placeholder="Поиск..." className={ cn('input') }/>
                <button type="submit" className={ cn('btn') }>Найти</button>
            </form>
        );
    }
}

export default Search;