import React from 'react';
import { connect } from 'react-redux';
import { block } from 'bem-cn';

const cn = block('page-search');
class PageSearch extends React.Component {
    render() {
        return (
            <div className={ cn() }>
                <div className="container">
                    Поиск
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { films: state.films };
};

export default connect(mapStateToProps)(PageSearch);