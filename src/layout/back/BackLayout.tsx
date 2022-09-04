import React from "react";
import Container from 'react-bootstrap/Container';
import { ReactComponent as EclipseIcon } from '../../images/eclipse-group.svg';
import "./styles.scss"

type MainLayoutProps = {
    children: React.ReactNode
}

const MainLayout = (props: MainLayoutProps) => {

    const { children } = props

    return <Container >
        {children}

        <div className="img-background">
            <EclipseIcon className={"img-eclipse-1"} />
        </div>
    </Container>
}

export default MainLayout
