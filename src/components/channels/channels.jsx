import React from 'react';
import { block } from 'bem-cn';
import './channels.scss';
import Icon from '../icon/icon';
import {connect} from "react-redux";

const cn = block('channels');
class Channels extends React.Component {
    constructor(props) {
        super(props);
    }

    viewport = null;
    content = null;
    viewportHeight = null;
    contentHeight = null;
    max = null;
    ratio = null;
    scrollerHeightMin = null;
    step = null;
    pressed = null;
    scrollBarWidth = null;
    scroller = null;
    scrollerBarHeight = null;
    scrollerMaxOffset = null;
    scrollerContainer = null;

    init = () => {
        this.scrollBox();
        // если высота контента меньше или равна высоте вьюпорта,
        // выходим из функции
        if (this.viewportHeight >= this.contentHeight) return;
        // формируем полосу прокрутки и ползунок
        // устанавливаем обработчики событий
        this.registerEventsHandler();
    };

    drop = (e) => {
        e.preventDefault();
        // если кнопка мыши не нажата, прекращаем работу функции
        if (this.pressed === false) return;

        // величина перемещения мыши
        let shiftScroller = this.start - e.clientY;
        // изменяем положение бегунка на величину перемещения мыши
        this.scrollerBar.style.top = (this.scrollerBar.offsetTop - shiftScroller) + 'px';

        // ограничиваем перемещение ползунка по верхней границе вьюпорта
        if (this.scrollerBar.offsetTop <= 0) this.scrollerBar.style.top = '0px';
        // ограничиваем перемещение ползунка по нижней границе вьюпорта
        // сумма высоты ползунка и его текущего отступа от верхней границы вьюпорта
        let	totalHeight = this.scrollerBar.offsetHeight + this.scrollerBar.offsetTop;

        if (totalHeight >= this.viewportHeight) this.scrollerBar.style.top = this.scrollerMaxOffset + 'px';

        // расстояние, на которую должен переместиться контент
        // это расстояние пропорционально смещению ползунка
        let	shiftContent = this.scrollerBar.offsetTop / this.ratio;
        // прокручиваем контент на величину пропорциональную перемещению ползунка,
        // она имеет обратный знак, т.к. ползунок и контент прокручиваются
        // в противоположных направлениях
        this.scrollerContainer.style.top = -shiftContent + 'px';

        // устанавливаем координату Y начала движения мыши равной текущей координате Y
        this.start = e.clientY;
    };

    down = (e) => {
        let dir = 1;

        if (e.code == 'ArrowUp') {
            dir = 1;
        }

        if (e.code == 'ArrowDown') {
            dir = -1;
        }

        let	step = 20 * dir;

        // управляем позиционированием контента
        this.scrollerContainer.style.top = (this.scrollerContainer.offsetTop + step) + 'px';
        // ограничиваем прокручивание контента вверх и вниз
        if (this.scrollerContainer.offsetTop > 0) this.scrollerContainer.style.top = '0px';
        if (this.scrollerContainer.offsetTop < this.max) this.scrollerContainer.style.top = this.max + 'px';

        // перемещаем ползунок пропорционально прокручиванию контента
        this.scrollerBar.style.top = (-this.scrollerContainer.offsetTop * this.ratio) + 'px';
    };

    scroll = (e) => {
        e.preventDefault();

        // направление вращения колёсика мыши
        let dir = -Math.sign(e.deltaY);
        // шаг прокручивания контента, в зависимости от прокручивания
        // колёсика мыши
        let	step = (Math.abs(e.deltaY) >= 3) ? this.step * dir : 0;

        // управляем позиционированием контента
        this.scrollerContainer.style.top = (this.scrollerContainer.offsetTop + step) + 'px';
        // ограничиваем прокручивание контента вверх и вниз
        if (this.scrollerContainer.offsetTop > 0) this.scrollerContainer.style.top = '0px';
        if (this.scrollerContainer.offsetTop < this.max) this.scrollerContainer.style.top = this.max + 'px';

        // перемещаем ползунок пропорционально прокручиванию контента
        this.scrollerBar.style.top = (-this.scrollerContainer.offsetTop * this.ratio) + 'px';
    };

