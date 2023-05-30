import styles from "../../assets/styles/Home/Home.module.scss";

const CarItem = ({car}) =>{
    return(
    <div className={styles.item}>
        <div className={styles.box}>
            <img className={styles.image} style={{backgroundImage:`url(${car.image})`}}/>
        </div>
        <div className={styles.description}>
            <h2 className={styles.name}>{car.name}</h2>
            <p className={styles.price}>{new Intl.NumberFormat('en-US', {style:'currency', currency:'USD'}).format(car.price)}</p>
        </div>
        <button className={styles.button}>Read More</button>
    </div>
    )
}

export default CarItem