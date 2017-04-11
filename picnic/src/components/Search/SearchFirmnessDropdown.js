import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFirmness } from '../../actions';

const mapStateToProps = (state = {}, ownProps) => ({ SearchFirmnessReducer: state.SearchFirmnessReducer });

const mapDispatchToProps = dispatch => bindActionCreators({ selectFirmness }, dispatch);

const SearchFirmnessDropdown = (props) => {
  const handleChange = (e) => {
    e.preventDefault();
    return props.selectFirmness(e.target.value);
  };

  return (
    <FormGroup>
      <FormControl
        componentClass="select"
        onChange={handleChange}
      >
        <option value="select">Select a Firmness</option>
        <option value="hard">Hard</option>
        <option value="semi-hard">Semi-hard</option>
        <option value="semi-soft">Semi-soft</option>
        <option value="soft">Soft</option>
      </FormControl>
    </FormGroup>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchFirmnessDropdown);
