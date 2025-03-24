import BurgerMenu from "@/components/BurgerMenu";
import styles from "@/styles/Us.module.sass";
import Head from "next/head";

const UsPage = () => {
    return (
        <>
            <Head>
                <title>Tentang SAVOR 25</title>
            </Head>
            <div className={`mainScene  ${styles.Us}`}>
                <BurgerMenu />
            </div>
        </>
    );
};

export default UsPage;
