export function changeActivityList(list) {
    if (list != null) {
        return {
            type: 'changeActivityList',
            list: list
        }
    }
    else {
        return {
            type: 'empty',
            list: null
        }
    }
}
export function changeActivityIntro(intro) {
    return {
        type: 'changeActivityIntro',
        intro: intro
    }
}