import Header from '../../components/Header/Header';
import styles from './Dashboard.module.css';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '../../assets/Saida.svg';
import EntryIcon from '../../assets/Entrada.svg';
import ExitIcon from '../../assets/Sair.svg';
import TotalHoursIcon from '../../assets/HorasTotais.svg';
import UserIcon from '../../assets/User.svg';

function Dashboard() {
  const navigate = useNavigate();

  // Função para lidar com o logout, que redireciona para a página de login
  function handleLogout() {
    navigate('/'); // Redireciona para a rota de login
  }

  return (
    <div>
      <Header />
      <main className={styles.container}>
        <div className={styles.wrapperTitle}>
          <h1 className={styles.mainTitle}>Consultar presença - Laboratório Embarque Digital</h1>
          <button onClick={handleLogout} className={styles.btnLogout}>
            Sair <img src={LogoutIcon} alt="Ícone de Sair" />
          </button>
        </div>
        <div className={styles.cards}>

          {/* Card: Entradas Registradas */}
          <div className={styles.card}>
            <div className={styles.cardLeft}>
              <h3 className={styles.cardTitle}>Entradas Registradas</h3>
              <strong>6</strong>
            </div>
            <img src={EntryIcon} alt="Ícone de Entradas" />
          </div>

          {/* Card: Saídas Registradas */}
          <div className={styles.card}>
            <div className={styles.cardLeft}>
              <h3 className={styles.cardTitle}>Saídas Registradas</h3>
              <strong>6</strong>
            </div>
            <img src={ExitIcon} alt="Ícone de Saídas" />
          </div>

          {/* Card: Total de horas no lab */}
          <div className={styles.card}>
            <div className={styles.cardLeft}>
              <h3 className={styles.cardTitle}>Total de horas no lab</h3>
              <strong>8</strong>
            </div>
            <img src={TotalHoursIcon} alt="Ícone de Horas Totais" />
          </div>

          {/* Card: Informações do Embarcante */}
          <div className={styles.card}>
            <div className={styles.cardLeft}>
              <h3 className={styles.cardTitle}>Informações do Aluno(a)</h3>
              <p>Nome: <span>Isis Marieli</span></p>
              <p>IES: <span>UNINASSAU</span></p>
              <p>E-mail: <span>Isismarieli1@gmail.com</span></p>
            </div>
            <img src={UserIcon} alt="Ícone de Usuário" />
          </div>

          {/* Card: Horas totais por mês */}
          <div className={styles.card}>
            <div className={styles.cardLeft}>
              <h3 className={styles.cardTitle}>Horas totais por mês</h3>
              <strong>8</strong>
            </div>
            <img src={EntryIcon} alt="Ícone de Entradas" />
          </div>

          {/* Card: Conquistas no Lab */}
          <div className={styles.card}>
            <div className={styles.cardLeft}>
              <h3 className={styles.cardTitle}>Minhas Conquistas no Lab</h3>
            </div>
          </div>

          {/* Card: Presenças por mês */}
          <div className={styles.card}>
            <div className={styles.cardLeft}>
              <h3 className={styles.cardTitle}>Presenças por mês</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;