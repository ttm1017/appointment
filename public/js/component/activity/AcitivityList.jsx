import React, {Component, PropTypes} from 'react';
export default class AcitivityList extends Component {
    constructor(props) {
        super(props);
    }
    handleClick(e, i) {
        const {activityList, ShowActivityIntro} = this.props;
        e.preventDefault();
        ShowActivityIntro(activityList[i].activityIntro);
    }
    render() {
        const {activityList, day, ShowActivityIntro} = this.props;
        if (!Array.isArray(activityList)) {
            console.error('activityList must be array.');
            return;
        }
        return (
            <div className="List">
                <h2 className="listTitle">活动预览<span></span></h2>
                <ul>
                    {
                        activityList.map((currentValue, index) => (
                            <li key={index} data-index={index}>
                                <a href="#" onClick={(e) => {this.handleClick.bind(this, e)(index)}}>
                                    <img src={currentValue.img} alt=""/>
                                    <div className="info">
                                        <p className="name">活动名称：{currentValue.name}</p>
                                        <p className="sponsor">发起人：{currentValue.sponsor}</p>
                                        <p className="participantsNumber">已参加人数：{currentValue.participantsNumber}</p>
                                    </div>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
/**
 *
 * @property {object[]} activityList - it's activity store contain the day of activities which be selected
 * @property {string} activityList[].name - activity's name
 */
AcitivityList.propTypes = {
    activityList: PropTypes.array
};