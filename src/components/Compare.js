import React from 'react'
import Checkbox from 'components/Checkbox';
import Select from 'components/Select'
//import Slider from 'react-slick';

// 참고 : https://blog.logrocket.com/getting-started-with-react-select/

const items = [
    {value:1, name:'아메리카노'},
    {value:2, name:'카페라떼'},
    {value:3, name:'스무디'},
    {value:4, name:'차 (티)'},
    {value:5, name:'NON-카페인'},
    {value:6, name:'기타'},
];

class Compare extends React.Component{
      
    UNSAFE_componentWillMount = () => {
        this.selectedCheckboxes = new Set();
      }
    
      toggleCheckbox = label => {
        if (this.selectedCheckboxes.has(label)) {
          this.selectedCheckboxes.delete(label);
        } else {
          this.selectedCheckboxes.add(label);
        }
      }
    
      handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
    
        for (const checkbox of this.selectedCheckboxes) {
          console.log(checkbox, 'is selected.');
        }
      }
    
      createCheckbox = label => (
        <Checkbox
                label={label.name}
                handleCheckboxChange={this.toggleCheckbox}
                key={label.value}
            />
      )
    
      createCheckboxes = () => (
        items.map(this.createCheckbox)
      )

      render() {
        return (
            <div className="container">
            <div className="row">
              <div className="col-sm-12">
    
                <form onSubmit={this.handleFormSubmit}>
                  {this.createCheckboxes()}
    
                  <button className="btn btn-primary" type="submit">검색</button>
                </form>
                <Select></Select>
              </div>
            </div>
          </div>
        );
      }
    
}
export default Compare;