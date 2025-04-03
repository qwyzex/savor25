import styles from "@/styles/components/ListBox.module.sass";
import Arrow from "./Arrow";

const ListBox = () => {
    return (
        <div className={styles.listBox}>
            <section className={styles.listBoxItem}>
                <div>
                    <h2>Basket 5v5</h2>
                </div>
                <div></div>
                <div>SMP | Rp. 100.000</div>
                <span className={styles.colorHighlight}></span>
            </section>
            <section className={styles.listBoxButton}>
                <button>
                    <Arrow />
                </button>
            </section>
        </div>
    );
};

export default ListBox;
