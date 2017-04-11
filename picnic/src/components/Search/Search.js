import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import renderIf from 'render-if';
import SearchTypeDropdown from './SearchTypeDropdown';
import SearchAnimalDropdown from './SearchAnimalDropdown';

const mapStateToProps = (state, ownProps) => {
  console.log("hello from mapStateToProps", state);
  return {selection: state.searchType }
}

class Search extends Component {
  render() {
    console.log("state", this.props.selection);
    const byAnimal = renderIf(this.props.selection === ('animal'));
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <SearchTypeDropdown />
            {byAnimal(<SearchAnimalDropdown />)}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default connect(mapStateToProps)(Search);
// export default Search;
