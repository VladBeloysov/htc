import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import isNil from "lodash/isNil";
import './app.scss';
import { MAIN_PAGE_ROUTE, DETAIL_PAGE_ROUTE } from '../../constants/routes';
import { authorizationUser, addMessageError } from "../../store/actions";

import Header from '../header/header';
import Footer from '../footer/footer';
import ModalLogin from '../modal-login/modal-login';
import PageMain from '../page-main/page-main';
import PageDetail from '../page-detail/page-detail';
import PageError from '../page-error/page-error';

class App extends React.Component {
    static propTypes = {
        authorizationUser: PropTypes.func.isRequired,
        users: PropTypes.array.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = { activeModal: false };
    }

    isUser = null;
    user = null;

    componentDidMount() {
        const userId = localStorage.getItem('userId');
        if(!isNil(userId)) {
            this.authorizationSuccess(Number.parseInt(userId));
            console.log('userId', userId);
        }
    }

    authorizationSuccess = (id, save) => {
        const { users } = this.props;
        console.log('users', users);
        this.props.authorizationUser(id);
        if (save) {
            localStorage.setItem('userId', id);
        }
        console.log('Вы авторизованы, ID:', id);

        this.props.addMessageError(null);

        this.isUser = true;
        this.user = users.filter((item) => item.id === id);
        console.log(this.user);
        // this.hideModal();
    };

    authorizationErrorPassword = () => {
        console.log('Некорректный пароль!');

        this.props.addMessageError('Некорректный пароль!');

        this.isUser = true;
        this.props.authorizationUser(null);
    };

    authorizationErrorUser = () => {
        console.log('Нет такого пользователя!');

        this.props.addMessageError('Нет такого пользователя!');

        this.props.authorizationUser(null);
    };

    handleAuthorization = (auth) => {
        this.isUser = false;
        const { users } = this.props;
        users.map((item) => {
            if ((item.login === auth.login) && (item.password !== auth.password)) {
                if (this.authorizationErrorPassword()) {
                    if ((item.login === auth.login) && (item.password === auth.password)) {
                        this.authorizationSuccess(item.id, auth.save)
                    }
                }

            }

        });
        if (!this.isUser) {
            this.authorizationErrorUser();
        }
    };

    hideModal = () => {
        this.setState({ activeModal: false });
    };

    showModal = () => {
        this.setState({ activeModal: true });
    };

    handleLogIn = () => {
        this.showModal();
    };

    handleLogOut = () => {
        // this.hideModal();
        this.props.authorizationUser(null);
        localStorage.removeItem('userId');
        this.user = null;
    };


    render() {
        const { activeModal } = this.state;
        return (
            <div className='app'>
                <Header logIn={ this.handleLogIn } logOut={ this.handleLogOut } user={ this.user } />
                <Switch>
                    <Route
                        exact={ true }
                        path={ MAIN_PAGE_ROUTE }
                        component={ PageMain }
                    />
                    <Route
                        exact={ true }
                        path={ DETAIL_PAGE_ROUTE }
                        component={ PageDetail }
                    />
                    <Route
                        path='*'
                        component={ PageError }
                    />
                </Switch>
                <Footer />
                {
                    (activeModal) ?
                        <ModalLogin
                            onFormAuth={this.handleAuthorization}
                            hideModal={this.hideModal}
                            messageError={this.props.messageError}
                        /> : null
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { users: state.users, currentUser: state.currentUser, messageError: state.messageError };
};

const mapDispatchToProps = { authorizationUser, addMessageError };
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));