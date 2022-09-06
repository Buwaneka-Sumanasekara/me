import React from "react";
import { Col, Row } from "react-bootstrap";
import "./styles.scss"
import WorkInfo from "../../data/work_experince.json"
import { ReactComponent as WorkIcon } from '../../images/work.svg';
import Steps from "../../components/Steps";

const WorkPage = () => {
    return (<Row className="page">
        <Col md={2} className={"d-none d-md-block d-lg-block info-left text-center"}>
            <WorkIcon />
        </Col>
        <Col md={6} className={"px-5"}>
            <Steps direction="vertical">
                {WorkInfo.map((value, index) => (
                    <Steps.Item key={`work_${index}`}>

                        <h3>{value.company}</h3>

                        {value.designations?.map((value, index) => (
                            <div className="work-sub-steps">
                                <Steps direction="vertical" theme={"secondary"}>
                                    <Steps.Item key={`work_${index}`}>
                                        <strong><p>{value.title}</p></strong>
                                        <label>{value.from} - {value.to}</label>
                                    </Steps.Item>
                                </Steps>

                            </div>

                        ))}


                    </Steps.Item>
                ))}

            </Steps>

        </Col>
    </Row>)
}


export default WorkPage;
