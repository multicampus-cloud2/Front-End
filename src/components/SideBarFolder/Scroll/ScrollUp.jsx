import React from 'react';
import "components/SideBarFolder/Scroll/ScrollUp.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
function ScrollUp() {

    // 스크롤 위로 올리기
    const scroll = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className="scrollup" onClick={ scroll } >
            <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>Top
        </div>
    );
}

export default ScrollUp;