import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectSearchType } from '../../actions';

const mapStateToProps = (state, ownProps) => { searchTypeSelection: state.searchTypeSelection };

const mapDispatchToProps = dispatch => bindActionCreators({ selectSearchType }, dispatch);

class SearchTypeDropdown extends Component {
  render() {
    return (
      <FormGroup controlId="formControlSelect">
        <ControlLabel>How would you like to search for cheeses?</ControlLabel>
        <FormControl componentClass="select" placeholder="Select a Search Method" onChange={e => console.log(e)}>
          <option value="select">select</option>
          <option value="name">By Cheese Name</option>
          <option value="firmness">By Firmness</option>
          <option value="animal">By Animal</option>
        </FormControl>
      </FormGroup>
    );
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(SearchTypeDropdown)
