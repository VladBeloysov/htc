import React from 'react';
import { block } from 'bem-cn';
import './footer.scss';
import Icon from "../icon/icon";

const cn = block('footer');
class Footer extends React.Component {
    render() {
        return (
            <div className={ cn() }>
                <div className="container">
                    <Icon
                        name="htc-cs-logo"
                        width="33px"
                        height="66px"
                        className={ cn('icon') }
                    />
                    <div className={ cn('desc') }>
                        <p className={ cn('text') }>426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)</p>
                        <p className={ cn('text') }>+7 (3412) 93-88-61, 43-29-29</p>
                        <a href="https://htc-cs.ru" target="_blank" className={ cn('link') }>htc-cs.ru</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;