import BurgerMenu from "@/components/BurgerMenu";
import styles from "@/styles/Branches.module.sass";
import Head from "next/head";

const BranchesPage = () => {
    return (
        <>
            <Head>
                <title>Daftar Lomba SAVOR 25</title>
            </Head>
            <div className={`mainScene  ${styles.Branches}`}>
                <BurgerMenu />
            </div>
        </>
    );
};

export default BranchesPage;
