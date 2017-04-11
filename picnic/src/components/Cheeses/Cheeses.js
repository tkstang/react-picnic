import React from 'react';
// import './Table.css'
import { connect } from 'react-redux';

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

class Table extends React.Component {
  render() {
    return (
      <table className="table">
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
      </table>
    );
  }
}

export default connect(mapStateToProps)(Table);
