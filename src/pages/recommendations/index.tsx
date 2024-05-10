import React from "react";
import { Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

import "./styles.scss"
import RecInfo from "../../data/recommendations.json";
import BasicInfo from "../../data/basic_info.json";
import { ReactComponent as PeopleIcon } from '../../images/people.svg';
import { ReactComponent as PersonIcon } from '../../images/person.svg';
import Globals from "../../constants/Globals";


const RecommendationPage = () => {
    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Recommendations</title>
                <link rel="canonical" href={`${Globals.APP_URL}/#/recommendations`} />
            </Helmet>
            <Row className="page">
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

                                <PersonIcon />
                            </Col>
                            <Col>

                                <h4>{item.name}</h4>
                                <p>{item.designation}</p>
                                <label className="item-des"><i>{`"${item.des}"`}</i></label>
                            </Col>
                        </Row>
                    ))}
                </Col>
            </Row>
        </React.Fragment>
    )
}


export default RecommendationPage;
