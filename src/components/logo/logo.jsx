import React from 'react';
import Icon from '../icon/icon';
import { block } from 'bem-cn';
import { MAIN_PAGE_ROUTE } from "../../constants/routes";
import { Link } from "react-router-dom";
import './logo.scss';

const cn = block('logo');
class Logo extends React.Component {
    render() {
        return (
            <Link className={ cn() } to={ MAIN_PAGE_ROUTE }>
                <Icon
                    name="sign"
                    width="37px"
                    height="36px"
                    className={ cn('icon') }
                />
                <div className={ cn('name') }>Видеосервис</div>
            </Link>
        );
    }
}
export default Logo;
