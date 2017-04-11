import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import SearchTypeDropdown from './SearchTypeDropdown';

class Search extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <SearchTypeDropdown />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Search;
