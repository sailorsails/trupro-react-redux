import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider);

export function getBlocks(){
    return {
        type: "GET_BLOCKS_COMPLETE",
        payload:{}
    }
}
export function getCurrentBlockNumber(){
    return{
        type: "GET_CURRENT_BLOCK_NUMBER_COMPLETE",
        payload: {}
    }
}

export function getBlockRange(){
    return{
        type: "GET_BLOCK_RANGE_COMPLETE",
        payload: {}
    }
}

export function processBlocks(){
    return{
        type: "PROCESS_BLOCKS_COMPLETE",
        payload: {}
    }
}