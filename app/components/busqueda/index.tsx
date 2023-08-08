
import styles from './busqueda.module.scss'

export default function Busqueda() {
  return (
    <div className={styles.busquedaContainer}>
        <div className={styles.cuadroBusqueda}>
            <h1 className={styles.titleBusqueda}>¿Qué te gustaría cocinar?</h1>
            {/* TO DO cambiar por search bar */}
            <div className={styles.searchBar}>

            </div>
        </div>
    </div>
  )
}
