export default (state = {
    isResultAvailable: false,
    results: {
        totalEther: 0,
        gas: {total: 0, average: 0},
        uncles: {total: 0},
        transactionsProcessed: {
                sent: [],
                recevied: [],
                contractAddresses: []
        }
    },
    error: null
}, action) => {
    switch(action.type){

        case "RESULTS_RECEIVED": {
            return {...state, results: action.payload};
        }
        case "RESULTS_ERROR": {
            return {...state, error: action.payload};
        }
        
        default:
        return state;
    }
}