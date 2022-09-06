import React from "react";
import { Badge, Col, Row } from "react-bootstrap";
import "./styles.scss"
import BasicInfo from "../../data/basic_info.json";
import { ReactComponent as PeopleIcon } from '../../images/people.svg';
const RecommendationPage = () => {
    return (<Row className="page">
        <Col md={2} className={"d-none d-md-block d-lg-block info-left text-center"}>
            <PeopleIcon />
        </Col>
        <Col md={6} >

        </Col>
    </Row>)
}


export default RecommendationPage;
