import React from 'react';
import Selects from 'react-select';

const options = [
    { value: 1, label: '카페인 함량 오름차순' },
    { value: 2, label: '카페인 함량 내림차순' },
    { value: 3, label: '가격 낮은 순' },
    { value: 4, label: '칼로리 낮은 순' } 
  ];


class Select extends React.Component {
    state = {
        selectedOption: null,
    }
    handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
    }

    render(){
        //const { selectedOption } = this.state;
        
        return (
            <Selects onChange={this.handleChange}
            options={options}
            autoFocus={true} />
        );
    }
}
  
  export default Select;