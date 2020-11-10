import React from 'react';
import Selects from 'react-select';
import _, { sortBy } from 'lodash';

// const options = [
//     { value: 1, label: '카페인 함량 오름차순' },
//     { value: 2, label: '카페인 함량 내림차순' },
//     { value: 3, label: '가격 낮은 순' },
//     { value: 4, label: '칼로리 낮은 순' },
//     { value: 5, label: '당류 낮은 순' }
// ];

class Select extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // SelectFilterList : this.props.coffee,
            selectedOption: null,
            properties : [], 
            sortSize: [],
            options: [
                { value: 1, label: '카페인 함량 오름차순' },
                { value: 2, label: '카페인 함량 내림차순' },
                { value: 3, label: '가격 낮은 순' },
                { value: 4, label: '칼로리 낮은 순' },
                { value: 5, label: '당류 낮은 순' }
            ]
        }
    }

    // handleOptions = (options) => {
    //     var i = 0;
    //     while(i < this.state.options.length){
    //         options = this.state.options[i];
    //     }
    //     this.setState({ options });
    //     console.log(options)
    // }

    handleChange = (selectedOption) => {
        // console.log(this.props.coffee)
        this.setState({ selectedOption });
        console.log('Option selected:', selectedOption);
    }
    // 이벤트를 발생시켜 셀렉트
    render(){
        return (
            <Selects
            // onChange={this.handleChange}
            onChange={this.props.onChange}
            options={this.state.options}
            autoFocus={true}>
            </Selects>
        );
    }
}
  
// Comprae.js에서 데이터 처리후
// Select.js 에서 정렬해서 보여주기
  export default Select;