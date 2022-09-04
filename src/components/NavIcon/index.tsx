import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss"
import { ReactComponent as EmailIcon } from '../../images/email.svg';
import { ReactComponent as LinkdinIcon } from '../../images/linkdin.svg';
import { ReactComponent as PhoneIcon } from '../../images/phone.svg';
import { ReactComponent as Whatsapp } from '../../images/whatsapp.svg';
import { ReactComponent as Link } from '../../images/link.svg';
import NavigationKeys from "../../navigation/NavigationKeys";

type NavIconIconProps = {
    to: string
    isActive?: boolean
}

const NavIcon = (props: NavIconIconProps) => {
    const { to, isActive } = props;



    return <div className={`nav-but ${isActive ? "active" : ""}`}><NavLink to={to}>
        {to === NavigationKeys.HOME && <EmailIcon />}
        {to === NavigationKeys.EDUCATION && <EmailIcon />}
        {to === NavigationKeys.WORK_EXPERIENCE && <EmailIcon />}
        {to === NavigationKeys.PROJECTS && <EmailIcon />}
        {to === NavigationKeys.RECOMMENDATIONS && <EmailIcon />}
    </NavLink></div>

}

export default NavIcon
