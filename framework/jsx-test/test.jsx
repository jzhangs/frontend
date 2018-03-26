const app = <App />;

// const app = React.createElement(App, null);
// const app = new App();
// return app.render();

<div className="App">
  <Todo />
</div>;

/*

React.createElement(
  "div",
  { className: "App" },
  React.createElement(Todo, null)
);

*/

<div>
  <Input addTitle={this.addTitle} />
  <List data={this.state.list} />
</div>;

/*

React.createElement(
  "div",
  null,
  React.createElement(Input, { addTitle: this.addTitle }),
  React.createElement(List, { data: this.state.list })
);

*/
