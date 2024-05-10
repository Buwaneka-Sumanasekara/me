import React from "react";
import { Badge, Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";


import BasicInfo from "../../data/basic_info.json";
import { ReactComponent as InfoIcon } from '../../images/info.svg';
import ContactList from "../../components/ContactList";
import Globals from "../../constants/Globals";

import "./styles.scss"


const AboutPage = () => {
    return (
        <React.Fragment>
        <Helmet>
            <meta charSet="utf-8" />
            <title>About</title>
            <link rel="canonical" href={`${Globals.APP_URL}/#/about`} />
        </Helmet>
    <Row className="about">
        <Col md={2} className={"d-none d-md-block d-lg-block info-left text-center"}>
            <InfoIcon />
        </Col>
        <Col md={6} >
            <p>{BasicInfo.about.para1}</p>
            <p>{BasicInfo.about.para2}</p>
            <div>
                {BasicInfo.about.tech.map((item, index) => (
                    <Badge bg="primary">{item}</Badge>
                ))}

                <ContactList showOnMobile={true} />
            </div>
        </Col>
    </Row>
    </React.Fragment>
    )
}


export default AboutPage;
