import { ReactNode } from "react";
import styles from "@/styles/Generic.module.sass";
import BurgerMenu from "./BurgerMenu";

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
