import React from 'react';
import { block } from 'bem-cn';
import './film-card.scss'
import PropType from "prop-types";

const cn = block('film-card');
class FilmCard extends React.Component {
    static propTypes = {
        film: PropType.object.isRequired
    };

    render() {
        const { film } = this.props;
        return (
            <div className={ cn() }>
                <img className={ cn('img') } src={ film.img } alt="" width="280px" height="370px"/>
                <div className={ cn('desc') }>
                    <div className={ cn('prop') }>
                        <ul className={ cn('list-title') }>
                            <li className={ cn('item-title') }>Название:</li>
                            <li className={ cn('item-title') }>Страна:</li>
                            <li className={ cn('item-title') }>Жанр:</li>
                        </ul>
                        <ul className={ cn('list-text') }>
                            <li className={ cn('item-text') }>{ film.title }</li>
                            <li className={ cn('item-text') }>{ film.country }</li>
                            <li className={ cn('item-text') }>{ film.genre }</li>
                        </ul>
                    </div>
                    <p className={ cn('text') }>{ film.description }</p>
                </div>
            </div>
        );
    }
}
export default FilmCard;