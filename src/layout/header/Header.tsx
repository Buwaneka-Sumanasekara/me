import React from "react";
import { Col, Row } from "react-bootstrap";
import ContactList from "../../components/ContactList";
import NavBar from "../../components/NavBar";
import ProfilePic from "../../components/ProfilePic/ProfilePic";

import BasicInfo from '../../data/basic_info.json';

import "./styles.scss"


const HeaderInfo = () => {
    return <div className="">
        <h2>{"Hello"}</h2>
        <div id={"header-intro-sub"}><h4>{"I'm "}</h4><h1>{BasicInfo.displayName}</h1></div>
        <ContactList showOnMobile={false} />
        <NavBar />
    </div>
}


const Header = () => {

    return <Row className="header">
        {/* on desktop screens */}
        <Col id={"header-intro-desktop"} className={"col-md-10 pt-5"}>
             <HeaderInfo />    
        </Col>
        <Col id={"header-prof-pic"} className={"col-md-2"}>
            <ProfilePic />
        </Col>
        {/* on mobile tab screens */}
        <Col sm={12} id={"header-intro-mobile"} className={"text-center mt-3"}>
            <HeaderInfo />
        </Col>
    </Row >
}

export default Header
