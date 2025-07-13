import styles from './CapBot.module.css'
import capBot from '../../assets/CapBot.svg';


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
                    <div className={styles["mensage bot-message"]}>
                        <img
                            className={styles.CapBot}
                            src={capBot}
                            alt="CapBot assistente virtual"
                        />
                        <p className={styles["message-text"]}>
                            Olá <br /> Como posso ajudar você hoje?
                        </p>
                    </div>
                    <div className={styles["mensage user-message"]}>
                        <p className={styles["message-text"]}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                {/* Chatbot Footer */}
                <div className={styles["chat-footer"]}>
                    <form action="#" className={styles["chat-form"]}>
                        <input type="text" placeholder='Mensagem. . .' className={styles["mensage-input"]} required />
                        <button className="material-symbols-rounded">
                            arrow_upward
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default CapBot;