import { ReactNode } from "react";
import styles from "@/styles/boxes/1.module.sass";

export interface BoxProps {
    children: ReactNode;
}

export default function Box1({ children }: BoxProps) {
    return (
        <>
            <div>
                <div className={styles.box}></div>
                {children}
            </div>
        </>
    );
}
