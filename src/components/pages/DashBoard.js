
import React, { Component } from 'react'
import {Route, Switch, useRouteMatch, Redirect} from 'react-router-dom'
import Projects from '../pages/projects/Projects'
import Meetings from '../pages/meetings/Meetings'


export default function Dashboard({setLogin}) {

    const match = useRouteMatch()
    return (
        <>
            <Switch>
                <Route exact path = {`/dashboard`}>
                    <Redirect to ='/dashboard/projects' />
                </Route>
                <Route path = {`/dashboard/projects`}>
                    <Projects path={match.url} setLogin={setLogin} />
                </Route>
                <Route path={`/dashboard/meetings`}>
                    <Meetings path={match.url} setLogin={setLogin}/>
                </Route>
            </Switch>
        </>
    )
}
