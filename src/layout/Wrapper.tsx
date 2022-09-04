import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "./header/Header";
import Footer from "./Footer";
import Layout from "./back/BackLayout";

type MainLayoutProps = {
    children: React.ReactNode
}

const MainLayout = (props: MainLayoutProps) => {

    const { children } = props

    return <Layout>
        <Header />
        <Row>
            <Col>
                {children}
            </Col>
        </Row>
        <Footer />
    </Layout>
}

export default MainLayout
