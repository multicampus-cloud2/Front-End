import react from 'react';
import aboutcoffee from 'img/getting_coffee.png';

const InformService = () => {
    return (
        <div style={{ marginTop: "3%"}}>
            <div style={{ marginTop: "5%", float: "left" }}>
                <p className="title">CACAO:</p>
                <p className="title_sub">Cafe Caffeine Open</p>
                <p>카카오는 각자 다른 선호도에 맞게 음료를 골라 먹을 수 있도록</p>
                <p>같은 음료라도 카페마다 다른 영양 정보를 조회하고 비교할 수 있는 서비스입니다.</p>
            </div>
            <div>
                <img src={aboutcoffee} alt="" style={{width: "500px", marginLeft: "5%"}} />
            </div>
            <div>
            </div>
        </div>
    )
}

export default InformService;