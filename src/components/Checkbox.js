import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 참고 :  http://react.tips/checkboxes-in-react/


class Checkbox extends Component {
  state = {
    isChecked: false,
  }

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;
    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));

    handleCheckboxChange(label);
  }
  

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;
    const style={
        float: 'left'
    };

    return (
      <div className="checkbox" style={style}>
        <label>
          <input
            type="checkbox"
            value={label}
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