import { ReactNode } from "react";
import BurgerMenu from "./BurgerMenu";
import styles from "@/styles/Generic.module.sass";
import { useRouter } from "next/router";

export interface GenericProps {
    children: ReactNode;
}
const GenPage = ({ children }: GenericProps) => {
    const router = useRouter();

    return (
        <div className={`${router.pathname == "/run" ? styles.run : ""} ${/^\/pendaftaran\/[a-z0-9_]+$/.test(router.asPath) ? styles.GenericContainerGlobal : ""} ${styles.container}`}>
            <div className={styles.main}>{children}</div>
            <BurgerMenu />
        </div>
    );
};

export default GenPage;
