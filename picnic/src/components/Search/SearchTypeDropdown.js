import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { selectSearchType } from '../../actions';

const mapStateToProps = (state, ownProps) => {
  console.log('this is states', state);
  return { SearchTypeReducer: state.SearchTypeReducer };
};

const mapDispatchToProps = dispatch => bindActionCreators({ selectSearchType }, dispatch);

class SearchTypeDropdown extends Component {
  handleChange(e) {
    e.preventDefault();
    return selectSearchType(e.target.value);
  }

  render() {
    console.log('this is props', this.props);
    return (
      <FormGroup controlId="typeSelect" ref={(searchType) => { this.input = searchType; }}>
        <ControlLabel>How would you like to search for cheeses?</ControlLabel>
        <FormControl
          componentClass="select"
          placeholder="Select a Search Method"
          onChange={this.handleChange}
        >
          <option value="select">select</option>
          <option value="name">By Cheese Name</option>
          <option value="firmness">By Firmness</option>
          <option value="animal">By Animal</option>
        </FormControl>
      </FormGroup>
    );
  }
}

// SearchTypeDropdown.propTypes = {
//   selectSearchType: React.PropTypes.string.isRequired,
// };

export default connect(mapStateToProps, mapDispatchToProps)(SearchTypeDropdown);
