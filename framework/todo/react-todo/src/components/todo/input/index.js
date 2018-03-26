import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  changeHander(e) {
    this.setState({
      title: e.target.value
    })
  }

  clickHandler = () => {
    const title = this.state.title;
    const addTitle = this.props.addTitle;
    addTitle(title);
    this.setState({
      title: ''
    })
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.title}
            onChange={this.changeHander.bind(this)}/>
        <button onClick={this.clickHandler}>submit</button>
      </div>
    )
  }
}

export default Input;
