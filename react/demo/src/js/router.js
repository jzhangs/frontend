import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Index from './index';
import Header from './components/header';
// import List from './components/list';
import Details from './components/details';

const List = ( {match}) => (
  <div>
    <Header />
    <h2>这里是列表页面 id: {match.params.id}</h2>
  </div>
);

export default class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={Index} exact path="/"></Route>
          <Route component={List} path="/list/:id"></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
