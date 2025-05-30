import Link from "next/link";
import styles from "@/styles/components/ListBox.module.sass";
import Arrow from "./Arrow";

export const getLevelLabel = (level: number) => {
    switch (level) {
        case 0:
            return "SMA";
        case 1:
            return "SMP";
        case 2:
            return "SMP & SMA";
        case 3:
            return "SD & SMP";
        case 4:
            return "Public";
        default:
            return "Unknown";
    }
};

interface ListBoxProps {
    title: string;
    level: number;
    price: number;
    regCode: string;
    hue: number;
    button?: boolean;
    buttonText?: string;
}

const ListBox = ({ title, level, price, regCode, hue, button, buttonText }: ListBoxProps) => {
    return (
        <Link href={`/pendaftaran/${regCode}`} className={styles.listBox}>
            <section className={styles.listBoxItem}>
                <div>
                    <h2>{title}</h2>
                </div>
                <div></div>
                <div>
                    {
                        !button ?
                            `${getLevelLabel(level)} | Rp. ${price.toLocaleString("id-ID")}`
                            : buttonText
                    }
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
