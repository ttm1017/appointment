import React from 'react';
import { connect } from 'react-redux';
import Header from '../component/common/header.jsx';
import Activity from './activity.jsx';
import User from './user.jsx';
import { addActivity, cancelActivity, toActivity, toUserInfo } from '../actions/index.js';
/**
 * @store
 * @property {string} category  - judge which category.value: activity,userInfo
 * @property {object} detail    - describe every activity
 * @property {integer} detail.id   - this is a unique number for every activity id
 * @property {object} detail.content -contain activity information
 * @property {string} detail.content.name -activity name
 * @property {string} detail.content.intro - activity introduce
 * @property {string} detail.content.players - people who join activity
 * @property {num} detail.content.toll -number of the people who join
 */
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {dispatch, category, detail} = this.props;
        let MainContainer;
        if (category === 'Activity') {
            MainContainer = <Activity />;
        } else {
            MainContainer = <User />;
        }
        return (
            <div>
                <Header>
                    <div className="menu">
                        <a href="#" className="menu-item activity" onClick={() => dispatch(toActivity())}>活动</a>
                        <a href="#" className="menu-item userInfo" onClick={() => dispatch(toUserInfo())}>用户</a>
                    </div>
                </Header>
                {MainContainer}
            </div>    
        );

    }
}
function select(state) {
    return {
        category: state.changeCategory.category,
        detail: state.dealActivity.detail
    }
}
export default connect(select)(App);