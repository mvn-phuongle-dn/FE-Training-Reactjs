import React, { Component } from 'react';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notices: [{
        id: 1,
        color: 'red',
        tittle: 'This is tittle 1',
        des: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
      }, {
        id: 2,
        color: 'yellow',
        tittle: 'This is tittle 2',
        des: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
      }, {
        id: 3,
        color: 'green',
        tittle: 'This is tittle 3',
        des: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
      }, {
        id: 4,
        color: 'brown',
        tittle: 'This is tittle 4',
        des: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
      }, {
        id: 5,
        color: 'blue',
        tittle: 'This is tittle 5',
        des: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
      }]
    }
  }

  handleDeleteNotice(id) {
    this.setState(prev => ({ notices: prev.notices.filter(item => item.id !== id) }))
  }

  render() {
    const { notices }  = this.state;
    const renderNotices = 
      <ul className="list-column">
        {notices.map(item => (
          <li key={item.id} className="item">
            <div className="notice-box mr-15" style={{backgroundColor: item.color}}></div>
            <div className="text-left mr-15">
              <h3 className="mb-8">{item.tittle}</h3>
              <p className="fs-14 txt-gray">{item.des}</p>
            </div>
            <i class="fas fa-times delete" onClick={()=>{this.handleDeleteNotice(item.id)}}></i>
          </li>
          ))}
      </ul>
    return (
      <main className="page-main flex-center-all">
        <div className="container">
          <div className="main-wrap flex-center-all flex-column">
            { notices.length === 0 ? <p className="fs-18">You don't have any notice.</p> : renderNotices }
            </div>
        </div>
      </main>
    );
  }
}

export default Main;
