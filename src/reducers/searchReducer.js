
export default (state = {
    searchTermFirst: '',
    searchTermSecond: '',
    searchType: 'SINGLE',
    isSubmitEnabled: false,
    searchTypes: ['SINGLE', 'RANGE'],
    error: null
}, action) => {
    switch(action.type){

        case "SEARCH_TYPE_CHANGED": {
            
            return {...state, searchType: action.payload};
            
        }
        case "SEARCH_TERM_CHANGED": {
            return{...state, searchTermFirst: action.payload.searchTermFirst, searchTermSecond: action.payload.searchTermSecond}
        }
        case "SEARCH_SUBMIT": {
            return {...state, searchTermFirst: action.payload.searchTermFirst, searchTermSecond: action.payload.searchTermSecond};
            
        }
        case "SUBMIT_ENABLED_CHANGE": {
            return {...state, isSubmitEnabled: action.payload};
             
        }
        default:
        return state;
    }
    
}