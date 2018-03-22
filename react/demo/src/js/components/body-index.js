import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ReactMixin from 'react-mixin';
import BodyChild from './body-child';

import { Input } from 'antd';

import MixinLog from './mixins';

export default class BodyIndex extends React.Component {

  constructor() {
    super();
    this.state = {
      username: 'Parry',
      age: 20
    };

    this.changeUserInfo = this.changeUserInfo.bind(this);
    this.handleChildValueChange = this.handleChildValueChange.bind(this);
  }

  changeUserInfo() {
    this.setState({
      age: 50
    });

    // var mySubmitButton = document.getElementById('submitButton');
    // console.log(mySubmitButton);
    // ReactDOM.findDOMNode(mySubmitButton).style.color = 'red';

      
    // console.log(this.refs.submitButton);
    // this.refs.submitButton.style.color = 'red';

    // console.log(this.submit);
    MixinLog.log(this.submit);
    this.submit.style.color = 'red';
  }

  handleChildValueChange(e) {
    this.setState({ age: e.target.value });
  }

  render() {

    // setTimeout(() => {
    //   this.setState({username: 'IMOOC', age: 30});
    // }, 4000);

    return (
      <section>
        <h2>页面的主体内容</h2>
        <p> 接收到的父页面的属性：userid:{this.props.userid} username: {this.props.username}</p>
        <p>age: {this.state.age}</p>
        {/* <input ref="submitButton" id="submitButton" type="button" value="提交" onClick={this.changeUserInfo} /> */}
        <Input placeholder="Basic usage" />
        <Input ref={(a)=>{this.submit = a;}} id="submitButton" type="button" value="提交" onClick={this.changeUserInfo} />
        <BodyChild {...this.props} id={4} handleChildValueChange={this.handleChildValueChange}/>
      </section>
    )
  }
}

BodyIndex.defaultProps = {
  userid: 54321,
  username: 'default name'
}

BodyIndex.propTypes = {
  userid: PropTypes.number.isRequired
}

ReactMixin(BodyIndex.prototype, MixinLog);
