import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import "./styles.scss"
import ProjectInfo from "../../data/projects.json"
import { ReactComponent as ProjectIcon } from '../../images/project.svg';


import Button from 'react-bootstrap/Button';
import FilterButtonIcon from "../../components/FilterButtons";
import ContactIcon from "../../components/ContactIcon";
import Globals from "../../constants/Globals";



enum Filter {
    mobile = "mobile",
    web = "web",
    desktop = "desktop",
    plugin = "plugin"
}

const ProjectPage = () => {

    const [type, setType] = useState<Filter>(Filter.mobile);

    const filtered = ProjectInfo.filter(v => v.type === type);

    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Projects</title>
                <link rel="canonical" href={`${Globals.APP_URL}/#/projects`} />
            </Helmet>
            <Row className="page product-page">
                <Col md={2} className={"d-none d-md-block d-lg-block info-left text-center"}>
                    <ProjectIcon />
                </Col>
                <Col md={6} className={"px-5"}>
                    <Row className={"pt-4"}>
                        <Col className="d-flex justify-content-center pb-5">
                            <div className="menu-buttons">
                                <FilterButtonIcon icon="mobile" onPress={() => setType(Filter.mobile)} active={type === Filter.mobile} />
                                <FilterButtonIcon icon="web" onPress={() => setType(Filter.web)} active={type === Filter.web} />
                                <FilterButtonIcon icon="desktop" onPress={() => setType(Filter.desktop)} active={type === Filter.desktop} />
                                <FilterButtonIcon icon="plugin" onPress={() => setType(Filter.plugin)} active={type === Filter.plugin} />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {filtered.map((item, index) => (
                                <div className="item">
                                    <Row>
                                        <Col sm={8}>
                                            <h3>{item.title}</h3>
                                            <label><strong>{item.subtitle}</strong></label>
                                        </Col>
                                        <Col sm={4}>
                                            {item.link && (
                                                <ContactIcon type="link" value={item.link} newTab />
                                            )}

                                        </Col>
                                    </Row>
                                    <label className="item-tag-caption">{`Key Technologies / Frameworks used:`}</label>
                                    <div className={"item-tags"}>
                                        {item.tech.map((item: string, index) => (
                                            <Button variant="primary" size="sm">{item}</Button>
                                        ))}
                                    </div>
                                    <p>
                                        {item.des}
                                    </p>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </React.Fragment>
    )
}


export default ProjectPage;
