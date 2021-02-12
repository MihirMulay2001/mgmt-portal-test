import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import LandingPage from './components/pages/LandingPage'
import DashBoard from './components/pages/DashBoard'

export default function App() {
        return (
            <>
                <Router>
                    {
                    localStorage.getItem('Token')
                    ?
                        <Redirect to='/dashboard' />
                    : ''
                    }
                    <Switch>
                        <Route exact path='/'>
                            <LandingPage />
                        </Route>
                        <Route path='/dashboard'>
                            <DashBoard />
                        </Route>
                    </Switch>
                </Router>
            </>
        )
}
