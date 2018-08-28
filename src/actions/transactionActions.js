import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider);

export function getTransactions(){
    return {
        
        type: "GET_TRANSACTIONS_COMPLETE",
        payload: {

        }
    }
}
export function getTransactions(){
    return {
        type: "GET_TRANSACTIONS_COMPLETE",
        payload:{}
    }
}

// export const getBlocks = (item) => {
//     console.log('Getting transactions');
//     return {
//         type: 'getTransactions',
//         item
//     };
// }