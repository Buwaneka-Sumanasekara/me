import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Loader from '../components/Loader'
import MainLayout from '../layout/Wrapper'
import Nav from './NavigationKeys'

//lazy load the different routes
const About = React.lazy(() => import('../pages/About'))

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
        component: <About />,
    }
]



const NavigationStack = () => {

    const [routes, setRoutes] = useState([] as React.ReactElement[])

    useEffect(() => {
        const routesList = myRoutes.map((item) => <Route path={item.path} element={item.component} />)
        setRoutes(routesList)
    }, [])



    return (
        <BrowserRouter>
            <MainLayout>
                <React.Suspense fallback={<Loader />}>

                    <Routes>{routes} </Routes>

                </React.Suspense>
            </MainLayout>
        </BrowserRouter>
    )
}



export default NavigationStack
