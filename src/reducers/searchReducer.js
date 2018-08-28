export default(state = {
    searchTermFirst: '',
    searchTermSecond: '',
    searchType: 'SINGLE',
    isSubmitEnabled: false,
    error:null
}, action) => {
    switch(action.type){

        case "SEARCH_TYPE_CHANGED": {
            return {...state, searchType: action.payload};
            
        }
        case "SEARCH_SUBMITTED": {
            return {...state, searchTermFirst: action.payload.searchTermFirst, searchTermSecond: action.payload.searchTermSecond};
            
        }
        case "IS_SUBMIT_ENABLED": {
            return {...state, isSubmitEnabled: action.payload};
             
        }
        default:
        return state;
    }
}