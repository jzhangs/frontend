import React from 'react';
import { Tabs, Row, Col, Card, Upload, Modal, Icon} from 'antd';
import { Link } from 'react-router-dom';

import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';

const TabPane = Tabs.TabPane;

export default class MobileUserCenter extends React.Component {
  constructor() {
    super();
    this.state = {
      usercollection: '',
      usercomments: '',
      previewImage: '',
      previewVisible: false
    };
  }

  componentDidMount() {
    const myFetchOptions = {
      method: 'GET'
    };

    fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=' + localStorage.userid, myFetchOptions).then(resp => resp.json())
      .then(json => this.setState({ usercollection: json }));

    fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=' + localStorage.userid, myFetchOptions).then(resp => resp.json())
      .then(json => this.setState({ usercomments: json }));
  }

  render() {
    const props = {
      action: 'http://newsapi.gugujiankong.com/hanlder.ashx',
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      listType: 'picture-card',
      defaultFileList: [
        {
          uid: -1,
          name: 'xxx.png',
          state: 'done',
          url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
          thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'
        }
      ],
      onPreview: (file) => {
        this.state({
          previewImage: file.url,
          previewVisible: true
        })
      }
    };

    const { usercollection, usercomments } = this.state;
    const usercollectionList = usercollection.length
      ? usercollection.map((uc, index) => (
        <Card key={index} title={uc.uniquekey} extra={<a href={`/details/${uc.uniquekey}`}>查看</a>} >
          <p>{uc.Title}</p>
        </Card>
      ))
      : '您还没有收藏任何的欣慰，快去收藏一些吧。';

    const usercommentsList = usercomments.length
      ? usercomments.map((comment, index) => (
        <Card key={index} title={`评论了文章 ${comment.uniquekey}`} extra={<a href={`/details/${comment.uniquekey}`}>查看</a>} >
          <p>{comment.Comments}</p>
        </Card>
      ))
      : '您还没有发表过任何评论。';

    return (
      <div>
        <MobileHeader />
        <Row>
          <Col span={24}>
            <Tabs>
              <TabPane tab="我的收藏列表" key="1">
                <Row>
                  <Col span={24}>
                    {usercollectionList}
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="我的评论列表" key="2">
                <Row>
                  <Col span={24}>
                    {usercommentsList}
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="头像设置" key="3">
                <div className="clearfix">
                  <Upload {...props}>
                    <Icon type="plus" />
                    <div className="ant-upload-text">上传照片</div>
                  </Upload>
                  <Modal visible={this.state.previewVisible} footer={null}
                    onCancel={this.handleCancel}>
                    <img alt="预览" src={this.state.previweImage} />
                  </Modal>
                </div>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
        <MobileFooter />
      </div>
    );
  }
}
