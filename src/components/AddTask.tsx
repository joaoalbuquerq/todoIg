import {PlusCircle} from 'phosphor-react'
import styles from './AddTask.module.css'

export function AddTask(){
    return(
        <form>
            <input 
                className={styles.addTaskBar}
                type="text" 
                placeholder='Adicione uma nova tarefa'/>
            <button className={styles.buttonBlue}>
                Criar
                <PlusCircle size={20}/>
            </button>
        </form>
    )
}