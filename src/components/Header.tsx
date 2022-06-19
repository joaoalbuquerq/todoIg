import rocket from '../assets/rocket.svg'
import styles from './Header.module.css'

export function Header(){
    return(
        <header className={styles.header}>
                <div className={styles.image}>
                    <img src={rocket} alt="Foguete azul"/>
                </div>

                <div className={styles.title}>
                    <span className={styles.letterBlue}>to</span>
                    <span className={styles.letterPurple}>do</span>
                </div>
            
        </header>
    )
}