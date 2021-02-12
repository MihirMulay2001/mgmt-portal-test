import {Route, Switch, Redirect} from 'react-router-dom'
import LandingPage from './components/pages/LandingPage'
import DashBoard from './components/pages/DashBoard'
import {useState} from 'react'

export default function App() {
    const [isLoggedIn, setLogin] = useState(false);
    console.log(isLoggedIn);
    return (
        <>
            {
                !isLoggedIn 
                ? <Redirect to ='/' />
                : ''
            }
            {
                localStorage.getItem('Token')
                ? <Redirect to='/dashboard' />
                :''
            }
            <Switch>
                <Route exact path='/'>
                    <LandingPage setLogin ={setLogin} />
                </Route>
                <Route path='/dashboard'>
                    <DashBoard setLogin ={setLogin} />
                </Route>
            </Switch>
        </>
    )
}
