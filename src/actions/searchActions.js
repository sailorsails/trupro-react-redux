export function submitSearch(search){
    return{
        type: "GET_CURRENT_BLOCK_NUMBER_COMPLETE",
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

export function isSearchEnabled(val){
    return{
        type: "IS_SUBMIT_ENABLED",
        payload: val
    }
}