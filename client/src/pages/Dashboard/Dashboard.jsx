import Header from '../../components/Header/Header';
import styles from './Dashboard.module.css';
import Sair from '../../assets/Sair.svg';
import { useNavigate } from 'react-router-dom';
import CardEntrada from '../../components/CardEntrada/CardEntrada';
import CardSaida from '../../components/CardSaida/CardSaida';
import CardHorasTotais from '../../components/CardHorasTotais/CardHorasTotais';

function Dashboard() {
  const navigate = useNavigate();

  function handleDashboard() {
    navigate('/'); // redirecionar para Login
  }

  return (
    <div>
      <Header />
      <main className={styles.container}>
        <div className={styles.WrapperTitle}>
          <p className={styles.title}>Consultar presença - Laboratório Embarque Digital</p>
          <button onClick={handleDashboard} className={styles.btnSair}>Sair <img src={Sair} alt="Botão Sair" /></button>
        </div>

        <div className={styles.cardWrapper}>
          <CardEntrada />
          <CardSaida />
          <CardHorasTotais/>
        </div>

      </main>
    </div>
  );
}

export default Dashboard;
