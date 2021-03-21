import React from "react";
import defaultData from "./demo-data-nested.json";
import Resume from "./Resume";

const actions = {
  add: "ADD",
  get: "GET",
  set: "SET",
  remove: "REMOVE",
};

// TODO: add localStorage
class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultData;
    this.request = this.request.bind(this);
  }

  add(id, data) {
    if (this.state[id]) {
      throw new Error(
        `Tried to create a new record at ${id}, but one already exists`
      );
    }

    this.setState({ [id]: data });
  }

  get(id) {
    if (!this.state[id]) {
      throw new Error(`Tried to get data with key ${id}, which does not exist`);
    }

    return this.state[id];
  }

  set(id, data) {
    if (!this.state[id]) {
      throw new Error(
        `Tried to update record at ${id}, but record does not exist`
      );
    }

    this.setState({ [id]: data });
  }

  delete(id) {
    if (!this.state[id]) {
      throw new Error(`Tried to delete non-existent key ${id}`);
    }

    this.setState({ [id]: undefined });
    // TODO: remove item from containing list as well?
  }

  request(action, id, data) {
    switch (action) {
      case actions.add:
        return this.add(id, data);
      case actions.get:
        return this.get(id);
      case actions.set:
        return this.set(id, data);
      case actions.remove:
        return this.remove(id);
      default:
        throw new Error(`Unhandled action type ${action}`);
    }
  }

  render() {
    return <Resume data={this.state} dataHandler={this.request} />;
  }
}

export { actions };
export default Store;
