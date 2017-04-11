import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import renderIf from 'render-if';
import SearchTypeDropdown from './SearchTypeDropdown';
import SearchAnimalDropdown from './SearchAnimalDropdown';

const mapStateToProps = (state, ownProps) => {
  console.log("hello from mapStateToProps", state);
  return {selection: state.searchType, animal: state.animal }
}

class Search extends Component {
  render() {
    console.log("state", this.props.selection);
    const byAnimal = renderIf(this.props.selection === 'animal');
    const isSearchReady = renderIf(this.props.animal !== '');
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <SearchTypeDropdown />
            {byAnimal(<SearchAnimalDropdown />)}
            {isSearchReady(<Button>Search</Button>)}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default connect(mapStateToProps)(Search);
// export default Search;
