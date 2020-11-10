import React from 'react';
import images from 'img/brand';
import 'css/compare.css';
import 'img/coffeebean.png';


const imageArray = [images.all, images.starbucks, images.hollys, images.tomntoms, images.ediya, images.coffeebean, images.twosome, images.angelinus, images.bbaek]

class Brand extends React.Component {
    state = {
        brand_eng: '',
        brand_kor: '',
        image: this.props.image * 1,
        isChecked: false
    }


    // submit의 이벤트 처리를 통해 33번 째 줄에서 부모에게 값을 전달해줌
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.submit(this.state.brand_eng, this.state.brand_kor, this.state.isChecked);
    }

    // 버튼 클릭 시 함수 호출하면서 state의 변수를 파라미터값으로 지정해줌
    handleFilter = function (eng, kor) {
        this.setState(({ isChecked }) => (
            {
                brand_eng: eng,
                brand_kor: kor,
                isChecked: !isChecked,
            }
        ));
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="categories__item__whole">
                    <div className="categories__item">
                        <input type="submit" value="" className="input_hidden" onClick={() => this.handleFilter(this.props.name_eng, this.props.name_kor)}  />
                        <div className="categories__item__icon">
                            <div>
                                <img src={imageArray[this.state.image]}/>
                            </div>
                            <h5>{this.props.name_eng}</h5>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default Brand;