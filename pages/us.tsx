// import BurgerMenu from "@/components/BurgerMenu";
import GenPage from "@/components/GenPage";
import Roof from "@/components/Roof";
import { useLanguage } from "@/context/LanguageContext";
// import styles from "@/styles/Us.module.sass";
import Head from "next/head";

const UsPage = () => {
    const { getStringTranslation } = useLanguage();

    return (
        <>
            <Head>
                <title>ABOUT SAVOR</title>
            </Head>
            <Roof>
                <GenPage>
                    <main className={`mainScene`}>
                        <section>
                            <h1>{getStringTranslation("UNDER_DEV")}</h1>
                            <p>
                                {getStringTranslation("UNDER_DEV_DESC")}
                            </p>
                        </section>
                    </main>
                </GenPage>
            </Roof>
        </>
    );
};

export default UsPage;
