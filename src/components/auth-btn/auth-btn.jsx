import React from 'react';
import PropTypes from 'prop-types';
import { block } from 'bem-cn';
import './auth-btn.scss';

const cn = block('auth-btn');
class AuthBtn extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        login: PropTypes.bool
    };

    handleClick = () => {
        this.props.onClick && this.props.onClick();
    };

    render() {
        const { text, login } = this.props;

        return (
            <button className={ cn({'login': login}) } onClick={ this.handleClick }>{ text }</button>
        );
    }
}
export default AuthBtn;