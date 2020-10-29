import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

import Section from "./Section";
import ContactList from "./ContactList/ContactList";
import ContactEditor from "./ContactEditor/ContactEditor";
import Filter from "./Filter/Filter";
import Notification from "./Notify/Notification";

import { v4 as uuidv4 } from "uuid";

import sNotify from "./Notify/notify.module.css";
import sFilter from "./Filter/filter.module.css";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
    unic: "",
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    const UnicName = this.state.contacts.find(
      (contact) => contact.name === name
    );
    if (UnicName) {
      this.setState({ unic: "true" });
    } else {
      this.setState((prevState) => {
        return { contacts: [...prevState.contacts, contact] };
      });
    }
  };

  removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  getFilterName = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  removeNotification = () => {
    this.setState({ unic: "" });
  };

  render() {
    const { filter, contacts, unic } = this.state;
    const filterContacts = this.getFilterName();

    return (
      <Section>
        <CSSTransition
          in={unic ? true : undefined}
          classNames={sNotify}
          timeout={250}
          unmountOnExit
        >
          <Notification onNotify={this.removeNotification} />
        </CSSTransition>

        <ContactEditor onAddContact={this.addContact} />

        <>
          <CSSTransition
            in={contacts.length > 0 ? true : undefined}
            classNames={sFilter}
            timeout={250}
            unmountOnExit
          >
            <Filter value={filter} onChangeFilter={this.changeFilter} />
          </CSSTransition>

          <CSSTransition in={true} timeout={0} unmountOnExit>
            <ContactList
              contacts={filterContacts}
              onRemovecontact={this.removeContact}
            />
          </CSSTransition>
        </>
      </Section>
    );
  }
}
