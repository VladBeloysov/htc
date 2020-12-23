import React from 'react';
import { block } from 'bem-cn';
import Logo from '../logo/logo';
import Search from '../search/search';
import AuthBtn from '../auth-btn/auth-btn';
import './header.scss';

const cn = block('header');
class Header extends React.Component {
    static propTypes = {};

    render() {
        return (
            <div className={ cn() }>
                <div className="container">
                    <Logo />
                    <Search />
                    <AuthBtn onClick="" text='Войти' />
                </div>
            </div>
        );
    }
}

export default Header;