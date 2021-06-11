import React, { Component } from 'react';
import Circle from './Circle';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home'
    }
  }

  handleChangePage(page){
    this.setState({page : page})
  }

  render() {
  const { page }  = this.state;
    return (
      <main className="page-main flex-center-all">
        <div className="container">
          <div className="main-wrap flex-center-all flex-column">
            <div className="btn-wrap">
              <button className="mr-15" onClick={()=>this.handleChangePage('home')}>HOME</button>
              <button onClick={()=>this.handleChangePage('about')}>ABOUT</button>
            </div>
            {(page==='home') && 
              <ul className="col-3 list-circle">
                <Circle size={50} number={50} />
                <Circle size={40} number={40} />
                <Circle size={30} number={30} />
              </ul>
            }
            {(page==='about') && <div>This is About page</div>}
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
