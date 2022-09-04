import React from "react";
import { Col, Row } from "react-bootstrap";
import "./styles.scss"
import BasicInfo from "../../data/basic_info.json";
import { ReactComponent as InfoIcon } from '../../images/info.svg';
const AboutPage = () => {
    return (<Row className="about">
        <Col md={2} className={"d-none d-md-block d-lg-block info-left text-center"}>
            <InfoIcon />
        </Col>
        <Col md={6} >
            <p>{BasicInfo.about.para1}</p>
        </Col>
    </Row>)
}


export default AboutPage;
