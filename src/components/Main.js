import React, { Component } from 'react';
import UserRow from './UserRow';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: '',
        password: '',
        gender: '0',
        country: '',
        other: '',
      },
      users: []
    }
    this.id = 0;
  }

  handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    this.setState(prev => ({
      form: {
        ...prev.form,
        [name]: value
      }
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.id = this.id + 1;
    const newUser = {...this.state.form, id: this.id};
    this.setState(prev => ({ users: [...prev.users, newUser] }))
    console.log('users', this.props.users);
  }

  handleDelete = (id) => {
    this.setState(prev => ({ users: prev.users.filter(item => item.id !== id) }))
  }

  render() {
    const { form, users }  = this.state;
    return (
      <main className="page-main">
        <div className="container flex-center">
          <form className="form-wrap mw-px-420 flex-start">
            <div className="form-group text-left">
              <label>Email Address</label>
              <input type="text" name="email" onChange={this.handleChange}/>
            </div>
            <div className="form-group text-left">
              <label>Password</label>
              <input type="password" name="password" onChange={this.handleChange}/>
            </div>
            <div className="form-group text-left">
              <label>Your country</label>
              <select name="country" onChange={this.handleChange}>
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
                  <input type="radio" value="0" name="gender" onChange={this.handleChange}/> Male
                </label>
                <label>
                  <input type="radio" value="1" name="gender" onChange={this.handleChange}/> Female
                </label>
              </div>
            </div>
            <div className="form-group text-left">
              <label>Other information</label>
              <textarea name="other" onChange={this.handleChange}></textarea>
            </div>
            <button className="w-100 btn-primary" onClick={this.handleSubmit}>Submit</button>
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
                  users.map(item => <UserRow key={item.id} data={item} onDelete={this.handleDelete}/>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
