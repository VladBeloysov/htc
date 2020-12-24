import React from 'react';
import { block } from 'bem-cn';
import './slider-films-genre.scss';
import PropType from "prop-types";
import { SliderCarusel } from "../../lib/slider/slider";

const cn = block('slider-films-genre');
class SliderFilmsGenre extends React.Component {
    static propTypes = {
        filmsGenre: PropType.array.isRequired
    };

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        new SliderCarusel('js-slider-genre-content', 'js-slider-genre', 'slider-films-genre__item-wrap');
    }

    render() {
        const { filmsGenre } = this.props;

        return (
            <div id="js-slider-genre" className='slider-carusel'>
                <div className='slider-conteiner'>
                    <div id="js-slider-genre-content" className='slider-content'>
                        {
                            filmsGenre.map((item, index) =>
                            <div className={ cn('item-wrap') } key={ index }>
                                <div className={ cn('item', { style: item.style }) }>
                                    <div className={ cn('smile') }>{ item.smile }</div>
                                    <div className={ cn('title') }>{ item.title }</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default SliderFilmsGenre;