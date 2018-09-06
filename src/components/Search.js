import React, {Component} from 'react';
import { connect } from 'react-redux';
import { submitSearch, searchTypeChange, searchTermStartChange, searchTermEndChange, searchSubmitEnabledChange} from '../actions/searchActions';


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

    

   
    // handleSearchChange(val){
    //     // this.props.onSearchTermChange(val);
    //     if (this.props.searchType === 'SINGLE') {
    //         this.props.searchTermStart === '' ? 
    //         this.props.submitEnabledChange(false)
    //             : this.props.submitEnabledChange(true)
    //     } else if (this.props.searchType === 'RANGE') {
    //         this.props.searchTermStart === '' || this.state.searchTermEnd === '' ? 
    //         this.props.submitEnabledChange(false)
    //         : this.props.submitEnabledChange(true)
    //     };
        
    // }
    // handleSubmitEnabled(){
    //     if (this.props.searchType === 'SINGLE') {
    //         this.props.searchTermStart === '' ? 
    //         this.props.submitEnabledChange(false)
    //             : this.props.submitEnabledChange(true)
    //     } else if (this.props.searchType === 'RANGE') {
    //         this.props.searchTermStart === '' || this.state.searchTermEnd === '' ? 
    //         this.props.submitEnabledChange(false)
    //         : this.props.submitEnabledChange(true)
    //     };
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
                {this.props.searchType.searchType === 'RANGE' ? < label > Query a range using a starting and an ending block number. </label> 
                : <label>Query a number of blocks backwards from the latest block.</label >} 
                </div> 
                
                <h3>Search Value</h3>                
                {this.props.searchType.searchType === 'RANGE' ? < label > Block Start </label> : <label>Number of blocks</label >}
                
                <input id='ctlSearchTermFirst' name = 'searchTermFirst' type = 'number' ref = "searchTermFirst" value = {this.props.searchTermStart} min='1' step='1' 
                onChange = {() => this.props.onSearchTermStartChange({searchTermStart: document.getElementById('ctlSearchTermFirst').value})}
                placeholder={this.props.searchType === 'RANGE' ? 'Starting block number' : 'Number of blocks'}/> 
                
                {this.props.searchType.searchType === 'RANGE' ? < label > Block End </label> : null} 
                
                {this.props.searchType.searchType === 'RANGE' ? 
                < input id='ctlSearchTermSecond' name = 'searchTermSecond' type = 'number' ref = 'searchTermSecond' min={this.props.searchTermStart} step='1' value = {this.props.searchTermEnd} 
                onChange = {() => this.props.onSearchTermEndChange({searchTermEnd: document.getElementById('ctlSearchTermSecond').value})}/> 
                : null} 
                
                <button id = 'btnSearchSubmit' onClick = {this.props.onSearchSubmit} > Search </button> 
                {/* disabled={!this.props.isSubmitEnabled} */}
            </div>
        );
    } 
}

function mapStateToProps(state) {
    return { 
        results: state.results,
        isSubmitEnabled: state.searchReducer.isSubmitEnabled,
        searchTypes: state.searchReducer.searchTypes,
        searchType: state.searchReducer.searchType,
        searchTermStart: state.searchReducer.searchTermStart,
        searchTermEnd: state.searchReducer.searchTermEnd
    };
  }
  
const mapDispatchToProps = (dispatch) => {
    return{
        onSearchTermStartChange: (payload) => dispatch(searchTermStartChange(payload)),
        onSearchTermEndChange: (payload) => dispatch(searchTermEndChange(payload)),
        onSearchTypeChange: (payload) => dispatch(searchTypeChange(payload)),
        submitEnabledChange: (payload) => dispatch(searchSubmitEnabledChange(payload)),
        onSearchSubmit: (payload) => dispatch(submitSearch()),
    }
}
  export default connect(mapStateToProps, mapDispatchToProps)(Search);