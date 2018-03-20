import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDates } from '../actions/index';
import { selectTrack } from '../actions/index';
import { bindActionCreators } from 'redux'; 

class DateList extends Component {
    constructor(props){
        super(props);
        this.state = { term: ''};
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        
        console.log(this.props.dates);
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                placeholder="Please select a date"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>    
            </form>
        );
    }
}

function mapStateToProps(state) {
    //Whatever is return will show up as props
    //inside of TrackList
    return { 
        dates: state.dates
     }; 
}


// //Anything returned from this function will end up as props
// //on the TrackList container
// function mapDispatchToProps(dispatch) {
//     //Whenever selectTrack is called, the result should be
//     //passed to all our reducers
//     return bindActionCreators({ selectTrack: selectTrack }, dispatch)
// }

// Promote TrackList from a component to a container - it needs to know about this new dispatch method, selectTrack
// Make it available as a prop

export default connect(mapStateToProps)(DateList);