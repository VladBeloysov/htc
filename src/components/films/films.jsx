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
        filmsNew: PropType.arrayOf(PropType.number).isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { films, filmsGenre, filmsNew } = this.props;

        return (
            <div className={ cn() }>
                <h2 className={ cn('title') }>Новинки</h2>
                <SliderFilmsNew films={ films } filmsNew={ filmsNew } />
                <h2 className={ cn('title') }>Жанры</h2>
                <SliderFilmsGenre filmsGenre={ filmsGenre } />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { films: state.films, filmsGenre: state.filmsGenre, filmsNew: state.filmsNew };
};

export default connect(mapStateToProps)(Films);