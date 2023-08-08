import styles from './categories.module.scss'
export default function Categories() {

    // HARCODED
    const categories = ['Masas', 'Tartas', 'Postres', 'Bebidas', 'Saludables', 'Sin TACC', 'Veganas', 'Vegetarianas']

  return (
    <div className={styles.container}>
        <h1>CATEGORIAS</h1>
        {categories.map((category, index) => (
            <div key={index} className={styles.category}>{category}</div>
        ))
        }
    </div>
  )
}
