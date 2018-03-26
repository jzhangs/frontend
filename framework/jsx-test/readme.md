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

var profile = React.createElement(
  "div",
  null,
  React.createElement("img", { src: "avatar.png", className: "profile" }),
  React.createElement(
    "h3",
    null,
    [user.firstName, user.lastName].join(' ')
  )
);

