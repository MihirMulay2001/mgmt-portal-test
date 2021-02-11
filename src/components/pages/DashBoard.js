
import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import {Route, Switch, useRouteMatch, Redirect} from 'react-router-dom'
import Projects from '../pages/projects/Projects'
import Meetings from '../pages/meetings/Meetings'


export default function Dashboard() {
    const match = useRouteMatch()
    return (
        <>
            <Switch>
                <Route exact path = {`/dashboard`}>
                    <Redirect to ='dashboard/projects' />
                </Route>
                <Route path = {`/dashboard/projects`}>
                    <Projects path={match.url} />
                </Route>
                <Route path={`/dashboard/meetings`}>
                    <Meetings path={match.url} />
                </Route>
            </Switch>

        </>
    )
}
