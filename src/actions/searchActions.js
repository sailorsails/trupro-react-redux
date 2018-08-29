export function submitSearch(search){
    return{
        type: "SUBMIT_SEARCH",
        payload: {
            searchTermFirst: search.searchTermFirst,
            searchTermSecond: search.searchTermSecond
        }
    }
}

export function searchTypeChange(val){
    return{
        type: 'SEARCH_TYPE_CHANGED',
        payload: val
    }
}

export function isSubmitEnabled(val){
    return{
        type: "SUBMIT_ENABLED",
        payload: val
    }
}