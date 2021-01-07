import React from 'react';
import { connect } from 'react-redux';
import { block } from 'bem-cn';
import SliderFilmsNew from '../slider-films-new/slider-films-new';
import SliderFilmsGenre from '../slider-films-genre/slider-films-genre';
import PropType from "prop-types";

const cn = block('tabs-films');
class Films extends React.Component {
    static propTypes = {
        films: PropType.arrayOf(PropType.object).isRequired,
        filmsGenre: PropType.arrayOf(PropType.object).isRequired,
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { films, filmsGenre, searchStr } = this.props;
        return (
            <div className={ cn() }>
                <h2 className={ cn('title') }>Новинки</h2>
                <SliderFilmsNew films={ films } searchStr={ searchStr } />
                <h2 className={ cn('title') }>Жанры</h2>
                <SliderFilmsGenre filmsGenre={ filmsGenre } />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { filmsGenre: state.filmsGenre, films: state.films, searchStr: state.searchStr };
};

export default connect(mapStateToProps)(Films);