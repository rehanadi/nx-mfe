import { useState } from "react";
import styles from  "./RemoteButton.module.css";

const Button = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button
        type="button"
        onClick={() => setCount(prev => prev + 1)}
        className={styles.button}
      >
        Remote Button
      </button>
    </div>
  );
};

export default Button;