import styles from '../../assets/styles/Home/CarForm.module.scss'
import {useState} from "react";
const CreateCarForm = () =>{
    const [name, setName] = useState('')
    const createCar = () =>{
      console.log(name)
    }
     return(
        <form className={styles.form}>
            <input className={styles.input} placeholder='Name' onChange={e => setName(e.target.value)} value={name}/>
            <input className={styles.input} placeholder='Price'/>
            <input className={styles.input} placeholder='Image'/>

            <button>Create</button>
        </form>
    )
}

export default CreateCarForm
