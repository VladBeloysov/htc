import React from 'react';
import { block } from 'bem-cn';
import Logo from '../logo/logo';
import Search from '../search/search';
import AuthBtn from '../auth-btn/auth-btn';
import './header.scss';
import PropTypes from "prop-types";
import isNil from "lodash/isNil";

const cn = block('header');
class Header extends React.Component {
    static propTypes = {
        logIn: PropTypes.func.isRequired,
        logOut: PropTypes.func.isRequired,
        user: PropTypes.arrayOf(PropTypes.object)
    };

    static defaultProps = {
        user: null
    };

    handleClickIn = () => {
        this.props.logIn && this.props.logIn();
    };

    handleClickOut = () => {
        this.props.logOut && this.props.logOut();
    };

    render() {
        const { user } = this.props;

        return (
            <div className={ cn() }>
                <div className="container">
                    <Logo />
                    <Search onFormSearch={ this.props.onFormSearch } />
                    {
                        isNil(user)
                            ? <AuthBtn onClick={ this.handleClickIn } text='Войти' />
                            : (
                                <div className={ cn('auth-wrap') }>
                                    <span className={ cn('auth-name') }>{ user[0].name }</span>
                                    <AuthBtn className={ cn('log-out') } onClick={ this.handleClickOut } text='Выйти' />
                                </div>
                            )
                    }
                </div>
            </div>
        );
    }
}

export default Header;