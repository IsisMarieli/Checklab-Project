import { useState } from 'react';
import Swal from 'sweetalert2'; // importa o SweetAlert2
import styles from './Login.module.css';
import LogoEmbarque from '../../assets/LOGO - EMBARQUEDIGITAL.svg';
import LogoPorto from '../../assets/LOGO - PORTODIGITAL.svg';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [cpf, setCpf] = useState('');

  function handleCpfChange(e) {
    const apenasNum = e.target.value.replace(/\D/g, '');
    setCpf(apenasNum);
  }

  function handleLogin() {
    if (cpf.length < 11) {
      Swal.fire({
        icon: 'warning',
        title: 'Campo obrigatório!',
        text: 'Por favor, digite seu CPF antes de continuar.',
        confirmButtonColor: 'var(--blue-light)'
      });
      return;
    } else {
      // redireciona ao dashboard se tiver preenchido
      navigate('/dashboard');
    }
  }

  return (
    <main className={styles.container}>
      <img className={styles.LogoEmbarque} src={LogoEmbarque} alt="Logo Embarque Digital" title="Embarque Digital" />
      <a href="https://www.portodigital.org/" target="_blank" rel="noopener noreferrer">
        <img className={styles.LogoPorto} src={LogoPorto} alt="Logo Porto Digital" title="Porto Digital" />
      </a>
      <p>Entre no CheckLab</p>
      <input
        type="password"
        placeholder="Digite seu CPF"
        value={cpf}
        onChange={handleCpfChange}
        maxLength={11}
      />
      <button className={styles.btnLogin} onClick={handleLogin}>Entrar</button>
    </main>
  );
}

export default Login;
