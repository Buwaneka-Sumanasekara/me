import React from "react";
import { Col, Row } from "react-bootstrap";
import "./styles.scss"
import BasicInfo from "../../data/basic_info.json";

const AboutPage = () => {
    return (<Row className="about">
        <Col md={2} className={"d-none d-md-block d-lg-block info-left"}>
            <p className="fs-4">Who</p>
            <p className="fs-3">AM</p>
            <p className="fs-1">I</p>
        </Col>
        <Col md={6} >
            <p>{BasicInfo.about.para1}</p>

        </Col>
    </Row>)
}


export default AboutPage;
