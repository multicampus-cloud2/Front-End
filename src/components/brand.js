import React from 'react';
import images from 'img/brand';
import 'css/compare.css';
import 'img/coffeebean.png';


const imageArray = [images.starbucks, images.hollys, images.tomntoms, images.ediya, images.coffeebean, images.twosome, images.angelinus, images.bbaek]

class Brand extends React.Component {
    state = {
        brand_eng: '',
        brand_kor: '',
        image: this.props.image * 1,
        isChecked: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.submit(this.state.brand_eng, this.state.isChecked, this.props.index);
    }

    handleFilter = function (eng, kor, chk) {
        this.setState({
            brand_eng: eng,
            brand_kor: kor,
            isChecked: !chk,
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="categories__item__whole">
                    <div className="categories__item">
                        <div className="category__item_hidden" style={{ backgroundColor: this.props.checked === 0 ? "transparent" : "#888888" }}>
                            <input type="submit" value="" className="input_hidden" onClick={() =>
                                this.handleFilter(this.props.name_eng, this.props.name_kor, this.props.checked, this.props.index)}
                            />
                            <div className="categories__item__icon">
                                <div>
                                    <img src={imageArray[this.state.image]} alt="" />
                                </div>
                                <h5>{this.props.name_eng}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default Brand;