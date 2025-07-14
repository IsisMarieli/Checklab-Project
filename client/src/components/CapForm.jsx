import { useRef } from 'react';
import styles from './CapBot/CapBot.module.css';

function CapForm() {
  const inputRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    console.log(userMessage);
  };

  return (
    <form className={styles["chat-form"]} onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Mensagem. . ."
        className={styles["message-input"]}
        required
      />
      <button className="material-symbols-rounded">
        arrow_upward
      </button>
    </form>
  );
}

export default CapForm;
