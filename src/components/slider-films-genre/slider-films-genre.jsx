import React from 'react';
import { block } from 'bem-cn';
import './slider-films-genre.scss';

const cn = block('slider-films-genre');
class SliderFilmsGenre extends React.Component {
    render() {
        return (
            <div id="js-slider-genre" className='slider-carusel'>
                <div className='slider-conteiner'>
                    <div id="js-slider-genre-content" className='slider-content'>
                        <div className={ cn('item-wrap') } >
                            <div className={ cn('item') }>
                                <div className={ cn('smile') }>смайл</div>
                                <div className={ cn('title') }>название</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SliderFilmsGenre;