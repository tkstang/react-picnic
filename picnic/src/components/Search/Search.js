import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Row, Col, Button, Jumbotron } from 'react-bootstrap';
import renderIf from 'render-if';
import { Link } from 'react-router-dom';
import SearchTypeDropdown from './SearchTypeDropdown';
import SearchAnimalDropdown from './SearchAnimalDropdown';
import { getCheese } from '../../actions';

const mapStateToProps = (state, ownProps) =>
  // console.log("hello from mapStateToProps", state);
   ({ selection: state.searchType, animal: state.animal });

const mapDispatchToProps = dispatch => bindActionCreators({ getCheese }, dispatch);

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.getCheese(this.props.animal, this.props.selection);
  }

  render() {
    console.log('state', this.props.selection);
    const byAnimal = renderIf(this.props.selection === 'animal');
    const isSearchReady = renderIf(this.props.animal !== '');
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
            {isSearchReady(<Link to="/results"><Button onClick={this.handleClick}>Search</Button></Link>)}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
// export default Search;
