import { ReactNode } from "react";
import BurgerMenu from "./BurgerMenu";
import styles from "@/styles/Generic.module.sass";

export interface GenericProps {
    children: ReactNode;
}
const GenPage = ({ children }: GenericProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>{children}</div>
            <BurgerMenu />
        </div>
    );
};

export default GenPage;
