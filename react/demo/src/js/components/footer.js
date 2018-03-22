import React from 'react';
// import '../../css/footer.css';
// import footerCss from '../../css/footer.css';

export default class Footer extends React.Component {
  render() {
    // console.log(footerCss);

    const footerConvertStyle = { "miniFooter": { "backgroundColor": "#333", "color": "#fff", "paddingLeft": "20px", "paddingTop": "3px", "paddingBottom": "3px" }, "miniFooter_h1": { "fontSize": "15px" } }


    return (
      // <footer className={footerCss.miniFooter}>
      //   <h1>这里是页脚，一般放版权信息</h1>
      // </footer>

      <footer style={footerConvertStyle.miniFooter}>
        <h1 style={footerConvertStyle.miniFooter_h1}>这里是页脚，一般放版权信息</h1>
      </footer>
    )
  }
}
