import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import isNil from "lodash/isNil";
import './app.scss';
import { MAIN_PAGE_ROUTE, DETAIL_PAGE_ROUTE, PAGE_GENRE, PAGE_SEARCH } from '../../constants/routes';
import { authorizationUser, addMessageError, redirectToSearch, addSearchStr } from "../../store/actions";
import { NOT_CORRECT_PASSWORD, NOT_CORRECT_USER } from '../../constants/locale/ru';

import Header from '../header/header';
import Footer from '../footer/footer';
import ModalLogin from '../modal-login/modal-login';
import PageMain from '../page-main/page-main';
import PageDetail from '../page-detail/page-detail';
import PageError from '../page-error/page-error';
import PageGenre from '../page-genre/page-genre';
import PageSearch from '../page-search/page-search';

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

    authorizationSuccess = (id, remember) => {
        const { users } = this.props;
        console.log('users', users);
        this.props.authorizationUser(id);
        if (remember) {
            localStorage.setItem('userId', id);
        }
        this.props.addMessageError(null);
        this.isUser = true;
        this.user = users.filter((item) => item.id === id);
        this.hideModal();
    };

    authorizationError = (message) => {
        this.props.addMessageError(message);
        this.props.authorizationUser(null);
        this.isUser = false;
    };

    handleAuthorization = (auth) => {
        this.isUser = false;
        const { users } = this.props;
        users.map((item) => {
            if (item.login === auth.login) {
                if (item.password === auth.password) {
                    this.authorizationSuccess(item.id, auth.remember);
                } else {
                    this.authorizationError(NOT_CORRECT_PASSWORD);
                }
            } else {
                this.authorizationError(NOT_CORRECT_USER);
            }
        });
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
        this.props.authorizationUser(null);
        localStorage.removeItem('userId');
        this.user = null;
        this.isUser = false;
    };

    handleSearch = (search) => {
        this.props.addSearchStr(search.str);
        this.props.redirectToSearch(true);
    };

    render() {
        const { activeModal } = this.state;
        const { messageError, redirect } = this.props;

        return (
            <div className='app'>
                <Header onFormSearch={ this.handleSearch } logIn={ this.handleLogIn } logOut={ this.handleLogOut } user={ this.user } />
                <Switch>
                    {
                        (redirect) ?
                            <div>
                                <Route
                                    path="/search"
                                    component={ PageSearch }
                                />
                                <Redirect component={ PageSearch } to={`/search`} />
                            </div> : null
                    }
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
                        exact={ true }
                        path={ PAGE_GENRE }
                        component={ PageGenre }
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
                            messageError={ messageError }
                        /> : null
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { users: state.users, currentUser: state.currentUser, messageError: state.messageError, redirect: state.redirect};
};

const mapDispatchToProps = { authorizationUser, addMessageError, redirectToSearch, addSearchStr };
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));