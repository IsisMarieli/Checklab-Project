import Header from '../../components/Header/Header/Header';
import Cards from '../../components/Header/cards/cards';
import styles from './Dashboard.module.css';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '../../assets/Sair.svg';
import CapBot from '../../assets/CapBot.svg';

function Dashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    navigate('/');
  }

  return (
    <div>
      <div className={styles.Header}>
        <Header />
      </div>
      <main className={styles.container}>
        <button onClick={handleLogout} className={styles.btnLogout}>
          Sair<img src={LogoutIcon} alt="Ícone de Sair" />
        </button>
        <div className={styles.rowBot}>
          <Cards />
          <img
            className={styles.CapBot}
            src={CapBot}
            alt="CapBot assistente virtual"
            />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
