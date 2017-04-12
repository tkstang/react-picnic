import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectAnimal } from '../../actions';

const mapStateToProps = (state = {}, ownProps) => ({ SearchAnimalReducer: state.SearchAnimalReducer });

const mapDispatchToProps = dispatch => bindActionCreators({ selectAnimal }, dispatch);

const SearchAnimalDropdown = (props) => {
  const handleChange = (e) => {
    e.preventDefault();
    return props.selectAnimal(e.target.value);
  };

  return (
    <FormGroup>
      <FormControl
        componentClass="select"
        onChange={handleChange}
      >
        <option value="select">Select an Animal</option>
        <option value="cow">Cow</option>
        <option value="sheep">Sheep</option>
        <option value="goat">Goat</option>
        <option value="buffalo">Buffalo</option>
      </FormControl>
    </FormGroup>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchAnimalDropdown);
