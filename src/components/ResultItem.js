import React from 'react';


export const ResultItem = (props) => {
  return (
    <li>
      <div className='item'>
        <span>{props.result.address}</span>
        <span>{props.result.totalEther}</span> 
        <span>{props.result.isContract ? '✓' : null}</span>
      </div>
    </li>
  );
}

export default ResultItem;