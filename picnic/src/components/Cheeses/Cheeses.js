import React from 'react';
// import './Table.css'
import { connect } from 'react-redux';
import { Table, Grid } from 'react-bootstrap';

const _renderList = list => (
  list
    .map(item => (
      <tr key={item.id}>
        <td>
          {item.name}
        </td>
        <td>
          {item.animal}
        </td>
        <td>
          {item.firmness}
        </td>
      </tr>
  ))
);

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.list,
  };
};

class CheeseTable extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Table className="table" striped bordered condensed hover >
            <thead>
              <tr>
                <th>
                  Name
                </th>
                <th>
                  Animal
                </th>
                <th>
                  Firmness
                </th>
              </tr>
            </thead>
            <tbody>
              {_renderList(this.props.list)}
            </tbody>
          </Table>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps)(CheeseTable);
