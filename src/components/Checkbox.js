import React from 'react';
import PropTypes from 'prop-types';

function Checkbox ({label, value, isChecked, handleCheckboxChange }) {

      return (
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              value={value}
              checked={isChecked}
              onChange={ (event) => handleCheckboxChange(event.target.value)}
            />
            {label}
          </label>
        </div>
      );
  }
  
  Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    isChecked: PropTypes.bool.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
  };
  
  export default Checkbox;