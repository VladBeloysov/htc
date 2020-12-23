import React from 'react';
import { block } from 'bem-cn';
import TabsMenu from '../tabs-menu/tabs-menu';
import TabsContent from '../tabs-content/tabs-content';

const cn = block('page-main');
class PageMain extends React.Component {
    state = {
        tabs: ['Фильмы', 'Телеканалы'],
        activeTab: 0
    };

    onChangeTab = (id) => {
        this.setState({ activeTab: id });
    };

    render() {
        const { tabs, activeTab } = this.state;
        return (
            <div className="container">
                <div className={ cn() }>
                    <TabsMenu
                        tabs={ tabs }
                        activeTab={ activeTab }
                        onChangeTab={ this.onChangeTab }
                    />
                    <TabsContent activeTab={ activeTab } />
                </div>
            </div>
        );
    }
}
export default PageMain;