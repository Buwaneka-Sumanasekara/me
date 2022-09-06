import React from "react";
import { Col, Row } from "react-bootstrap";
import "./styles.scss"
import EduInfo from "../../data/education.json"
import { ReactComponent as EducationIcon } from '../../images/edu.svg';
import Steps from "../../components/Steps";

const EducationPage = () => {
    return (<Row className="page">
        <Col md={2} className={"d-none d-md-block d-lg-block info-left text-center"}>
            <EducationIcon />
        </Col>
        <Col md={6} className={"px-5"}>
            <Steps direction="vertical">
                {EduInfo.map((value, index) => (
                    <Steps.Item key={`work_${index}`}>
                        <h3>{value.qualification}</h3>
                        <strong>{value.award}</strong>
                        <p>{value.name}</p>
                        <label>{value.year}</label>
                    </Steps.Item>
                ))}

            </Steps>

        </Col>
    </Row>)
}


export default EducationPage;
