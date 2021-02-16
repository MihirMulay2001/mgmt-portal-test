import styles from '../../../assets/css/modules/projects.module.css'
import Navbar from '../../layout/Navbar/Navbar'
import Content from '../../layout/Content'
import GetallProjects from "./GetallProjects"
import {Route, Switch} from "react-router-dom"
import AddProject from "./AddProject"
import UpdateProject from "./UpdateProject"
import GetSpecificProject from "./GetSpecificProject"
import AddTask from "./AddTask"
import GetTasksUnderSpecificProject from './GetTasksUnderSpecificProject'



export default function Projects({path, setLogin}) {


    return (
        <>
            <Navbar active="projects" path={path} setLogin={setLogin} />
            <Content>
                <Route exact path='/dashboard/projects'>
                <GetallProjects/>

                </Route>
                <Route exact path='/dashboard/projects/addproject'>
                    <AddProject/>
                </Route>
                <Route exact path='/dashboard/projects/updateproject/:id' component={UpdateProject}/>
                <Route exact path='/dashboard/projects/:id' component={GetSpecificProject}/>
                <Route exact path='/dashboard/projects/addtask/:id' component={AddTask}/>
                <Route exact path='/dashboard/projects/getalltasks/:id' component={GetTasksUnderSpecificProject}/>



                
            </Content>
        </>
    )
}
