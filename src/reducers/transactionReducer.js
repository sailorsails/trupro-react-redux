export default (state = {
    transactions: []
}, action) => {
    switch(action.type){
        case "GET_TRANSACTIONS_START": {
            break;
        }
        case "GET_TRANSACTIONS_ERROR": {
            break;
        }
        case "GET_TRANSACTIONS_COMPLETE": {
            break;
        }
        case "PROCESS_TRANSACTIONS_START": {
            break;
        }
        case "PROCESS_TRANSACTIONS_ERROR": {
            break;
        }
        case "PROCESS_TRANSACTIONS_COMPLETE": {
            break;
        }
        default:{
            return state;
        }
    }
}