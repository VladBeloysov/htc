import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends React.Component {
    static propTypes = {};

    render() {
        return (
            <div className='app'>
                <h1>Project</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { users: state.users, currentUser: state.currentUser, messageError: state.messageError };
};

const mapDispatchToProps = {};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));