import React from "react";
import { ReactComponent as Profile } from '../../images/profile.svg';
import NavigationKeys from "../../navigation/NavigationKeys";
import NavIcon from "../NavIcon";
import "./styles.scss"




const NavBar = () => {
    return (<div className="nav-bar">
        <NavIcon to={NavigationKeys.HOME} isActive />
        <NavIcon to={NavigationKeys.WORK_EXPERIENCE} />
        <NavIcon to={NavigationKeys.EDUCATION} />
        <NavIcon to={NavigationKeys.PROJECTS} />
        <NavIcon to={NavigationKeys.RECOMMENDATIONS} />
    </div>)
}

export default NavBar
