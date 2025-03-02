import { BoxProps } from "./1";
import styles from "@/styles/boxes/3.module.sass";

export default function Box3({ children }: BoxProps) {
    return (
        <>
            <div>
                <div className={styles.box}></div>
                {children}
            </div>
        </>
    );
}
