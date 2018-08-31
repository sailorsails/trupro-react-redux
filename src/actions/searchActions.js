export function submitSearch(payload){
    return{
        type: "SEARCH_SUBMIT",
        payload: payload
    }
}
export function searchTermChange(payload){
    return{
        type: "SEARCH_TERM_CHANGE",
        payload: payload
    }
}

export function searchTypeChange(payload){
    return{
        type: 'SEARCH_TYPE_CHANGED',
        payload: payload
    }
}

export function searchSubmitEnabledChange(payload){
    return{
        type: "SUBMIT_ENABLED_CHANGE",
        payload: payload
    }
}