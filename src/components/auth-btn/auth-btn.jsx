import React from 'react';
import PropTypes from 'prop-types';
import { block } from 'bem-cn';
import './auth-btn.scss';

const cn = block('auth-btn');
class AuthBtn extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired
    };

    render() {
        const { text } = this.props;

        return (
            <button className={ cn() }>{ text }</button>
        );
    }
}
export default AuthBtn;