import React from "react";
import { Col, Row } from "react-bootstrap";
import ContactIcon from "../../components/ContactIcon";
import ProfilePic from "../../components/ProfilePic/ProfilePic";

import BasicInfo from '../../data/basic_info.json';

import "./styles.scss"


const HeaderInfo = () => {
    return <React.Fragment>
        <h2>{"Hello"}</h2>
        <div id={"header-intro-sub"}><h4>{"I'm "}</h4><h1>{BasicInfo.displayName}</h1></div>
        <div id={"header-intro-contacts"} className={"py-3"}>
            <ContactIcon type="phone" value={BasicInfo.contacts.mobile} />
            <ContactIcon type="email" value={BasicInfo.contacts.email} />
            <ContactIcon type="whatsapp" value={BasicInfo.contacts.mobile} />
            <ContactIcon type="linkdin" value={BasicInfo.contacts.linkdin} />
        </div>
    </React.Fragment>
}


const Header = () => {

    return <Row className="header">
        {/* on desktop screens */}
        <Col id={"header-intro-desktop"} className={"col-md-8 pt-5"}>
            <HeaderInfo />
        </Col>
        <Col id={"header-prof-pic"} className={"col-md-4"}>
            <ProfilePic />
        </Col>
        {/* on mobile tab screens */}
        <Col sm={12} id={"header-intro-mobile"} className={"text-center"}>
            <HeaderInfo />
        </Col>
    </Row >
}

export default Header
