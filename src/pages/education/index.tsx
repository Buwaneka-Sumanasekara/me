import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";


import EduInfo from "../../data/education.json"
import { ReactComponent as EducationIcon } from '../../images/edu.svg';
import Steps from "../../components/Steps";
import Globals from "../../constants/Globals";

import "./styles.scss"

const EducationPage = () => {
    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Education</title>
                <link rel="canonical" href={`${Globals.APP_URL}/#/education`} />
            </Helmet>
            <Row className="page">
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
                                    <div className="pt-2"><a target="_blank" href={value.link} rel="noreferrer" ><Button variant="outline-primary" >{`Show credentials `}</Button></a> </div>
                                )}

                            </Steps.Item>
                        ))}

                    </Steps>

                </Col>
            </Row>
        </React.Fragment>
    )


}


export default EducationPage;
