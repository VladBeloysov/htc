import React from 'react';
import { block } from 'bem-cn';

const cn = block('channels');
class Channels extends React.Component {
    render() {
        return (
            <div className={ cn() } >
                Каналы
            </div>
        );
    }
}
export default Channels;