    scrollBox() {
        this.scroller = document.getElementById('js-scroller');
        this.scrollBarWidth = this.scroller.offsetWidth - this.scroller.clientWidth;
        // this.scroller.style.paddingRight = this.scrollBarWidth + 'px';

        // родительский элемент в котором находится контент и скроллбар
        this.viewport = document.getElementById('js-scroller-wrapper');
        this.scrollerBar = document.getElementById('js-scroller-bar');
        this.scrollerContainer = document.getElementById('js-scroller-container');
        // элемент с контентом
        this.content = document.getElementById('js-scroller');
        // высоты полученных элементов
        this.viewportHeight = this.viewport.offsetHeight;
        this.contentHeight = this.content.scrollHeight;
        // возможная максимальная прокрутка контента, имеет отрицательное
        // значение, т.к. контент позиционируется относительно верхнегоjs-scroller-container
        // края вьюпорта и при прокрутке расположен над ним
        this.max = this.viewport.clientHeight - this.contentHeight;
        // соотношение между высотами вьюпорта и контента
        this.ratio = this.viewportHeight / this.contentHeight;
        // минимальная высота ползунка скроллбара
        this.scrollerHeightMin = 25;
        this.scrollerBarHeight = parseInt(this.ratio * this.viewportHeight);
        this.scrollerBarHeight = (this.scrollerBarHeight < this.scrollerHeightMin) ? this.scrollerHeightMin : this.scrollerBarHeight;
        this.scrollerBar.style.height = this.scrollerBarHeight + 'px';
        this.scrollerMaxOffset = this.viewportHeight - this.scrollerBar.offsetHeight;
        // шаг прокручивания контента при наступлении события 'wheel'
        this.step = 30;
        // флаг нажатия на левую кнопку мыши
        this.pressed = false;
    }

    registerEventsHandler = (e) => {
        // вращение колёсика мыши
        this.scroller.addEventListener('wheel', this.scroll);

        // нажатие на левую кнопку мыши
        this.scrollerBar.addEventListener('mousedown', e => {
            // координата по оси Y нажатия левой кнопки мыши
            this.start = e.clientY;
            // устанавливаем флаг, информирующий о нажатии левой кнопки мыши
            this.pressed = true;
        });

        // перемещение мыши
        document.addEventListener('mousemove', this.drop);
        // отпускание левой кнопки мыши

        //обработка нажатия стрелок на клавиатуре
        document.addEventListener('keydown', this.down);

        // сбрасываем флаг, информирующий о нажатии левой кнопки мыши
        document.addEventListener('mouseup', () => this.pressed = false);
    };


    componentDidMount() {
        this.init();
    }

    render() {
        const { channels } = this.props;

        return (
            <div className='scroller__wrapper' id='js-scroller-wrapper'>
                <div className='scroller' id='js-scroller'>
                    <section className="scroller__container" id='js-scroller-container'>
                        <div className={ cn() } >
                            <ul className={ cn('list') }>
                                { channels.map((item, key) =>
                                    <li key={ key } className={ cn('item') }>
                                        <div className={ cn('wrap-icon') }>
                                            <Icon
                                                name={ item.nameIco }
                                                width={ item.widthIco }
                                                height={ item.heigthIco }
                                                className={ cn('icon') }
                                            />
                                        </div>
                                        <div className={ cn('teleprogram') }>
                                            <div className={ cn('teleprogram-name') }>{ item.name }</div>
                                            <ul className={ cn('teleprogram-list') }>
                                                { item.teleprogram.map((teleprogramItem, key2) =>
                                                    <li key={ key2 } className={ cn('teleprogram-item') }>
                                                        <span className={ cn('teleprogram-item-time') }>{ teleprogramItem.time }</span>
                                                        <span className={ cn('teleprogram-item-title') }>{ teleprogramItem.title }</span>
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </section>
                </div>
                <div className='scroller__bar-wrap'>
                    <div className='scroller__bar' id="js-scroller-bar"></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { channels: state.channels };
};

export default connect(mapStateToProps)(Channels);