import React from 'react';
import { connect } from 'react-redux';
import { block } from 'bem-cn';
import { redirectToSearch } from "../../store/actions";
import {Link, withRouter} from "react-router-dom";
import { SliderCarusel } from "../../lib/slider/slider";
import '../../lib/slider/slider.scss';

const cn = block('slider-films-new');
class PageSearch extends React.Component {
    componentDidMount() {
        new SliderCarusel("js-slider-content-search", "js-slider-search", "slider-films-new__item");
    }

    componentWillUnmount() {
        this.props.redirectToSearch(false);
    }

    render() {
        const { searchStr, films } = this.props;
        const filmsSearch = films.filter(item => {
            const title = item.title.toLowerCase();
            return title.indexOf(searchStr.toLowerCase()) >= 0
        });

        return (
            <div className={ cn() }>
                <div className="container">
                    Поиск: <strong>{ searchStr }</strong>

                    <div className="page-main">
                        <div className="tabs-content">
                            <div className="tabs-films">
                                <h2 className="tabs-films__title">{ searchStr }</h2>
                                <div id="js-slider-search" className='slider-carusel'>
                                    <div className='slider-conteiner'>
                                        <div id="js-slider-content-search" className='slider-content'>
                                            {
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
                                            }
                                        </div>
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
    return { films: state.films, searchStr: state.searchStr };
};
const mapDispatchToProps = { redirectToSearch };
export default connect(mapStateToProps, mapDispatchToProps)(PageSearch);