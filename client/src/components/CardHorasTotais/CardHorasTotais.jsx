import styles from './CardHorasTotais.module.css';
import IconHorasTotais from '../../assets/HorasTotais.svg';

function CardHorasTotais() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.textBox}>
                    <p className={styles.title}>Total de horas no lab</p>
                    <p className={styles.NumHorasTotais}>6</p>
                </div>
                <div className={styles.IconBox}>
                    <img className={styles.IconHorasTotais} src={IconHorasTotais} alt="icon Horas Totais" />
                </div>
            </div>
        </div>

    )
}

export default CardHorasTotais;