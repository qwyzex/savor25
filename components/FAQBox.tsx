import { useState } from "react";
import styles from "@/styles/components/FAQBox.module.sass";

const FAQBox = ({ question, answer }: { question: string; answer: string }) => {
    const [open, setOpen] = useState(false);

    return (
        <div
            className={`${styles.faqBox} ${open ? styles.open : ""}`}
            onClick={() => setOpen((prev) => !prev)}
        >
            {/* <div className={styles.leftBar}></div> */}
            <div className={styles.content}>
                <h3>{question}</h3>
                <div className={styles.separator}></div>
                <div className={styles.answer}>
                    <p>{answer}</p>
                </div>
            </div>
            <span className={styles.highlight}></span>
        </div>
    );
};

export default FAQBox;
