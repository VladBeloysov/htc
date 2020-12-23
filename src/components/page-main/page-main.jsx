import React from 'react';
import { block } from 'bem-cn';

const cn = block('page-main');
class PageMain extends React.Component {
    state = {
        tabs: ['Фильмы', 'Телеканалы'],
        activeTab: 0
    };

    render() {
        return (
            <div className="container">
                <div className={ cn() }>
                    Главная страница
                </div>
            </div>
        );
    }
}
export default PageMain;