import styles from '../../assets/styles/Home/CarForm.module.scss'
const CarForm = () =>{
    return(
        <form className={styles.form}>
            <input className={styles.input} placeholder='Name'/>
        </form>
    )
}

export default CarForm