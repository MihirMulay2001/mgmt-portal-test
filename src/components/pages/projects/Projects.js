import styles from '../../../assets/css/modules/projects.module.css'
import Navbar from '../../Navbar/Navbar'
import Content from '../../layout/Content'

export default function Projects({path, setLogin}) {
    return (
        <>
            <Navbar active="projects" path={path} setLogin={setLogin} />
            <Content>
                projects
            </Content>
        </>
    )
}
