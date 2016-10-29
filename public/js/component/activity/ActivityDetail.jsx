import React, {Component, PropTypes} from 'react';
export default class ActivityDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {activityIntro} = this.props;
        if (Object.keys(activityIntro).length === 0) {
            return (
                <div className="detail-container">
                    <h2 className="title">活动详情</h2>
                    <div className="detail"></div>
                </div>
            )
        }
        else {
            return (
                <div className="detail-container">
                    <h2 className="title">活动详情</h2>
                    <div className="detail">
                        <div className="intro">
                            <img src="../public/images/example.png" alt=""/>
                            <ul className="info">
                                <li className="name">活动名称：{activityIntro.name}</li>
                                <li className="sponsor">发起人：{activityIntro.sponsor}</li>
                                <li className="place">地点：{activityIntro.place}</li>
                                <li className="time">时间：{activityIntro.time}</li>
                            </ul>
                            <div className="join-symbol">
                                <i className="symbol"></i>
                                <p className="word">点击加入</p>
                            </div>
                        </div>
                        <p className="describe">活动描述：{activityIntro.describe}</p>
                        <p className="participantsNumber">已参加人数：{activityIntro.participantsNumber}</p>
                        <div className="decoration"></div>
                        <p className="participants">{activityIntro.participants}</p>
                    </div>
                </div>
            )
        }
    }
}
ActivityDetail.propTypes = {
    activityIntro: PropTypes.object
};