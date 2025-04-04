import BurgerMenu from "@/components/BurgerMenu";
import styles from "@/styles/Guide.module.sass";
import Head from "next/head";

const GuidePage = () => {
    return (
        <>
            <Head>
                <title>Juknis SAVOR 25</title>
            </Head>
            <div className={`mainScene  ${styles.Guide}`}>
                <BurgerMenu />
            </div>
        </>
    );
};

export default GuidePage;
