import React from "react";
import PropTypes from "prop-types";

export default function Filter({ value, onChangeFilter }) {
  return (
    <div className="find">
      <span>Find contacts by name</span>
      <input
        type="text"
        value={value}
        onChange={({ target }) => onChangeFilter(target.value)}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
