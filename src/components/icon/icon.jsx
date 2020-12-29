import React from 'react';
import PropTypes from 'prop-types';
import IconsSVG from './icons.svg';

class Icon extends React.PureComponent {
    static propTypes = {
        className: PropTypes.object.isRequired,
    }

    render() {
        const { name, width, height, className } = this.props;
        return (
            <svg className={`icon icon-${name} ${className}`} width={width} height={height}>
                <use xlinkHref={`${IconsSVG}#${name}`} />
            </svg>
        );
    }
}

export default Icon;