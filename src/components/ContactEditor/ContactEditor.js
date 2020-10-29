import React, { Component } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

import ContactList from "../ContactList/ContactList";

import sTransition from "./logo.module.css";

const INIT = {
  name: "",
  number: "",
};

export default class ContactEditor extends Component {
  state = INIT;

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onAddContact(this.state);
    this.setState(INIT);
  };
  componentDidMount() {}
  render() {
    const { name, number } = this.state;
    return (
      <>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames={sTransition}
          unmountOnExit
        >
          <h1>Phonebook</h1>
        </CSSTransition>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Name
            <br />
            <input
              type="text"
              value={name}
              onChange={this.handleChange}
              name="name"
            />
          </label>
          <label htmlFor="number">
            Number
            <br />
            <input
              type="text"
              value={number}
              onChange={this.handleChange}
              name="number"
            />
          </label>
          <button className="add_contact" type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}
ContactList.PropTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
