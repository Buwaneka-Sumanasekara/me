import React from "react";
import { Col, Row } from "react-bootstrap";
import ContactList from "../../components/ContactList";
import NavBar from "../../components/NavBar";
import ProfilePic from "../../components/ProfilePic/ProfilePic";

import BasicInfo from "../../data/basic_info.json";

import "./styles.scss";

const HeaderContactInfo = () => {
  return (
    <div>
      <h2>{"Hello"}</h2>
      <div id={"header-intro-sub"}>
        <h4>{"I'm "}</h4>
        <h1>{BasicInfo.displayName}</h1>
      </div>
      <ContactList showOnMobile={false} />
    </div>
  );
};

const HeaderInfo = () => {
  return (
    <div className="container">
      <Row>
        <Col className="col-md-10 my-auto">
          <HeaderContactInfo />
        </Col>
        <Col className="col-md-2">
          <ProfilePic />
        </Col>
      </Row>
      <Row>
        <Col>
          <NavBar />
        </Col>
      </Row>
    </div>
  );
};

const Header = () => {
  return (
    <Row className="header">
      {/* on desktop screens */}
      <Col id={"header-intro-desktop"} className={"col-md-12 pt-4"}>
        <HeaderInfo />
      </Col>

      {/* on mobile tab screens */}
      <Col
        sm={12}
        id={"header-intro-mobile"}
        className={"text-center mt-3"}
      >
        <HeaderContactInfo/>
        <ProfilePic />
        <NavBar />
      </Col>
    </Row>
  );
};

export default Header;
