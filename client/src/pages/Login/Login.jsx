import styles from '../../pages/Login/Login.module.css'
import LogoEmbarque from '../../assets/LOGO - EMBARQUEDIGITAL.png'
import LogoPorto from '../../assets/LOGO - PORTODIGITAL.png'

function Login() {
  
  return (
    <>
    <header className={styles.containerHeader}>
      <img className={styles.LogoEmbarque} src={LogoEmbarque} alt="" />
    </header>
    <main className={styles.containerMain}>
      <img className={styles.LogoPorto} src={LogoPorto} alt="" />
      <p>Entre no CheckLab</p>
      <input type="text" placeholder='Digite seu CPF'/>
      <button>Entrar</button>
    </main>
    </>
  )
}

export default Login