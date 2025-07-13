import styles from './Login.module.css';
import LogoEmbarque from '../../assets/LOGO - EMBARQUEDIGITAL.svg';
import LogoPorto from '../../assets/LOGO - PORTODIGITAL.svg';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    // Validar o CPF!
    navigate('/dashboard'); // redirecionar para Dashboard
  }

  return (
    <main className={styles.container}>
      <img className={styles.LogoEmbarque} src={LogoEmbarque} alt="Logo Embarque Digital" title='Embarque Digital'/>
      <img className={styles.LogoPorto} src={LogoPorto} alt="Logo Porto Digital" title='Porto Digital' />
      <p>Entre no CheckLab</p>
      <input type="text" placeholder='Digite seu CPF'/>
      <button className={styles.btnLogin} onClick={handleLogin}>Entrar</button>
    </main>
  );
}

export default Login;
