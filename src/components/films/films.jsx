import React from 'react';
import { block } from 'bem-cn';

const cn = block('tabs-films');
class Films extends React.Component {
    render() {
        return (
            <div className={ cn() }>
                Фильмы
            </div>
        );
    }
}
export default Films;