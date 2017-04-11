import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import renderIf from 'render-if';
import SearchTypeDropdown from './SearchTypeDropdown';
import SearchAnimalDropdown from './SearchAnimalDropdown';
import SearchFirmnessDropdown from './SearchFirmnessDropdown';

const mapStateToProps = (state, ownProps) => {
  return {selection: state.searchType, animal: state.animal, firmness: state.firmness }
}

class Search extends Component {
  render() {
    const byAnimal = renderIf(this.props.selection === 'animal');
    const byFirmness = renderIf(this.props.selection === 'firmness');
    const isSearchReady = renderIf(
      (this.props.animal !== '') || (this.props.firmness !== '')
    );

    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <SearchTypeDropdown />
            {byAnimal(<SearchAnimalDropdown />)}
            {byFirmness(<SearchFirmnessDropdown />)}
            {isSearchReady(<Button>Search</Button>)}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default connect(mapStateToProps)(Search);
// export default Search;
