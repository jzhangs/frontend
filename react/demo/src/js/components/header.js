import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

  constructor() {
    super();
    this.state = {
      miniHeader: false
    };
    this.switchHeader = this.switchHeader.bind(this);
  }

  switchHeader() {
    // this.setState({miniHeader: !this.state.miniHeader});
  }

  render() {
    const styleHeader = {
      header: {
        backgroundColor: '#333',
        color: '#fff',
        'paddingTop': this.state.miniHeader ? '3px' : '15px',
        paddingBottom: this.state.miniHeader ? '3px' : '15px'
      }
    }

    return (
      <header style={styleHeader.header} className='small-font-size'
              onClick={this.switchHeader}>
        <h1>这里是头部</h1>
        <ul>
            <li><Link to={`/`}>首页</Link></li>
            <li><Link to={`/list/456`}>列表页面</Link></li>
        </ul>
      </header>
    )
  }
}
