import Ultimas from "./components/ultimas";
import Busqueda from "./components/busqueda";
import Categories from "./components/categories";
import styles from './page.module.scss'
export default function Home() {
  return (
    <>
      <div className={styles.busqueda}><Busqueda /></div>
      <div className={styles.container}>
        <div className={styles.categories}><Categories /></div>
        <div className={styles.ultimas}><Ultimas /></div>
      </div>
    </>
  )
}
