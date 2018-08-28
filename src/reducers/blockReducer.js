export default(state = {
    blocks:[]
}, action) => {
    switch(action.type){

        case "GET_BLOCKS_START": {
            break;
        }
        case "GET_BLOCKS_ERROR": {
            break;
        }
        case "GET_BLOCKS_COMPLETE": {
            break;
        }
        case "GET_CURRENT_BLOCK_NUMBER_START": {
            break;
        }
        case "GET_CURRENT_BLOCK_NUMBER_ERROR": {
            break;
        }
        case "GET_CURRENT_BLOCK_NUMBER_COMPLETE": {
            break;
        }
        case "GET_BLOCK_RANGE_START": {
            break;
        }
        case "GET_BLOCK_RANGE_ERROR": {
            break;
        }
        case "GET_BLOCK_RANGE_COMPLETE": {
            break;
        }
        case "PROCESS_BLOCKS_START": {
            break;
        }
        case "PROCESS_BLOCKS_ERROR": {
            break;
        }
        case "PROCESS_BLOCKS_COMPLETE": {
            break;
        }
        default:
        return state;
    }
}