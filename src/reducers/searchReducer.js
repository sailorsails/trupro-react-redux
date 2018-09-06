
export default (state = {
    searchTermStart: '',
    searchTermEnd: '',
    searchType: 'SINGLE',
    isSubmitEnabled: false,
    searchTypes: ['SINGLE', 'RANGE'],
    error: null
}, action) => {
    switch(action.type){

        case "SEARCH_TYPE_CHANGED": {            
            state =  {...state, searchType: action.payload};
            break;
            
        }
        case "SEARCH_TERM_START_CHANGED": {
            
            state = {...state, searchTermStart: action.payload.searchTermStart};
            break;
        }
        case "SEARCH_TERM_END_CHANGED": {
            
            state = {...state, searchTermEnd: action.payload.searchTermEnd};
            break;
        }
        case "SEARCH_SUBMIT": {
            // state =  {...state, searchTermStart: action.payload.searchTermStart, searchTermEnd: action.payload.searchTermEnd};
            break;
            
        }
        case "SUBMIT_ENABLED_CHANGE": {
            state = {...state, isSubmitEnabled: action.payload};
            break;
             
        }
        default:
        
    }
    return state;
}