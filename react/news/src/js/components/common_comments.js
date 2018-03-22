import React from 'react';
import { Row, Col, Form, Input, Button, Card, notification } from 'antd';

const FormItem = Form.Item;

class CommonComments extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.favorite = this.favorite.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const myFetchOption = {
      method: 'GET'
    };
    let formData = this.props.form.getFieldsValue();
    fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=' + localStorage.userid + '&uniquekey=' + this.props.uniquekey + '&comment=' + formData.remark, myFetchOption)
      .then(resp => resp.json())
      .then(json => {
        this.componentDidMount();
      });
  }

  favorite() {
    const myFetchOption = {
      method: 'GET'
    };

    fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=' + localStorage.userid + '&uniquekey=' + this.props.uniquekey, myFetchOption)
      .then(resp => resp.json())
      .then(json => {
        notification['success']({message: 'News提醒', description: '收藏此文章成功'});
      });
  }

  componentDidMount() {
    const myFetchOption = {
      method: 'GET'
    };

    fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=' + this.props.uniquekey, myFetchOption)
      .then(resp => resp.json())
      .then(json => {
        this.setState({ comments: json });
      });

  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const { comments } = this.state;
    const commentList = comments.length
      ? comments.map((comment, index) => (
        <Card key={index} title={comment.UserName} extra={<a href="#">发表于 {comment.datetime} </a>} >
          <p> {comment.Comments} </p>
        </Card>
      ))
      : '没有加载到评论';

    return (
      <div className="comment">
        <Row>
          <Col span={24}>
            {commentList}
            <Form onSubmit={this.handleSubmit}>
              <FormItem label="您的评论">
                {getFieldDecorator('remark', { initialValue: '' })(
                  <Input type="textarea" placeholader="随便写" />
                )}
              </FormItem>
              <Button type="primary" htmlType="submit">提交评论</Button>&nbsp;&nbsp;
              <Button type="primary" htmlType="button" onClick={this.favorite}>收藏该文章</Button>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CommonComments = Form.create()(CommonComments);
