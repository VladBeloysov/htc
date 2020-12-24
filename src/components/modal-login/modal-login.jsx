import React from 'react';

import { block } from 'bem-cn';
import './modal-login.scss';
import AuthBtn from "../auth-btn/auth-btn";
import icoCheck from "../../assets/static/svg/check.svg";
import Icon from "../icon/icon";
import PropType from "prop-types";

const cn = block('modal-login');
class ModalLogin extends React.Component {
    static propTypes = {
        onFormAuth: PropType.func.isRequired,
        hideModal: PropType.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = { login: '', password: '', save: false };
    }

    handleChangeLogin = (event) => {
        this.setState({login: event.target.value});
    }

    handleChangePassword = (event) => {
        this.setState({password: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onFormAuth({ login: this.state.login, password: this.state.password, save: this.state.save});
    }

    checkSaveChange = (event) => {
        this.setState({ save: event.target.checked });
    }

    render() {
        const { hideModal, messageError } = this.props;
        return (
            <div id="js-modal" className={ cn('wrap') }>
                <form className={ cn() } onSubmit={ this.handleSubmit }>
                    <div className={ cn('title') }>Вход</div>
                    <input type="text" value={ this.state.login } onChange={ this.handleChangeLogin } placeholder="Логин" className={ cn('input') }/>
                    <input type="password" value={ this.state.password } onChange={ this.handleChangePassword } placeholder="Пароль" className={ cn('input') }/>
                    <input onChange={ this.checkSaveChange } type="checkbox" id="remember" className={ cn('checkbox') }/>
                    <label className={ cn('label') } htmlFor="remember">
                        <Icon className={ cn('icon') } icon={ icoCheck } width="10px" height="8px"/>
                        Запомнить
                    </label>
                    <AuthBtn className={ cn('auth-button') } text='Войти' onClick={ () => {}} />
                    <div className={ cn('message') }>{ messageError ? messageError : '' }</div>
                </form>
                <div className="overlay" id="js-overlay" onClick={ hideModal }></div>
            </div>
        );
    }
}

export default ModalLogin;