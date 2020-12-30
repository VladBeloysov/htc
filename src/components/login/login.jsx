import React from 'react';
import { block } from 'bem-cn';
import './login.scss';
import {connect} from "react-redux";
import { editNameUser } from "../../store/actions/index";

const cn = block('login');
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { edit: false, newName: null };
    }

    handleClickName = () => {
        const { users, currentUser } = this.props;
        this.setState({ edit: true, newName: users[currentUser].name });
    };

    handleChangeName = (event) => {
        this.setState({ newName: event.target.value });
    };

    handleBlur = () => {
        this.setState({ edit: false });
        this.props.editNameUser(this.state.newName);

    };

    render() {
        const { users, currentUser } = this.props;
        const { edit, newName } = this.state;

        return (
            edit ?
                <input type="text" onBlur={ this.handleBlur } onChange={ this.handleChangeName } value={ newName } />
            : <div onClick={ this.handleClickName } className={ cn('name') }>{ users[currentUser].name }</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users, currentUser: state.currentUser
    }
};
const mapDispatchToProps = { editNameUser };

export default connect(mapStateToProps, mapDispatchToProps)(Login);