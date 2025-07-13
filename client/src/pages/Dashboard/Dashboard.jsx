import Header from '../../components/Header/Header';
import Cards from '../../components/Cards/cards';
import styles from './Dashboard.module.css';
import LogoutIcon from '../../assets/Sair.svg';
import CapBot from '../../components/CapBot/CapBot';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    navigate('/');
  }

  return (
    <div>
      <div className={styles.Header}>
        <Header/>
      </div>
      <main className={styles.container}>
        <button onClick={handleLogout} className={styles.btnLogout}>
          Sair<img src={LogoutIcon} alt="Ícone de Sair" />
        </button>
        <div className={styles.rowBot}>
          <Cards />
          <CapBot/>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
