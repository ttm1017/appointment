import { combineReducers } from 'redux';
import { ACTI_ADD, ACTI_CANCEL, visibilityFilters } from '../actions/index.js';
const initial = {
    category: 'Activity',
    detail: {}
};
function changeCategory(state=initial, action) {
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
function dealActivity(state=initial, action) {
    switch (action.type) {
        case ACTI_ADD:
            var nextDetail = Object.assign({},state.detail,action.detail);
            return Object.assign({},
                {
                    category: state.category,
                    detail: nextDetail
                });
        case ACTI_CANCEL:
            var nextDetail = Object.assign({},state.detail);
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
    changeCategory,
    dealActivity
});
export default todoApp;