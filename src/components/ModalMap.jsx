/*global kakao */
import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const brand_map = new Map();

brand_map.set('starbucks','스타벅스');
brand_map.set("hollys",'할리스');
brand_map.set("tomntoms",'탐앤탐스');
brand_map.set("ediya",'이디야');
brand_map.set("coffeebean",'커피빈');
brand_map.set("twosome",'투썸플레이스');
brand_map.set("angelinus",'엔젤리너스');
brand_map.set("paikdabang",'빽다방');


class ModalMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nestedModal: false,
    };

    this.toggleNested = this.toggleNested.bind(this);
  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false,
    });

    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=fa0195471345c1fad5888fc9a2befb9d&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
        let container = document.getElementById("map");
        let options = {
          center: new kakao.maps.LatLng(37.506502, 127.053617),
          level: 5
        };

        //지도를 생성합니다.
        let map = new window.kakao.maps.Map(container, options);
        
        // HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
        if (navigator.geolocation) {
            let brand_eng = this.props.brand;
            let brand = brand_map.get(brand_eng);
            //console.log(brand_eng,brand);
          // GeoLocation을 이용해서 접속 위치를 얻어옵니다
          navigator.geolocation.getCurrentPosition(function(position) {
              
              var lat = position.coords.latitude, // 위도
                  lon = position.coords.longitude; // 경도
              
              var locPosition = new kakao.maps.LatLng(lat, lon) // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
              
              // 마커와 인포윈도우를 표시합니다
              //displayMarker(locPosition, message);
             
              findPlace(brand,locPosition);
            
              // 지도 중심좌표를 접속위치로 변경합니다
              map.setCenter(locPosition); 
              
            });
          
        }

        function findPlace(brand,locPosition){
          //console.log('히얼',brand, locPosition);
          // 장소 검색 객체를 생성합니다
          let ps = new kakao.maps.services.Places();
          
          // 키워드로 장소를 검색합니다
          ps.keywordSearch(brand, placesSearchCB,{
            // Map 객체를 지정하지 않았으므로 좌표객체를 생성하여 넘겨준다.
            location: locPosition});  
        
          // 키워드 검색 완료 시 호출되는 콜백함수 입니다
          function placesSearchCB(data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
              // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
              // LatLngBounds 객체에 좌표를 추가합니다
              //console.log(data);
              var bounds = new kakao.maps.LatLngBounds();

              for (var i = 0; i < data.length; i++) {
                displayMarker(data[i]);
                bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
              }

              // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
              //map.setBounds(bounds);
              }
            }
        }


        // 지도에 마커를 표시하는 함수입니다
        function displayMarker(place) {
          // 마커를 생성하고 지도에 표시합니다
          var marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(place.y, place.x),
          });

          // 마커에 클릭이벤트를 등록합니다
          kakao.maps.event.addListener(marker, "click", function () {
            // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
            infowindow.setContent(
              '<div style="padding:5px;font-size:12px;">' +
              place.place_name +
              "</div>"
            );
            infowindow.open(map, marker);
          });
        }
      });
    };
  }

  render() {
    return (
      <div>
        <Button
          color="success"
          onClick={this.toggleNested}
          style={{ fontSize: "1.2vmin" }}
        >
          가장 가까운 매장 찾기
          </Button>
        <Modal
          size={"md"}
          isOpen={this.state.nestedModal}
          toggle={this.toggleNested}
        >
          <ModalHeader>주변 {brand_map.get(this.props.brand)} 매장</ModalHeader>
          <ModalBody style={{ border: "1px solid orange" }}>
            <div
              id="map"
              style={{ margin: "auto",width:'95%', height: "350px" }}
            ></div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleNested}>
              닫기
              </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

}

export default ModalMap;