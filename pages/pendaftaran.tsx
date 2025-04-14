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
                <div className={styles.fullNav}>
                    <nav className={styles.menu}>
                        <ul>
                            <li>
                                <a href="#">Quests</a>
                            </li>
                            <li>
                                <a href="#">Equipment</a>
                            </li>
                            <li>
                                <a href="#">Crafting</a>
                            </li>
                            <li>
                                <a href="#">Guild Card</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default BranchesPage;
