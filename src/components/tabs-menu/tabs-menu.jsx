import React from 'react';
import { block } from 'bem-cn';
import './tabs-menu.scss';
import PropType from "prop-types";

const cn = block('tabs-menu');
class TabsMenu extends React.Component {
    static propTypes = {
        tabs: PropType.array.isRequired,
        activeTab: PropType.number,
        onChangeTab: PropType.func.isRequired,
    };

    static defaultProps = {
        activeTab: 0
    };

    render() {
        const { tabs, activeTab, onChangeTab } = this.props;
        return (
            <ul className={ cn() }>
                { tabs.map((item, key) =>
                    <li aria-selected={ key === activeTab } role="tab" key={ key } className={ cn('item') }>
                        <a
                            className={ cn('link', { active: key === activeTab }) }
                            onClick={ () => onChangeTab(key) }
                        >{ item }</a>
                    </li>
                )}
            </ul>

        );
    }
}

export default TabsMenu;