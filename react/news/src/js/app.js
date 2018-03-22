import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import PCIndex from './components/pc_index';
import PCNewsDetails from './components/pc_news_details';
import PCUserCenter from './components/pc_usercenter';

import MobileIndex from './components/mobile_index';
import MobileNewsDetails from './components/mobile_news_details';
import MobileUserCenter from './components/mobile_usercenter';

import 'antd/dist/antd.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width: 1224px)'>
          <Router>
            <Switch>
              <Route component={PCIndex} exact path="/"></Route>
              <Route component={PCNewsDetails} path="/details/:uniquekey"></Route>
              <Route component={PCUserCenter} path="/usercenter"></Route>
            </Switch>
          </Router>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
          <Router>
            <Switch>
              <Route component={MobileIndex} exact path="/"></Route>
              <Route component={MobileNewsDetails} path="/details/:uniquekey"></Route>
              <Route component={MobileUserCenter} path="/usercenter"></Route>
            </Switch>
          </Router>
        </MediaQuery>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
