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
        filmsSearch: PropType.array
    };

    componentDidMount() {
        new SliderCarusel("js-slider-content", "js-slider", "slider-films-new__item");
    }

    componentDidUpdate() {
        new SliderCarusel("js-slider-content", "js-slider", "slider-films-new__item");
    }


    render() {
        const { films, searchStr } = this.props;
        var filmsSearch = [];
        if (searchStr && searchStr.length > 0) {
            filmsSearch = films.filter(item => {
                const title = item.title.toLowerCase();
                return title.indexOf(searchStr.toLowerCase()) >= 0
            });
        }
        return (
            <div id="js-slider" className='slider-carusel'>
                <div className='slider-conteiner'>
                    <div id="js-slider-content" className='slider-content'>
                        {
                            (filmsSearch.length > 0) ?
                                filmsSearch.map((item, index) =>
                                <Link className={ cn('item') } to={ `/detail/${ item.id }` } key={ index }>
                                    <div className={ cn('image') } style={ {backgroundImage: 'url(' + item.img + ')'} }>
                                        <div className={ cn('desc-wrap') }>
                                            <div className={ cn('desc-text') }>
                                                { item.description }
                                            </div>
                                        </div>
                                    </div>
                                    <div className={ cn('title') }>{ item.title }</div>
                                </Link>)
                            :
                                films.map((item, index) =>
                                    <Link className={ cn('item') } to={ `/detail/${ item.id }` } key={ index }>
                                        <div className={ cn('image') } style={ {backgroundImage: 'url(' + item.img + ')'} }>
                                            <div className={ cn('desc-wrap') }>
                                                <div className={ cn('desc-text') }>
                                                    { item.description }
                                                </div>
                                            </div>
                                        </div>
                                        <div className={ cn('title') }>{ item.title }</div>
                                    </Link>)

                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default SliderFilmsNew;