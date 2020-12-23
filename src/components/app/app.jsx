import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './app.scss';
import Header from '../header/header';
import Footer from '../footer/footer'

class App extends React.Component {
    static propTypes = {};

    render() {
        return (
            <div className='app'>
                <Header/>
                <p>Контент</p>
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