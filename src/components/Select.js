import React from "react";
import Selects from "react-select";

const options = [
  { value: 1, label: "카페인 함량 오름차순" },
  { value: 2, label: "카페인 함량 내림차순" },
  { value: 3, label: "가격 낮은 순" },
  { value: 4, label: "칼로리 낮은 순" },
  { value: 5, label: "당류 낮은 순" },
];

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // SelectFilterList : this.props.coffee,
      selectedOption: null,
      properties: [],
      sortSize: [],
    };
  }

  // 내림차순
  compareBy_DESC(key) {
    return function (a, b) {
      var x = parseInt(a[key]);
      var y = parseInt(b[key]);

      if (x > y) return -1;
      if (x < y) return 1;
      return 0;
    };
  }

  sortBy_DESC(key) {
    let arrayCopy = [...this.props.params];
    arrayCopy.sort(this.compareBy_DESC(key));
    this.props.submit(arrayCopy);
  }

  // 오름차순
  compareBy_ASC(key) {
    return function (a, b) {
      var x = parseInt(a[key]);
      var y = parseInt(b[key]);

      if (x < y) return -1;
      if (x > y) return 1;
      return 0;
    };
  }

  sortBy_ASC(key) {
    let arrayCopy = [...this.props.params];
    arrayCopy.sort(this.compareBy_ASC(key));
    this.props.submit(arrayCopy);
  }

  handleChange = (selectedOption) => {
    // console.log(this.props.coffee)
    this.setState({ selectedOption });
    //console.log("Option selected:", selectedOption);
    //console.log(selectedOption['value']);
    if(selectedOption['value'] === 1){
        this.sortBy_ASC("caffeine")
    }
    else if(selectedOption['value'] === 2){
        this.sortBy_DESC("caffeine")
    }
    else if(selectedOption['value'] === 3){
        this.sortBy_ASC("price")
    }
    else if(selectedOption['value'] === 4){
        this.sortBy_ASC("kcal")
    }
    else if(selectedOption['value'] === 5){
        this.sortBy_ASC("sugar")
    }
       
  };
  // 이벤트를 발생시켜 셀렉트
  render() {
    return (
      <Selects
        // onChange={this.handleChange}
        onChange={this.handleChange}
        options={options}
        autoFocus={true}
      ></Selects>
    );
  }
}

// Comprae.js에서 데이터 처리후
// Select.js 에서 정렬해서 보여주기
export default Select;
