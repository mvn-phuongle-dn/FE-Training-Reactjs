import React from 'react';
import logo from '../asets/logo.svg';

export function Main() {
  return (
    <main className="page-main">
      <div className="container">
        <div className="main-wrap">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="title-app">
            Hello React!
          </h1>
        </div>
      </div>
    </main>
  );
}
