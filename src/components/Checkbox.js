import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {

    constructor (props) {
        super(props);
        this.state = {
            isChecked: props.isChecked
        }
    }
  
    toggleCheckboxChange = () => {
      const { handleCheckboxChange, value } = this.props;
  
      this.setState(({ isChecked }) => (
        {
          isChecked: !isChecked,
        }
      ));
  
      handleCheckboxChange(value);
    }
  
    render() {
      const { label, value } = this.props;
      const { isChecked } = this.state;
  
      return (
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              value={value}
              checked={isChecked}
              onChange={this.toggleCheckboxChange}
            />
  
            {label}
          </label>
        </div>
      );
    }
  }
  
  Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
  };
  
  export default Checkbox;