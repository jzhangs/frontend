import React from 'react';

import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import ReactPullToRefresh from 'react-pull-to-refresh';

// import Tloader from 'react-touch-loader';

export default class MobileList extends React.Component {
  constructor() {
    super();
    this.state = {
      news: '',
      // count: 5,
      // hasMore: 0,
      // initializing: 1,
      // refreshedAt: Date.now()
    };
    // this.loadMore = this.loadMore.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
  }

  componentWillMount() {
    const myFetchOptions = {
      method: 'GET'
    };

    fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=' + this.props.type
      + '&count=' + this.props.count, myFetchOptions).then(resp => resp.json())
      .then(json => this.setState({ news: json }));
  }

  // loadMore(resolve) {
  //   setTimeout(() => {
  //     var count = this.state.count;
  //     this.setState({
  //       count: count + 5
  //     });

  //     const myFetchOptions = {
  //       method: 'GET'
  //     };

  //     fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=' + this.props.type
  //       + '&count=' + count, myFetchOptions).then(resp => resp.json())
  //       .then(json => this.setState({news: json}));

  //     this.setState({
  //       hasMore: count > 0 && count < 50
  //     })

  //     resolve();

  //   }, 2000);
  // }

    onRefresh(resolve) {
      const myFetchOptions = {
        method: 'GET'
      };

      fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=yule'
        + '&count=20', myFetchOptions).then(resp => resp.json())
        .then(json => {
          this.setState({news: json});
          resolve();
        });
    }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       hasMore: 1,
  //       initializing: 2
  //     });
  //   }, 2000);
  // }

  render() {
    // const { hasMore, initializing, refreshedAt } = this.state;

    const { news } = this.state;
    const newsList = news.length
      ? news.map((newsItem, index) => (
        <section key={index} className="m_article list-item special_section clearfix">
          <Link to={`details/${newsItem.uniquekey}`}>
            <div className="m_article_img">
              <img src={newsItem.thumbnail_pic_s} alt={newsItem.title} />
            </div>
            <div className="m_article_info">
              <div className="m_article_title">
                <span>{newsItem.title}</span>
              </div>
              <div className="m_article_desc clearfix">
                <div className="m_article_desc_l">
                  <span className="m_article_channel">{newsItem.realtype}</span>
                  <span className="m_article_time">{newsItem.date}</span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      ))
      : '没有加载到任何新闻';

    return (
      <div>
        <Row>
          <Col span={24}>
            {/* <Tloader className="main" onLoadMore={this.loadMore} hasMore={hasMore} initializing={initializing} autoLoadMore={true}>
                {newsList}
              </Tloader> */}
            <ReactPullToRefresh onRefresh={this.onRefresh} style={{ textAlign: 'center' }}>
              <span className="genericon genericon-next"></span>
              <div>
                {newsList}
              </div>
            </ReactPullToRefresh>
          </Col>
        </Row>
      </div>
    );
  }
}
