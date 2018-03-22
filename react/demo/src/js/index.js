import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Footer from './components/footer';
import BodyIndex from './components/body-index';

import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

export default class Index extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <BodyIndex userid={1234} username={'Parry'}/>
        <Footer />
      </div>
    )
  }
}

// ReactDOM.render(<Index />, document.getElementById('root'));
