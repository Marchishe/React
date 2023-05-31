import styles from '../../assets/styles/Home/Home.module.scss';
import { cars } from '../../data/Home/cars.data.js'
import CarItem from "./CarItem.jsx";
import {useMemo} from "react";
import CreateCarForm from "./CreateCarForm.jsx";

const Home = () => {
  return (
    <div className='main-container'>
      <h1>Cars Catalog</h1>
      <CreateCarForm />
        <div className={styles.list}>
            {cars.length ? cars.map(car=>(
                 <CarItem key={car.id} car={car}/>
                ))
                :
                <p className={styles.absence}>No more Cars</p>
            }
        </div>
    </div>
  );
};

export default Home;
