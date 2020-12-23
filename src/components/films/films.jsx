import React from 'react';
import { block } from 'bem-cn';
import SliderFilmsNew from '../slider-films-new/slider-films-new'
import SliderFilmsGenre from '../slider-films-genre/slider-films-genre'

const cn = block('tabs-films');
class Films extends React.Component {
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
export default Films;