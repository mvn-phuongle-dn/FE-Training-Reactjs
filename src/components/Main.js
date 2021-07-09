import React, { useEffect, useState } from 'react';
import { UserRow } from './UserRow';

let id = 0;
export function Main() {
  const [users, setUsers] = useState([]);
  const pages = [1, 2, 3]
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`).then(e => e.json())
    .then(
      e => {
        setUsers(e.data)
      }
    )
  }, [page])

  function handleDelete(id) {
    setUsers(users.filter(item => item.id !== id))
  }

  function handleChangePage(number) {
    setPage(number);
  }

  return (
    <main className="page-main">
      <div className="container">
        <div className="one-col-center">
          <h3 className="text-left mb-24">List User</h3>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Email Address</th>
                <th>Gender</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map(item => <UserRow key={item.id} data={item} onDelete={handleDelete}/>)
              }
            </tbody>
          </table>
          <ul className="pagination mt-24">
            <li className="page-item" onClick={() => handleChangePage(pages[0])}>
              <span className={page === pages[0] ? "page-link txt-gray":"page-link pointer"}>
                <i className="fad fa-chevron-double-left"></i>
              </span>
            </li>
            <li className="page-item" onClick={() => handleChangePage(page-1)}>
              <span className={page === pages[0] ? "page-link txt-gray" : "page-link pointer"}>
                <i className="fas fa-chevron-left"></i>
              </span>
            </li>
            {
              pages.map(item =>
                <li className="page-item pointer" onClick={() => handleChangePage(item)}>
                  <span className={ page === item ? "page-link link-text active" : "page-link link-text"}>{ item }</span>
                </li>
              )
            }
            <li className="page-item" onClick={() => handleChangePage(page+1)}>
              <span className={page === pages[pages.length-1] ? "page-link txt-gray":"page-link pointer"}>
                <i className="fas fa-chevron-right"></i>
              </span>
            </li>
            <li className="page-item" onClick={() => handleChangePage(pages[pages.length-1])}>
              <span className={page === pages[pages.length-1] ? "page-link txt-gray":"page-link pointer"}>
                <i className="fad fa-chevron-double-right"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

