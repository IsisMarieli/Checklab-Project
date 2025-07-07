import Header from '../../components/Header/Header';
import styles from './Dashboard.module.css'; // caminho correto?

function Dashboard() {
  return (
    <div>
      <Header />
      <main className={styles.container}>
        <h1>Hello, Dashboard!</h1>
      </main>
    </div>
  );
}

export default Dashboard;
