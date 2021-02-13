import styles from '../../../assets/css/modules/Content.module.css'

export default function index({children}) {
    return (
        <>
            <div id="content" className={styles.container}>
                {children}
            </div>
            <div id="popUp" className={styles.popup}>
                <span id="closepopup">&times</span>
                <h2> Do you want to logout ?</h2>
                <button id="logoutButton">Logout</button>
            </div>

        </>
        
    )
}
