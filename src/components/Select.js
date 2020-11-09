import React from 'react';
import Selects from 'react-select';
import _, { sortBy } from 'lodash';

const options = [
    { value: 1, label: '카페인 함량 오름차순' },
    { value: 2, label: '카페인 함량 내림차순' },
    { value: 3, label: '가격 낮은 순' },
    { value: 4, label: '칼로리 낮은 순' } 
];

class Select extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // SelectFilterList : this.props.coffee,
            selectedOption: null,
            properties : [], 
            sortSize: []
        }
    }

    test = (sortSize) => {
        this.setState({ sortSize });
        console.log(sortSize);
    }

    handleChange = (selectedOption) => {
        // console.log(this.props.coffee)
        this.setState({ selectedOption });
        console.log('Option selected:', selectedOption);
    }
    
    render(){
        const { size } = this.state.sortSize;
        this.state.sortSize = []
        var SelectFilterList = this.props.coffee
        SelectFilterList.map((product) => (
            this.state.sortSize.push(product['size']),
            this.state.sortSize.sort((a, b) => a - b)
        ));
        console.log(this.state.sortSize)
        // SelectFilterList.map(product)
        return (
            <Selects
            onChange={this.handleChange}
            options={options}
            autoFocus={true}>
            </Selects>
        );
    }
}
  

  export default Select;