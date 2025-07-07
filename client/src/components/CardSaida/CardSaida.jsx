import styles from './CardSaida.module.css';
import IconSaida from '../../assets/Saida.svg';

function CardSaida() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.textBox}>
                    <p className={styles.title}>Saidas Registradas</p>
                    <p className={styles.NumSaidas}>6</p>
                </div>
                <div className={styles.IconBox}>
                    <img className={styles.IconSaida} src={IconSaida} alt="icon saida" />
                </div>
            </div>
        </div>

    )
}

export default CardSaida;