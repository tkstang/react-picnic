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
    return props.selectSearchParam(e.target.value);
  };

  return (
    <FormGroup>
      <FormControl
        componentClass="select"
        onChange={handleChange}
      >
        <option value="select">Select an Animal</option>
        <option value="Cow">Cow</option>
        <option value="Sheep">Sheep</option>
        <option value="Goat">Goat</option>
        <option value="Buffalo">Buffalo</option>
      </FormControl>
    </FormGroup>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchAnimalDropdown);
