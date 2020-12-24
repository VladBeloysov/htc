import React from 'react';
import { Link } from 'react-router-dom';
import { SliderCarusel } from '../../lib/slider/slider';
import { block } from 'bem-cn';
import './slider-films-new.scss';
import '../../lib/slider/slider.scss';
import PropType from "prop-types";

const cn = block('slider-films-new');
class SliderFilmsNew extends React.Component {
    static propTypes = {
        films: PropType.array.isRequired,
        filmsNew: PropType.arrayOf(PropType.number).isRequired
    };

    componentDidMount() {
        new SliderCarusel("js-slider-content", "js-slider", "slider-films-new__item");
    }

    render() {
        const { films, filmsNew } = this.props;

        return (
            <div id="js-slider" className='slider-carusel'>
                <div className='slider-conteiner'>
                    <div id="js-slider-content" className='slider-content'>
                        {
                            filmsNew.map((key, index) =>
                            <Link className={ cn('item') } to={ `/detail/${ films[key].id }` } key={ index }>
                                <div className={ cn('image') } style={ {backgroundImage: 'url(' + films[key].img + ')'} }>
                                    <div className={ cn('desc-wrap') }>
                                        <div className={ cn('desc-text') }>
                                            { films[key].description }
                                        </div>
                                    </div>
                                </div>
                                <div className={ cn('title') }>{ films[key].title }</div>
                            </Link>)
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default SliderFilmsNew;