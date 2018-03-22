import React from 'react';
import { Row, Col, BackTop } from 'antd';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import CommonComments from './common_comments';

export default class PCNewsDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      newsItem: ''
    }
  }

  componentDidMount() {
    const myFetchOption = {
      method: 'GET'
    };

    fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=' + this.props.match.params.uniquekey, myFetchOption)
      .then(resp => resp.json())
      .then(json => {
        this.setState({ newsItem: json });
        document.title = this.state.newsItem.title + ' - React News';
      });

  }

  createMarkup() {
    return { __html: this.state.newsItem.pagecontent };
  }

  render() {
    return (
      <div id="mobileDetailsContainer">
        <MobileHeader />
        <Row>
          <Col span={24} className="container" >
            <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
            <hr />
            <CommonComments uniquekey={this.props.match.params.uniquekey} />
          </Col>
        </Row>
        <MobileFooter />
        <BackTop />
      </div>
    );
  }
}
