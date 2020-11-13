// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import 'css/compare.css';

// // 참고 :  http://react.tips/checkboxes-in-react/


// class Checkbox extends Component {
//   state = {
//     isChecked: false,
//   }

//   toggleCheckboxChange = () => {
//     const { handleCheckboxChange, label } = this.props;
//     this.setState(({ isChecked }) => (
//       {
//         isChecked: !isChecked,
//       }
//     ));

//     handleCheckboxChange(label);
//   }
  

//   render() {
//     const { label } = this.props;
//     const { isChecked } = this.state;
//     const { isAllChecked } = this.props;
  
//     return (
//       <div className="checkbox">
//         <label>
//           <input
//             type="checkbox"
//             value={label}
//             checked={!isAllChecked}
//             onChange={this.toggleCheckboxChange}
//             />
//           {label}
//         </label>
//       </div>
//     );
//   }
// }

// Checkbox.propTypes = {
//   label: PropTypes.string.isRequired,
//   handleCheckboxChange: PropTypes.func.isRequired,
//   isAllChecked: PropTypes.bool.isRequired,
// };
  
  
// export default Checkbox;