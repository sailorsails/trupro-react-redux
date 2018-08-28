import React, { Component } from 'react';

import { connect } from 'react-redux';
import './App.css';
import Search from './components/Search';
import Results from './components/Results';
import EthHelper from './components/EthHelper';

let ethHelper = new EthHelper();   

// function mapStateToProps(state) {
//   return { results: state.results };
// }

// function mapDispatchToProps(dispatch) {
//   return { actions: bindActionCreators(actions, dispatch) };
// }

// @connect((store) => {
//   return {};
// })
// @connect((store) =>{
//   return{
//     results: []
//   }
// })
class App extends Component {
  // constructor(){
  //   super();
  //   // this.state = {
  //   //   startBlockVal: 0,
  //   //   endBlockVal: 0,
  //   //   // results:{
  //   //   //   totalEther: 0,
  //   //   //   percentContract: 0,
  //   //   //   gasTotal: 0,
  //   //   //   gasAverage: 0,
  //   //   //   totalUncles: 0,
  //   //   //   blocks: [],
  //   //   //   transactions: [],
  //   //   // },
  //   //   results:{
  //   //     totalEther: 0,
  //   //     gas: {total: 0, average: 0},
  //   //     uncles: {total: 0},
  //   //     transactionsProcessed: {
  //   //             sent: [],
  //   //             recevied: [],
  //   //             contractAddresses: []
  //   //     }
  //   //   },
  //     // handleSearch: function(searchFirst, searchSecond){
    
  //     //   this.setState({startBlockVal: searchFirst, endBlockVal: searchSecond}, () =>{
          
  //     //     ethHelper.getBlocksAndTransactions(this.state.startBlockVal, this.state.endBlockVal, ()=>{
  //     //       this.setState(ethHelper.getState(), () =>{
  //     //           console.log('Set state called');
  //     //       });
  //     //       // var ethState = ethHelper.getState();
  //     //       // console.log(ethState);
  //     //     });
  //     //   });
  //     // }
  //   // }
  // }
  handleSearch(searchFirst, searchSecond){
    
    this.setState({startBlockVal: searchFirst, endBlockVal: searchSecond}, () =>{
      
      ethHelper.getBlocksAndTransactions(this.state.startBlockVal, this.state.endBlockVal, ()=>{
        this.setState(ethHelper.getState(), () =>{
            console.log('Set state called');
        });
        // var ethState = ethHelper.getState();
        // console.log(ethState);
      });
    });
  }
  componentWillMount(){
    // this.setState(
    //   {
    //     results: {
    //       totalEther: 100,
    //       percentContract: 10,
    //       uniqueSent: 3,
    //       uniqueReceived: 2,
    //       gasAverage: 100020102,
    //       blocks: [
    //         {
    //           address: '0x00000000',
    //           totalEther: 10,
    //           sendReceive: 'send',
    //           isContract: false    
    //         },
    //         {
    //           address: '0x11111111',
    //           totalEther: 77,
    //           sendReceive: 'send',
    //           isContract: false    
    //         },
    //         {
    //           address: '0x22222222',
    //           totalEther: 100,
    //           sendReceive: 'receive',
    //           isContract: true    
    //         }, 
    //         {
    //           address: '0x33333333',
    //           totalEther: 204,
    //           sendReceive: 'send',
    //           isContract: false    
    //         },
    //       ]
    //   }
    // });
  }
  
  render() {
    return (      
        <div className="App">
          <h1>TruPro-Module</h1>        
          <Search search={this.state.handleSearch.bind(this)} />
          <Results results={this.state.results}/>
          
        </div>
      
    );
  }
}
export default App;
// export default connect(mapStateToProps, mapDispatchToProps)(App);