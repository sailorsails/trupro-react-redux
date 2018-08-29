import React from 'react';
import ResultItem from './ResultItem';

export const Results = (props) => {
  
  let sentResultItems;
  if(props.results.transactionsProcessed.sent){
    sentResultItems = props.results.transactionsProcessed.sent.map(result => {
        return (
          <ResultItem key={result.address} result={result} />
        );
    });
  }
  let receivedResultItems;
  if(props.results.transactionsProcessed.sent){
    receivedResultItems = props.results.transactionsProcessed.received.map(result => {
        return (
          <ResultItem key={result.address} result={result} />
        );
    });
  }
  return (
    <div className="Result">
      <h3>Results</h3>
      <ul>
          <li>Total Ether Transferred: {props.results.totalEther}</li>
          <li>% Contract Transactions: {props.results.percentContract}</li>
          <li>Unique Sent Addresses: {props.results.uniqueSent}</li>
          <li>Unique Received Addresses: {props.results.uniqueReceived}</li>
          <li>Gas Total: {props.results.gas.total}</li>
          <li>Gas Average: {props.results.gas.average}</li>
          <li>Total Uncles: {props.results.uncles.total}</li>
          
      </ul>
      
      <div className='Grid'>
          <ul className="Records">
              <li>
                <div>
                  <span><strong>Address</strong></span>
                  {/* <span><strong>Sent/Received</strong></span> */}
                  <span><strong>Total Ether</strong></span>
                  <span><strong>Is Contract</strong></span>
                </div>
              </li> 
              <br/>
              <li><strong>Sent</strong></li>
                {sentResultItems}
              <li><strong>Received</strong></li>
                {receivedResultItems}
              {/* {resultItems}  */}
            
          </ul>
          
          
      </div>
      
    </div>
  );
}