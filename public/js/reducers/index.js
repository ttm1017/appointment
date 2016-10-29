import {combineReducers} from 'redux';
import {ACTI_ADD, ACTI_CANCEL, visibilityFilters, SHOW_CurrentTime} from '../actions/index.js';
const initial = {
    category: 'Activity',
    detail: {
        "2016_10": {
            "12": [{
                img: '../public/images/example.png',
                name: 'langrensha',
                sponsor: 'jidan',
                participantsNumber: '10',
                activityIntro: {
                    name: 'qqqq',
                    sponsor: 'jidan',
                    place: 'aaa',
                    time: '2016-7-27 14:00',
                    describe: '活动描述：让我们开展一次高智商动物之间的较量，人狼厮杀，舍我其谁？',
                    participantsNumber: '10',
                    participants: 'ddddddddddddddddddddddd'
                }
            }]
        }
    },
    activityList: [{
        img: '../public/images/example.png',
        name: 'langrensha',
        sponsor: 'jidan',
        participantsNumber: '10',
        activityIntro: {
            name: 'qqqq',
            sponsor: 'jidan',
            place: 'aaa',
            time: '2016-7-27 14:00',
            describe: '活动描述：让我们开展一次高智商动物之间的较量，人狼厮杀，舍我其谁？',
            participantsNumber: '10',
            participants: 'ddddddddddddddddddddddd'
        }
    }],
    activityIntro: {
        name: 'langrensha',
        sponsor: 'jidan',
        place: 'aaa',
        time: '2016-7-27 14:00',
        describe: '活动描述：让我们开展一次高智商动物之间的较量，人狼厮杀，舍我其谁？',
        participantsNumber: '10',
        participants: 'ddddddddddddddddddddddd'
    }
};
function addCurrentTime(state = initial, action) {
    switch (action.type) {
        case SHOW_CurrentTime:
            return Object.assign({}, state, {currentTime: action.time});
        default:
            return state;
    }
}
function changeCategory(state = initial, action) {
    switch (action.type) {
        case visibilityFilters.SHOW_UserInfo:
            return Object.assign({}, state, {category: 'UserInfo'});
        case visibilityFilters.SHOW_Activity:
            var a = Object.assign({}, state, {category: 'Activity'});
            return a;
        default:
            return state;
    }
}
function changeActivityList(state = initial, action) {
    switch(action.type) {
        case 'changeActivityList':
            return Object.assign({}, state, {activityList: action.list, activityIntro: {}});
        case 'empty':
            return Object.assign({}, state, {activityList: [], activityIntro: {}});
        case 'changeActivityIntro':
            return Object.assign({}, state, {activityIntro: action.intro});
        default:
            return state;
    }
}
function dealActivity(state = initial, action) {
    switch (action.type) {
        case ACTI_ADD:
            var nextDetail = Object.assign({}, state.detail, action.detail);
            return Object.assign({},
                {
                    category: state.category,
                    detail: nextDetail
                });
        case ACTI_CANCEL:
            var nextDetail = Object.assign({}, state.detail);
            delete nextDetail[action.id];
            return {
                category: state.category,
                detail: nextDetail
            };
        default:
            return state;
    }
}
const todoApp = combineReducers({
    addCurrentTime,
    changeCategory,
    dealActivity,
    changeActivityList
});
export default todoApp;