import React from "react";
import { Col, Row, Button, Badge } from "react-bootstrap";
import "./styles.scss"
import EduInfo from "../../data/education.json"
import { ReactComponent as EducationIcon } from '../../images/edu.svg';
import Steps from "../../components/Steps";
import { Link } from "react-router-dom";

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
                        {value.link && (
                            <div className="pt-2"><a target="_blank" href={value.link} ><Button variant="outline-primary" >{`Show credentials `}</Button></a> </div>
                        )}

                    </Steps.Item>
                ))}

            </Steps>

        </Col>
    </Row>)
}


export default EducationPage;
