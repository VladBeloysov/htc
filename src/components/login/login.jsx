import React from 'react';
import { block } from 'bem-cn';
import './login.scss';

const cn = block('login');
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { edit: false, newName: null };
    }

    handleClickName = () => {
        const { name } = this.props;
        this.setState({ edit: true, newName: name });
    };

    handleChangeName = (event) => {
        this.setState({ newName: event.target.value });
    };

    handleBlur = () => {
        this.setState({ edit: false });
        //:TODO Записать в store новое имя (action + reducer)
    };

    render() {
        const { name } = this.props;
        const { edit, newName } = this.state;

        return (
            edit ?
                <input type="text" onBlur={ this.handleBlur } onChange={ this.handleChangeName } value={ newName } />
            : <div onClick={ this.handleClickName } className={ cn('name') }>{ newName || name }</div>
        );
    }
}

export default Login;
