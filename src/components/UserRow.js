import React from 'react';

export function UserRow(props) {
  const { data } = props;
  return (
    <tr key={data.id}>
      <td>{data.id}</td>
      <td>{data.email}</td>
      <td>{data.gender === '0' ? 'Male' : 'Female'}</td>
      <td>{data.country}</td>
      <td>{data.other}</td>
      <td>
        <i className="fas fa-times icon-delete" onClick={()=>{props.onDelete(data.id)}}></i>
      </td>
    </tr>
  );
}
