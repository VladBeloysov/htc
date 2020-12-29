import React from 'react';
import { block } from 'bem-cn';
import TabsMenu from '../tabs-menu/tabs-menu';
import TabsContent from '../tabs-content/tabs-content';
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

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
        // const { redirectToSearch, searchStr } = this.props;
        const { tabs, activeTab } = this.state;

        // if (searchStr)  {
        //     return <Redirect to={`/search/:${ searchStr }`}/>
        // }

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

const mapStateToProps = (state) => {
    return { searchStr: state.searchStr, redirectToSearch: state.redirectToSearch };
};

export default withRouter(connect(mapStateToProps)(PageMain));