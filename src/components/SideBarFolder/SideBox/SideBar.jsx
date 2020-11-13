import React from 'react';
import "components/SideBarFolder/SideBox/SideBar.scss";

function SideBar() {
    return (
        <>
            <input type="checkbox" id="menuicon" className="menuicon" />
            <label htmlFor="menuicon">
                <span></span>
                <span></span>
                <span></span>
            </label>
        </>
    );

}

export default SideBar;