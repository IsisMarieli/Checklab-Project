import Header from '../../components/Header/Header';
import styles from './Dashboard.module.css';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '../../assets/Sair.svg';
import Cards from '../../components/Header/cards/cards';

function Dashboard() {
  const navigate = useNavigate();

  // Função para lidar com o logout, que redireciona para a página de login
  function handleLogout() {
    navigate('/'); // Redireciona para a rota de login
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

          <Cards/>
      </main>
    </div>
  );
}

export default Dashboard;