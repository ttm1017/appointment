import React ,{Component, PropTypes} from 'react';
import Calendar from 'rc-calendar';
import zhCN from 'rc-calendar/lib/locale/zh_CN';
import enUS from 'rc-calendar/lib/locale/en_US';
import ActivityList from '../component/activity/AcitivityList.jsx';
import ActivityDetail from '../component/activity/ActivityDetail.jsx';
import {changeActivityList, changeActivityIntro} from '../actions/activity.js';
const cn = location.search.indexOf('cn') !== -1;
const format = 'YYYY-MM-DD HH:mm:ss';
export default class Activity extends Component {
    constructor(props) {
        super(props);
        this.DateSelect = this.DateSelect.bind(this);
        this.ShowActivityIntro = this.ShowActivityIntro.bind(this);
    }
    DateSelect(value) {
        const {detail, currentTime, dispatch} = this.props;
        const day = value.format('DD');
        const arr = detail[currentTime][day];
        dispatch(changeActivityList(arr));
    }
    ShowActivityIntro(intro) {
        const {dispatch} = this.props;
        dispatch(changeActivityIntro(intro));
    }
    render(){
        const { activityList, activityIntro, ShowCurrentTime, currentTime, cMonthActivity } = this.props;
        console.log(this.props);
        return (
            <div className="activity_interface">
                <div className="Date">
                    <Calendar
                        onChange={this.DateSelect}
                        showDateInput={false}
                        showToday={false}
                        locale={cn ? zhCN : enUS}
                        ShowCurrentTime={ShowCurrentTime}
                        currentTime={currentTime}
                        cMonthActivity={cMonthActivity}
                    />
                </div>
                <ActivityList activityList={activityList} ShowActivityIntro={this.ShowActivityIntro} />
                <ActivityDetail activityIntro={activityIntro} />
            </div>
        )
    }
}
