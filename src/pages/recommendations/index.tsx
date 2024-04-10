import React from "react";
import { Image, Col, Row } from "react-bootstrap";
import "./styles.scss"
import RecInfo from "../../data/recommendations.json";
import BasicInfo from "../../data/basic_info.json";
import { ReactComponent as PeopleIcon } from '../../images/people.svg';
import { ReactComponent as PersonIcon } from '../../images/person.svg';
const RecommendationPage = () => {
    return (<Row className="page">
        <Col md={2} className={"d-none d-md-block d-lg-block info-left text-center"}>
            <PeopleIcon />
        </Col>
        <Col md={6}>
            <Row>
                <Col>
                    <p>Note: Grabbed from my Linkdin account, You can check more details from <a target={"_blank"} href={`${BasicInfo.contacts.linkdin}/details/recommendations/`} rel="noreferrer">here</a></p>
                </Col>
            </Row>
            {RecInfo.map((item, index) => (
                <Row className="pb-5 item">
                     <Col md={2} className="text-center">

                        <PersonIcon/>
                    </Col>    
                    <Col>
                   
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
