export function submitSearch(payload){
    return{
        type: "SEARCH_SUBMIT",
        payload: payload
    }
}

export function searchTermStartChange(payload){
    return{
        type: "SEARCH_TERM_START_CHANGED",
        payload: payload
    }
}

export function searchTermEndChange(payload){
    return{
        type: "SEARCH_TERM_END_CHANGED",
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