import React from 'react';
import { connect } from 'react-redux';
import Header from '../component/common/header.jsx';
import Activity from './activity.jsx';
import User from './user.jsx';
import { addActivity, cancelActivity, toActivity, toUserInfo, ShowcurrentTime } from '../actions/index.js';
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
        const {dispatch, category, detail, activityList, activityIntro, currentTime} = this.props;
        console.log(activityIntro);
        let MainContainer;
        const cMonthActivity = detail[currentTime];
        if (category === 'Activity') {
            MainContainer = <Activity 
                activityList={activityList} 
                activityIntro={activityIntro} 
                ShowCurrentTime={t => dispatch(ShowcurrentTime(t))}
                currentTime={currentTime}
                cMonthActivity = {cMonthActivity}
                dispatch = {dispatch}
                detail = {detail}
            />;
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
        currentTime: state.addCurrentTime.currentTime,
        detail: state.dealActivity.detail,
        activityList: state.changeActivityList.activityList,
        activityIntro: state.changeActivityList.activityIntro
    }
}
export default connect(select)(App);