import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ContactListItem from './ContactListItem';

import sTransition from './ContactList.module.css';

const ContactList = ({ contacts, onRemovecontact }) => {
  const check = contacts.length > 0 ? true : undefined;
  return (
    <TransitionGroup in={{ check }.toString()} component="ul" className="List">
      {contacts.map(({ id, name, number }) => (
        <CSSTransition
          in={true}
          key={id}
          classNames={sTransition}
          timeout={250}
        >
          <ContactListItem
            name={name}
            number={number}
            onRemove={() => onRemovecontact(id)}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onRemovecontact: PropTypes.func.isRequired,
};

export default ContactList;
