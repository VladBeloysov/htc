import React from 'react';
import { block } from 'bem-cn';
import Films from "../films/films";
import Channels from "../channels/channels";
import PropType from "prop-types";
const TABS_FILMS = 0;

const cn = block('tabs-content');
class TabsContent extends React.Component {
    static propTypes = {
        activeTab: PropType.number,
    };

    static defaultProps = {
        activeTab: 0
    };

    render() {
        const { activeTab } = this.props;

        return (
            <div className={ cn() }>
                {
                    activeTab === TABS_FILMS
                        ? <Films />
                        : <Channels />
                }
            </div>
        );
    }
}

export default TabsContent;