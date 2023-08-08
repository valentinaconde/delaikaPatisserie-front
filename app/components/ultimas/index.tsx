import Cards from "../cards";
import styles from './ultimas.module.scss'
import MicrowaveIcon from '@mui/icons-material/Microwave';

export default function Ultimas() {

    //HARCODED
    let recipesHarcoded = [
        {
            title: 'Título 1',
            description: 'Descripción 1',
            image: 'https://source.unsplash.com/random'
        },
        {
            title: 'Título 2',
            description: 'Descripción 2',
            image: 'https://source.unsplash.com/random'
        },
        {
            title: 'Título 3',
            description: 'Descripción 3',
            image: 'https://source.unsplash.com/random'
        },
        {
            title: 'Título 4',
            description: 'Descripción 4',
            image: 'https://source.unsplash.com/random'
        },
        {
            title: 'Título 5',
            description: 'Descripción 5',
            image: 'https://source.unsplash.com/random'
        },
        {
            title: 'Título 6',
            description: 'Descripción 6',
            image: 'https://source.unsplash.com/random'
        },
        {
            title: 'Título 7',
            description: 'Descripción 7',
            image: 'https://source.unsplash.com/random'
        },
        {
            title: 'Título 8',
            description: 'Descripción 8',
            image: 'https://source.unsplash.com/random'
        },
        {
            title: 'Título 9',
            description: 'Descripción 9',
            image: 'https://source.unsplash.com/random'
        },
        {
            title: 'Título 10',
            description: 'Descripción 10',
            image: 'https://source.unsplash.com/random'
        },

    ]


    const recipes = recipesHarcoded.splice(recipesHarcoded.length - 5)


    return (
        <div>
            <div className={styles.titleDiv}>
                <MicrowaveIcon className={styles.icon} />
                <h1 className={styles.title}>Recién salidas del horno</h1>
            </div>
            <Cards recipes={recipes} />
        </div>
    )
}
