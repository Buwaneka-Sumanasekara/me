import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss"
import { ReactComponent as EduIcon } from '../../images/edu.svg';
import { ReactComponent as InfoIcon } from '../../images/info.svg';
import { ReactComponent as WorkIcon } from '../../images/work.svg';
import { ReactComponent as ProjectIcon } from '../../images/project.svg';
import { ReactComponent as People } from '../../images/people.svg';
import NavigationKeys from "../../navigation/NavigationKeys";

type NavIconIconProps = {
    to: string
    isActive?: boolean
}

const NavIcon = (props: NavIconIconProps) => {
    const { to, isActive } = props;



    return <div className={`nav-but ${isActive ? "active" : ""}`}><NavLink to={to}>
        {to === NavigationKeys.HOME && <InfoIcon />}
        {to === NavigationKeys.EDUCATION && <EduIcon />}
        {to === NavigationKeys.WORK_EXPERIENCE && <WorkIcon />}
        {to === NavigationKeys.PROJECTS && <ProjectIcon />}
        {to === NavigationKeys.RECOMMENDATIONS && <People />}
    </NavLink></div>

}

export default NavIcon
