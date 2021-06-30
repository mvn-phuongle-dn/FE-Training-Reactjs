import React, { useState } from 'react';
import { UserRow } from './UserRow';

let id = 0;
export function Main() {
  const [users, setUsers] = useState([]);

  const [form, setForm] = useState({
    email: '',
    password: '',
    gender: '0',
    country: '',
    other: '',
  });

  function handleChange (e) {
    e.preventDefault();
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const name = e.target.name;
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleSubmit (e) {
    e.preventDefault();
    id += 1;
    const newUser = {...form, id};
    setUsers([...users, newUser]);
  }

  function handleDelete (id) {
    setUsers(users.filter(item => item.id !== id))
  }

    return (
      <main className="page-main">
        <div className="container flex-center">
          <form className="form-wrap mw-px-420 flex-start">
            <div className="form-group text-left">
              <label>Email Address</label>
              <input type="text" name="email" onChange={handleChange}/>
            </div>
            <div className="form-group text-left">
              <label>Password</label>
              <input type="password" name="password" onChange={handleChange}/>
            </div>
            <div className="form-group text-left">
              <label>Your country</label>
              <select name="country" onChange={handleChange}>
                <option value="">Please choose</option>
                <option value="VietNam">VietNam</option>
                <option value="England">England</option>
                <option value="Japan">Japan</option>
                <option value="America">America</option>
                <option value="ThaiLand">ThaiLand</option>
                <option value="Singapore">Singapore</option>
                <option value="Canada">Canada</option>
                <option value="Mexico">Mexico</option>
              </select>
            </div>
            <div className="form-group text-left">
              <label>Gender</label>
              <div className="radio-group">
                <label>
                  <input type="radio" value="0" name="gender" onChange={handleChange}/> Male
                </label>
                <label>
                  <input type="radio" value="1" name="gender" onChange={handleChange}/> Female
                </label>
              </div>
            </div>
            <div className="form-group text-left">
              <label>Other information</label>
              <textarea name="other" onChange={handleChange}></textarea>
            </div>
            <button className="w-100 btn-primary" onClick={handleSubmit}>Submit</button>
          </form>
          <div className="">
            <h3 className="text-left mb-24">List User</h3>
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Email Address</th>
                  <th>Gender</th>
                  <th>Counthy</th>
                  <th>Other</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map(item => <UserRow key={item.id} data={item} onDelete={handleDelete}/>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </main>
    );
}

