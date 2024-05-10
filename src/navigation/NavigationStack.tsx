import React, { useEffect, useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Loader from '../components/Loader'
import MainLayout from '../layout/Wrapper'
import Nav from './NavigationKeys'

//lazy load the different routes
const About = React.lazy(() => import('../pages/about'))
const Work = React.lazy(() => import('../pages/work'))
const Projects = React.lazy(() => import('../pages/projects'))
const Education = React.lazy(() => import('../pages/education'))
const Recommendation = React.lazy(() => import('../pages/recommendations'))

type RouteProps = {
    path?: string
    component: JSX.Element
    sub?: JSX.Element
}

//Only add to this list when needed to add a new page
const myRoutes: RouteProps[] = [
    {
        path: Nav.HOME,
        component: <About />,
    },
    {
        path: Nav.WORK_EXPERIENCE,
        component: <Work />,
    },
    {
        path: Nav.EDUCATION,
        component: <Education />,
    },
    {
        path: Nav.PROJECTS,
        component: <Projects />,
    },
    {
        path: Nav.RECOMMENDATIONS,
        component: <Recommendation />,
    }
]



const NavigationStack = () => {

    const [routes, setRoutes] = useState([] as React.ReactElement[])

    useEffect(() => {
        const routesList = myRoutes.map((item) => <Route path={item.path} element={item.component} />)
        setRoutes(routesList)
    }, [])



    return (
        <HashRouter>
            <MainLayout>
                <React.Suspense fallback={<Loader />}>
                    <Routes>{routes} </Routes>
                </React.Suspense>
            </MainLayout>
        </HashRouter>
    )
}



export default NavigationStack
