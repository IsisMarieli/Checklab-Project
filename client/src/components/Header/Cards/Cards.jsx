import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import styles from './Cards.module.css';

const data = [
  { nome: 'Jan', presenças: 7 },
  { nome: 'Fev', presenças: 8 },
  { nome: 'Mar', presenças: 6 },
  { nome: 'Abr', presenças: 9 },
  { nome: 'Mai', presenças: 10 },
  { nome: 'Jun', presenças: 5 }
];

function Cards() {
    return (
        <div>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <h3>Entradas Registradas</h3>
                    <h1>6</h1>
                </div>

                <div className={styles.card}>
                    <h3>Saídas Registradas</h3>
                    <h1>6</h1>
                </div>

                <div className={styles.cardHour}>
                    <h3>Total de horas no lab</h3>
                    <h1>8h</h1>
                </div>

                <div className={styles.cardFreq}>
                    <h3>Frequência</h3>
                    <h1>80%</h1>
                </div>

                <div className={styles.cardGraphic}>
                    <h3>Presenças por mês</h3>
                    <ResponsiveContainer width="100%" height={280} >
                        <BarChart data={data}>
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey="nome" />
                            <YAxis domain={[0, 30]} />
                            <Tooltip />
                            <Bar dataKey="presenças" fill="#1450EF" barSize={70} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className={styles.cardInfor}>
                    <h3>Embarcante</h3>
                    <p><strong>Nome:</strong> <span>Isis Marieli Da Silva Moura</span></p>
                    <p><strong>IES:</strong>  <span>UNINASSAU</span></p>
                    <p><strong>Email:</strong> <span>Isismarieli1@gmail.com</span></p>

                    <div className={styles.gift}>
                        <p>
                            Sua presença e dedicação no Laboratório de Inovação
                            valem muito mais do que horas:
                            valem conquistas reais!
                        </p>
                    </div>
                    <button type="button" className={styles.buttonGift}>Meus Brindes!</button>
                </div>
            </div>
        </div>
    )
}

export default Cards;