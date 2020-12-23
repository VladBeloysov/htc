import React from 'react';
import PropTypes from 'prop-types';

class Icon extends React.PureComponent {
    static propTypes = {
        className: PropTypes.object.isRequired,
        icon: PropTypes.string.isRequired
    }

    render() {
        const { className, icon, width, height } = this.props;
        return (
            <svg className={ `icon ${className}` } viewBox={ icon.viewBox } width={ `${width}` } height={ `${height}` }>
                <use xlinkHref={ `#${icon.id}` }/>
            </svg>
        );
    }
}

export default Icon;