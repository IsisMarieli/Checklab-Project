import styles from './CardEntrada.module.css';
import IconEntrada from '../../assets/Entrada.svg';

function CardEntrada() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.textBox}>
                    <p className={styles.title}>Entradas Registradas</p>
                    <p className={styles.NumEntradas}>6</p>
                </div>
                <div className={styles.IconBox}>
                    <img className={styles.IconEntrada} src={IconEntrada} alt="icon entrada" />
                </div>
            </div>
        </div>

    )
}

export default CardEntrada;