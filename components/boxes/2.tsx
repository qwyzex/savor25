import { BoxProps } from "./1";
import styles from "@/styles/boxes/2.module.sass";

export default function Box2({ children }: BoxProps) {
    return (
        <>
            <div>
                <div className={styles.box}></div>
                {children}
            </div>
        </>
    );
}
