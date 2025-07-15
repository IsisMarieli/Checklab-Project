import styles from './CapBot.module.css'
import capBot from '../../assets/CapBot.svg';
import Cap from '../../assets/Cap.svg';
import CapForm from './CapForm';
import { useState } from 'react';
import CapMessage from './CapMessage';


function CapBot() {
    const [capHistory, setCapHistory] = useState([]);

    const generateBotResponse = async (history) => {
        // função para ajudar a atualizar o histórico do chat
        const updateHistory = (text) => {
            setCapHistory(prev => [...prev.filter(msg => msg.text !== "Analisando . . ."), {role: "model", text}]);
        }

        // formatar historico do chat para req da API
        history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: history })
        }

        try {
            // chamada da API para obter a resposta do bot
            const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
            const data = await response.json();
            if (!response.ok) throw new Error(data.error.message || "vixe...algo deu errado!")
            
            // Limpar e atualizar historico do chat
            const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g,"$1").trim();

            updateHistory(apiResponseText);
        } catch (error) {
            console.log(error);
        }
    }

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
                            Olá, Embarcante! 🚀
                            <br />
                            Sou a CapBot, sua mascote virtual.
                        </p>
                    </div>

                    {/* Render the chat */}
                    {capHistory.map((chat, index) => (
                        <CapMessage key={index} chat={chat} />
                    ))}

                </div>

                {/* Chatbot Footer */}
                <div className={styles["chat-footer"]}>
                    <CapForm capHistory={capHistory} setCapHistory={setCapHistory} generateBotResponse={generateBotResponse} />
                </div>
            </div>
        </div>

    )
}

export default CapBot;