import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Menu, Icon, Tabs, Form, Input, Button, CheckBox, message, Modal } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class MobileHeader extends React.Component {

  constructor() {
    super();
    this.state = {
      current: 'top',
      modalVisable: false,
      action: 'login',
      hasLogined: false,
      userNickName: '',
      userid: 0
    };
    this.setModalVisible = this.setModalVisible.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.login = this.login.bind(this);
  }

  setModalVisible(value) {
    this.setState({ modalVisable: value });
  }

  login() {
    this.setModalVisible(true);
  }

  handleClick(e) {
    this.setState({ current: e.key })
    if (e.key === 'register') {
      this.setModalVisible(true);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const myFetchOptions = {
      method: 'GET'
    };

    let formData = this.props.form.getFieldsValue();
    fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=' + this.state.action + '&username='
      + formData.userName + '&password=' + formData.password + '&r_userName=' + formData.r_userName + '&r_password=' + formData.r_password + '&r_confirmPassword=' + formData.r_confirmPassword, myFetchOptions).then(response => response.json()).then(json => {
        this.setState({ userNickName: json.NickUserName, userid: json.UserId });
        if (this.state.action === 'login') {
          this.setState({ hasLogined: true });
        }
        message.success('请求成功');
      });
    this.setModalVisible(false);
  }

  componentWillMount() {
    if (localStorage.userid !== '') {
      this.setState({
        hasLogined: true,
        userNickName: localStorage.userNickName,
        userid: localStorage.userid
      });
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const userShow = this.state.hasLogined
      ? <Link to={`usercenter`}>
          <Icon type="inbox" />
        </Link>
      : <Icon type="setting" onClick={this.login} />;

    return (
      <div id="mobileheader">
        <header>
          <img src="/src/images/logo.png" alt="logo" />
          <span>News</span>
          {userShow}
        </header>

        <Modal title="用户中心" wrapClassName="vertical-center-modal"
          visible={this.state.modalVisable} onCancel={() => this.setModalVisible(false)}
          onOk={() => this.setModalVisible(false)} cancelText="取消" okText="关闭">
          <Tabs type="card">
            <TabPane tab="登录" key="1">
              <Form onSubmit={this.handleSubmit}>
                <FormItem label="账户">
                  {getFieldDecorator('userName')(
                    <Input placeholder="请输入您的账号" />
                  )}
                </FormItem>
                <FormItem label="密码">
                  {getFieldDecorator('password')(
                    <Input type="password" placeholder="请输入您的密码" />
                  )}
                </FormItem>
                <Button type="primary" htmlType="submit">登录</Button>
              </Form>
            </TabPane>
            <TabPane tab="注册" key="2">
              <Form onSubmit={this.handleSubmit}>
                <FormItem label="账户">
                  {getFieldDecorator('r_userName')(
                    <Input placeholder="请输入您的账号" />
                  )}
                </FormItem>
                <FormItem label="密码">
                  {getFieldDecorator('r_password')(
                    <Input type="password" placeholder="请输入您的密码" />
                  )}
                </FormItem>
                <FormItem label="确认密码">
                  {getFieldDecorator('r_confirmPassword')(
                    <Input type="password" placeholder="请再次输入您的密码" />
                  )}
                </FormItem>
                <Button type="primary" htmlType="submit">注册</Button>
              </Form>
            </TabPane>
          </Tabs>
        </Modal>
      </div>
    )
  }
}

export default MobileHeader = Form.create()(MobileHeader);
