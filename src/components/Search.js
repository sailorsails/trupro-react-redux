import React, {Component} from 'react';
// import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
// import * as actions from '../actions/searchActions';
import { submitSearch, searchTypeChange, searchTermChange, searchSubmitEnabledChange} from '../actions/searchActions';
// import store from '../store';

class Search extends Component {

    //Handle the onChange event of the search type dropdown
    // handleSearchTypeChange(e) {

    //     // this.setState({
    //     //     searchType: e.target.value
    //     // }, () => {
    //     //     this.setState({
    //     //         searchTermFirst: '',
    //     //         searchTermSecond: ''
    //     //     }, () => {
    //     //         this.handleSubmitEnabled();
    //     //     });
    //     // });
    //     //store.dispatch(searchTypeChange( e.target.value));

    // }
   
    //Handle the click event of the submit button
    // handleSubmit(e) {
    //     // this.props.search(this.state.searchTermFirst, this.state.searchTermSecond);
    //     // e.preventDefault();
    //     // store.dispatch(submitSearch({searchTermFirst: }))
    //     e.preventDefault();
    // }

    // Update the state of the search terms
    // handleSearchTermChange(e) {
    //     // if (e.target.name === 'searchTermFirst') {
    //     //     this.setState({
    //     //         searchTermFirst: e.target.value
    //     //     }, () => {
    //     //         this.handleSubmitEnabled();
    //     //     });
    //     // } else if (e.target.name === 'searchTermSecond') {
    //     //     this.setState({
    //     //         searchTermSecond: e.target.value
    //     //     }, () => {
    //     //         this.handleSubmitEnabled();
    //     //     });
    //     // }
    //     //store.dispatch(searchTermChange({searchTermFirst: searchTermFirst.value, searchTermSecond: searchTermSecond.value}));
        
    // }

    //Check the state of the submit button based on input
    // handleSubmitEnabled() {
    //     if (this.state.searchType === 'Single') {
    //         this.state.searchTermFirst === '' ? this.setState({
    //             isSubmitEnabled: false
    //         }) : this.setState({
    //             isSubmitEnabled: true
    //         });

    //     } else if (this.state.searchType === 'Range') {
    //         this.state.searchTermFirst === '' || this.state.searchTermSecond === '' ? this.setState({
    //             isSubmitEnabled: false
    //         }) : this.setState({
    //             isSubmitEnabled: true
    //         });
    //         console.log('Enabled: ', this.state.searchEntered);

    //     }
    // }
    render() {
        let searchOptions = this.props.searchTypes.map(searchType => {
            return <option key = {searchType} value = {searchType} > {searchType} </option>
        });
        
        return ( 
            <div className = "Search" >
                <div className = 'SearchType' >
                    <h3 > Search Type </h3> 
                    <div className = "SearchTypeDropdown" >
                        <select id='ctlSearchType' ref = "searchType" onChange = {() => this.props.onSearchTypeChange({searchType: document.getElementById('ctlSearchType').value})} >
                        {searchOptions}
                        </select> 
                    </div> 
                {this.props.searchType === 'RANGE' ? < label > Query a range using a starting and an ending block number. </label> : <label>Query a number of blocks backwards from the latest block.</label >} 
                </div> 
                {this.props.searchType === 'RANGE' ? < label > Block Start </label> : <label>Number of blocks</label >}
                <input id='ctlSearchTermFirst' name = 'searchTermFirst' type = 'number' ref = "searchTermFirst" value = {this.props.searchTermFirst} min='1' step='1' onChange = {() => this.props.onSearchTermChange({searchTermFirst: document.getElementById('ctlSearchTermFirst').value})} placeholder={this.props.searchType === 'RANGE' ? 'Starting block number' : 'Number of blocks'}/> 
                {this.props.searchType === 'RANGE' ? < label > Block End </label> : null} 
                {this.props.searchType === 'RANGE' ? < input id='ctlSearchTermSecond' name = 'searchTermSecond' type = 'number' ref = 'searchTermSecond' min={this.props.searchTermFirst} step='1' value = {this.props.searchTermSecond} onChange = {() => this.props.onSearchTermChange({searchTermSecond: document.getElementById('ctlSearchTermSecond').value})}/> : null} 
                <button id = 'btnSearchSubmit' disabled={!this.props.isSubmitEnabled}  onClick = {() => this.props.onSearchSubmit} > Search </button> 
            </div>
        );
    } 
}

function mapStateToProps(state) {
    return { 
        results: state.results,
        isSubmitEnabled: state.searchReducer.isSubmitEnabled,
        searchTypes: state.searchReducer.searchTypes,
        searchType: state.searchReducer.searchType
    };
  }
  
const mapDispatchToProps = (dispatch) => {
    return{
        onSearchTermChange: (payload) => dispatch(searchTermChange(payload)),
        onSearchTypeChange: (payload) => dispatch(searchTypeChange(payload)),
        submitEnabledChange: (payload) => dispatch(searchSubmitEnabledChange(payload)),
        onSearchSubmit: (payload) => dispatch(submitSearch()),
    }
}
  export default connect(mapStateToProps, mapDispatchToProps)(Search);