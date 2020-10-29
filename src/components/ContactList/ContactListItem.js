import React from "react";
import PropTypes from "prop-types";

import s from "./ContactList.module.css";

const ContactListItem = ({ name, number, onRemove }) => (
  <li className={s.listItem}>
    <span>
      {name} {number}
    </span>
    <button type="button" className="deleteBtn" onClick={onRemove}>
      x
    </button>
  </li>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactListItem;
