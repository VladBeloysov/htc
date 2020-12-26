import React from 'react';
import { connect } from 'react-redux';
import { block } from 'bem-cn';
import {Link} from "react-router-dom";
import { SliderCarusel } from "../../lib/slider/slider";
import '../../lib/slider/slider.scss';

const cn = block('slider-films-new');
class PageGenre extends React.Component {
    componentDidMount() {
        new SliderCarusel("js-slider-content-genre", "js-slider-genre", "slider-films-new__item");
    }

    render() {
        const { films, match, filmsGenre } = this.props;
        const idGet = match.params.id;
        const resGenre = films.filter(item => item.genreId == idGet);
        return (
            <div className="container">
                <div className="page-main">
                    <div className="tabs-content">
                        <div className="tabs-films">
                            <h2 className="tabs-films__title">{ filmsGenre[idGet].title }</h2>
                            <div id="js-slider-genre" className='slider-carusel'>
                                <div className='slider-conteiner'>
                                    <div id="js-slider-content-genre" className='slider-content'>
                                        {
                                            resGenre.map((item, index) =>
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
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { films: state.films, filmsGenre: state.filmsGenre };
};

export default connect(mapStateToProps)(PageGenre);