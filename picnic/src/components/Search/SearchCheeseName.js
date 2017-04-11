import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { cheeseInput } from '../../actions';

const mapStateToProps = (state = {}, ownProps) => ({ CheeseNameReducer: state.CheeseNameReducer });

const mapDispatchToProps = dispatch => bindActionCreators({ cheeseInput }, dispatch);

const SearchCheeseName = (props) => {
  const handleChange = (e) => {
    e.preventDefault();
    return props.selectName(e.target.value);
  };

  return (
    <FormGroup>
      <FormControl
        type="text"
        // value={this.state.value}
        placeholder="Enter a Cheese Name"
        onChange={handleChange}
      />
      <FormControl.Feedback />
    </FormGroup>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchCheeseName);
