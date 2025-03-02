import { BoxProps } from "./1";
import styles from "@/styles/boxes/4.module.sass";

export default function Box4({ children }: BoxProps) {
    return (
        <>
            <div>
                <div className={styles.box}></div>
                {children}
            </div>
        </>
    );
}
