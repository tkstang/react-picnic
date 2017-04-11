import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectSearchType } from '../../actions';

const mapStateToProps = (state = {}, ownProps) => ({ SearchTypeReducer: state.SearchTypeReducer });

const mapDispatchToProps = dispatch => bindActionCreators({ selectSearchType }, dispatch);

const SearchTypeDropdown = (props) => {
  const handleChange = (e) => {
    e.preventDefault();
    return props.selectSearchType(e.target.value);
  };

  return (
    <FormGroup>
      <ControlLabel>How would you like to search for cheeses?</ControlLabel>
      <FormControl
        componentClass="select"
        placeholder="Select a Search Method"
        onChange={handleChange}
      >
        <option value="select">Select a Search Method</option>
        <option value="name">By Cheese Name</option>
        <option value="firmness">By Firmness</option>
        <option value="animal">By Animal</option>
      </FormControl>
    </FormGroup>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchTypeDropdown);

// class SearchTypeDropdown extends Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this)
//   }
//
//   handleChange(e) {
//     e.preventDefault();
//     return this.props.selectSearchType(e.target.value);
//   }
//
//   render() {
//     // console.log('this is selectSearchType', selectSearchType);
//     return (
//       <FormGroup controlId="typeSelect" ref={(searchType) => { this.input = searchType; }}>
//         <ControlLabel>How would you like to search for cheeses?</ControlLabel>
//         <FormControl
//           componentClass="select"
//           placeholder="Select a Search Method"
//           onChange={this.handleChange}
//         >
//           <option value="select">select</option>
//           <option value="name">By Cheese Name</option>
//           <option value="firmness">By Firmness</option>
//           <option value="animal">By Animal</option>
//         </FormControl>
//       </FormGroup>
//     );
//   }
// }

// SearchTypeDropdown.propTypes = {
//   selectSearchType: React.PropTypes.string.isRequired,
// };
