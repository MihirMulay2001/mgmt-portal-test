import {Route, Redirect} from 'react-router-dom'
import LandingPage from './components/pages/LandingPage'
import DashBoard from './components/pages/DashBoard'
import {useState} from 'react'

export default function App() {
    const [isLoggedIn, setLogin] = useState(localStorage.getItem('Token')?true:false);
    if(isLoggedIn){
        return(
            <>
                <Route path='/dashboard'>
                    <DashBoard setLogin ={setLogin}/>
                </Route>
                <Redirect to='/dashboard'/>
            </>
        )
    }
    else{
        return(
             <>
                <Route exact path='/'>
                        <LandingPage setLogin ={setLogin} />
                </Route>
                <Redirect to='/' />
            </>
        )
       
    }
}
