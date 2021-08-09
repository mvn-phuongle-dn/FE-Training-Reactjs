import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  const [form, setForm] = useState({email: '', password: ''});
  const auth = useAuth();
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setForm({...form, [name]: value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    auth.login(form.email, form.password)
  }
  return(
    <div className="container">
      <div className="form-login-wrap">
        <form className="form-login" onSubmit={handleSubmit}>
          <div className="form-control">
            <input name="email" type="text" placeholder="Email" onChange={handleChange}></input>
          </div>
          <div className="form-control">
            <input name="password" type="password" placeholder="Password" onChange={handleChange}></input>
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
export default Login;
