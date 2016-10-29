export const ACTI_ADD = "ADD_activity";
export const ACTI_CANCEL = "CANCEL_activity";
export const SHOW_CurrentTime = "SHOW_Time";
//activity operation

export function addActivity(activity) {
    return { type: ACTI_ADD, detail:activity};
}
export function cancelActivity(id) {
    return { type: ACTI_CANCEL, detail: 'activity', id: id};
}
//change category
export const visibilityFilters = {
    SHOW_Activity: 'SHOW_Activity',
    SHOW_UserInfo: 'SHOW_UserInfo'
};
//change category operation
export function toActivity() {
    return {
        type: visibilityFilters.SHOW_Activity
    }
}
export function toUserInfo() {
    return {
        type: visibilityFilters.SHOW_UserInfo
    }
}
export function ShowcurrentTime(t) {
    return {
        type: SHOW_CurrentTime,
        time: t
    }
}