import Link from "next/link";
import styles from "@/styles/components/ListBox.module.sass";
import Arrow from "./Arrow";

const getLevelLabel = (level: number) => {
    switch (level) {
        case 0:
            return "SMA";
        case 1:
            return "SMP";
        case 2:
            return "SD";
        case 21:
            return "SD & SMP";
        case 10:
            return "SMP & SMA";
        case 9:
            return "Public";
        default:
            return "Unknown";
    }
};

interface ListBoxProps {
    title: string;
    level: number;
    price: number;
    register: string;
    hue: number;
}

const ListBox = ({ title, level, price, register, hue }: ListBoxProps) => {
    return (
        <Link href={`/pendaftaran/${register}`} className={styles.listBox}>
            <section className={styles.listBoxItem}>
                <div>
                    <h2>{title}</h2>
                </div>
                <div></div>
                <div>
                    {getLevelLabel(level)} | Rp. {price.toLocaleString("id-ID")}
                </div>
                <span
                    style={{ filter: `hue-rotate(${hue}deg)` }}
                    className={styles.colorHighlight}
                ></span>
            </section>
            <section className={styles.listBoxButton}>
                <button>
                    <Arrow />
                </button>
            </section>
        </Link>
    );
};

export default ListBox;
