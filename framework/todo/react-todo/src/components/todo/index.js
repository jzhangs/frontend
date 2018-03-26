import React from 'react';
import Input from './input';
import List from './list';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  addTitle = (title) => {
    const currentList = this.state.list;
    this.setState({
      list: currentList.concat(title)
    });
  }

  render() {
    return (
      <div>
        <Input addTitle={this.addTitle}></Input>
        <List data={this.state.list} />
      </div>
    );
  }
}

export default Todo;
