import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './app.scss';
import { MAIN_PAGE_ROUTE, DETAIL_PAGE_ROUTE } from '../../constants/routes';

import Header from '../header/header';
import Footer from '../footer/footer'
import PageMain from '../page-main/page-main';
import PageDetail from '../page-detail/page-detail';
import PageError from '../page-error/page-error';

class App extends React.Component {
    static propTypes = {};

    render() {
        return (
            <div className='app'>
                <Header/>
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
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { users: state.users, currentUser: state.currentUser, messageError: state.messageError };
};

const mapDispatchToProps = {};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));