import React ,{Component, propTypes} from 'react';
import Calendar from 'rc-calendar';
import ActivityList from '../component/activity/AcitivityList.jsx';
export default class Activity extends Component {
    DateSelect(value) {
        console.log(value);
    }
    render(){
        const { activityList } = this.props;
        return (
            <div>
                <Calendar onChange={this.DateSelect} showDateInput={false} showToday={false}/>
                <ActivityList activityList={activityList} />
            </div>
        )
    }
}
/**
 *
 * @property {object[]} activityList - it's activity store contain the day of activities which be selected
 * @property {string} activityList[].name - activity's name
 */
Activity.propTypes = {
    activityList: propTypes.array
};
