import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Row, Col, Button, Jumbotron } from 'react-bootstrap';
import renderIf from 'render-if';
import { Link } from 'react-router-dom';
import SearchTypeDropdown from './SearchTypeDropdown';
import SearchAnimalDropdown from './SearchAnimalDropdown';
import SearchFirmnessDropdown from './SearchFirmnessDropdown';
import SearchCheeseName from './SearchCheeseName';
import { getCheese } from '../../actions';


const mapDispatchToProps = dispatch => bindActionCreators({ getCheese }, dispatch);

const mapStateToProps = (state, ownProps) => {
  return {
    selection: state.searchType,
    animal: state.animal,
    firmness: state.firmness,
    name: state.name,
  };
};

export class Search extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.animal !== '') {
      this.props.getCheese(this.props.animal, this.props.selection);
    } else if (this.props.firmness !== '') {
      this.props.getCheese(this.props.firmness, this.props.selection);
    } else if (this.props.name !== ''){
      this.props.getCheese(this.props.name, this.props.selection);
    }
  }

  render() {
    const byAnimal = renderIf(this.props.selection === 'animal');
    const byFirmness = renderIf(this.props.selection === 'firmness');
    const byName = renderIf(this.props.selection === 'name');
    const isSearchReady = renderIf(
      (this.props.animal !== '') || (this.props.firmness !== '') || (this.props.name !== '')
    );

    return (
      <Grid>
        <Jumbotron>
          <h3>Welcome to React Picnic!</h3>
          <br />
          <p>React Picnic is the internet's premiere way to search for cheese!  Please enjoy your stay and search away!</p>
        </Jumbotron>
        <Row>
          <Col xs={12}>
            <SearchTypeDropdown />
            {byAnimal(<SearchAnimalDropdown />)}
            {byFirmness(<SearchFirmnessDropdown />)}
            {byName(<SearchCheeseName />)}
            {isSearchReady(<Link to="/results"><Button onClick={this.handleClick}>Search</Button></Link>)}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
// export default Search;
