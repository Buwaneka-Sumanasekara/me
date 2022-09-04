import React from "react";
import { Col, Row } from "react-bootstrap";
import "./styles.scss"
import WorkInfo from "../../data/work_experince.json"
import { ReactComponent as WorkIcon } from '../../images/work.svg';

const WorkPage = () => {
    return (<Row className="about">
        <Col md={2} className={"d-none d-md-block d-lg-block info-left text-center"}>
            <WorkIcon />
        </Col>
        <Col md={6} >


        </Col>
    </Row>)
}


export default WorkPage;
