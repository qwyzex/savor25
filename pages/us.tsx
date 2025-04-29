import BurgerMenu from "@/components/BurgerMenu";
import GenPage from "@/components/GenPage";
import Roof from "@/components/Roof";
import styles from "@/styles/Us.module.sass";
import Head from "next/head";

const UsPage = () => {
    return (
        <>
            <Head>
                <title>Tentang SAVOR 25</title>
            </Head>
            <Roof>
                <GenPage>
                    <main className={`mainScene`}></main>
                </GenPage>
            </Roof>
        </>
    );
};

export default UsPage;
