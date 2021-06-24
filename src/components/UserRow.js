import React, { Component } from 'react';

class UserRow extends Component {
  render() {
    const { data } = this.props;
    return (
      <tr key={data.id}>
        <td>{data.id}</td>
        <td>{data.email}</td>
        <td>{data.gender === '0' ? 'Male' : 'Female'}</td>
        <td>{data.country}</td>
        <td>{data.other}</td>
        <td>
          <i className="fas fa-times icon-delete" onClick={()=>{this.props.onDelete(data.id)}}></i>
        </td>
      </tr>
    );
  }
}
export default UserRow;
