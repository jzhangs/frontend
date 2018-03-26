// class Input extends Component {
//   render() {
//     return (
//       <div>
//         <input
//           value={this.state.title}
//           onChange={this.changeHandle.bind(this)}
//         />
//         <button onClick={this.clickHandle.bind(this)}>submit</button>
//       </div>
//     );
//   }
// }

// var profile = (
//   <div>
//     <img src="avatar.png" className="profile" />
//     <h3>{[user.firstName, user.lastName].join(' ')}</h3>
//   </div>
// );

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

  addTitle = title => {
    const currentList = this.state.list;
    this.setState({
      list: currentList.concat(title)
    });
  };

  // render() {
  //   return React.createElement(
  //     'div',
  //     null,
  //     React.createElement(Input, { addTitle: this.addTitle }),
  //     React.createElement(List, { data: this.state.list })
  //   );
  // }

  render() {
    return (
      <div>
        <Input addTitle={this.addTitle} />
        <List data={this.state.list} />
      </div>
    );

    // React.createElement(List, {data: this.state.list})
    // var list = new List({data: this.state.list})
    // var vnode = list.render()
  }
}

export default Todo;
