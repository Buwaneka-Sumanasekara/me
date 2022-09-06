import React from "react";
import { Image, Col, Row } from "react-bootstrap";
import "./styles.scss"
import RecInfo from "../../data/recommendations.json";
import BasicInfo from "../../data/basic_info.json";
import { ReactComponent as PeopleIcon } from '../../images/people.svg';
const RecommendationPage = () => {
    return (<Row className="page">
        <Col md={2} className={"d-none d-md-block d-lg-block info-left text-center"}>
            <PeopleIcon />
        </Col>
        <Col md={6}>
            <Row>
                <Col>
                    <p>Note: Grabbed from my Linkdin account, You can check more details from <a target={"_blank"} href={`${BasicInfo.contacts.linkdin}/details/recommendations/`}>here</a></p>
                </Col>
            </Row>
            {RecInfo.map((item, index) => (
                <Row className="pb-5 item">
                    <Col md={2} xs={4}><Image rounded={true} roundedCircle={true} src={item.image} /></Col>
                    <Col md={10} xs={8}>
                        <h4>{item.name}</h4>
                        <p>{item.designation}</p>
                        <label className="item-des"><i>{`"${item.des}"`}</i></label>
                    </Col>
                </Row>
            ))}
        </Col>
    </Row>)
}


export default RecommendationPage;
