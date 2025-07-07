import styles from './Header.module.css';
import LogoEmbarque from '../../assets/LOGO - EMBARQUEDIGITAL.svg';
import LogoPorto from '../../assets/LOGO - PORTODIGITAL.svg';

function Header() {
    return (
        <main className={styles.container}>
            <img className={styles.LogoPorto} src={LogoPorto} alt="Logo Porto Digital" title='Porto Digital' />
            <p>CheckLab</p>
            <img className={styles.LogoEmbarque} src={LogoEmbarque} alt="Logo Embarque Digital" title='Embarque Digital' />
        </main>
    );
}

export default Header;
