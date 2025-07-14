import styles from './CapBot.module.css'
import capBot from '../../assets/CapBot.svg';
import Cap from '../../assets/Cap.svg';
import CapForm from '../capForm';


function CapBot() {
    return (
        <div className={styles.container}>
            <div className={styles["CapBot-popup"]}>

                {/* ChatBot Header */}
                <div className={styles["chat-header"]}>
                    <div className={styles["header-info"]}>
                        <img
                            className={styles.CapBot}
                            src={capBot}
                            alt="CapBot assistente virtual"
                        />
                    </div>
                    <button className="material-symbols-rounded">keyboard_arrow_down</button>
                </div>

                {/* ChatBot Body */}
                <div className={styles["chat-body"]}>
                    <div className={styles["mensage-bot-message"]}>
                        <img
                            className={styles["CapBot-chat"]}
                            src={Cap}
                            alt="CapBot assistente virtual"
                        />
                        <p className={styles["message-text"]}>
                            Olá, Embarcante! 🚀 <br/>
                            Eu me chamo CapBot, sim uma capivara assistente, 
                            Como posso te ajudar hoje?
                        </p>
                    </div>
                    <div className={styles["mensage-user-message"]}>
                        <p className={styles["message-text"]}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                {/* Chatbot Footer */}
                <div className={styles["chat-footer"]}>
                    <CapForm/>
                </div>
            </div>
        </div>

    )
}

export default CapBot;