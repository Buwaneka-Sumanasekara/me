import React from "react";
import { Badge, Col, Row } from "react-bootstrap";
import "./styles.scss"
import BasicInfo from "../../data/basic_info.json";
import { ReactComponent as InfoIcon } from '../../images/info.svg';
import ContactList from "../../components/ContactList";
const AboutPage = () => {
    return (<Row className="about">
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
    </Row>)
}


export default AboutPage;
