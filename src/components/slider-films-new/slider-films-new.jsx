import React from 'react';
import { Link } from 'react-router-dom';
import { block } from 'bem-cn';
import './slider-films-new.scss';

const cn = block('slider-films-new');
class SliderFilmsNew extends React.Component {
    render() {
        return (
            <div id="js-slider" className='slider-carusel'>
                <div className='slider-conteiner'>
                    <div id="js-slider-content" className='slider-content'>
                        <Link className={ cn('item') } to={ '/detail/1' } >
                            <div className={ cn('image') }>
                                <div className={ cn('desc-wrap') }>
                                    <div className={ cn('desc-text') }>
                                        описание
                                    </div>
                                </div>
                            </div>
                            <div className={ cn('title') }>название</div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default SliderFilmsNew;