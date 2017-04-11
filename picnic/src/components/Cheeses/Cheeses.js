import React from 'react';
// import './Table.css'
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

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
        <button onClick={this.props.getCheese('test')} />
        <Table className="table" >
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
      </div>
    );
  }
}

export default connect(mapStateToProps)(CheeseTable);
