// import BurgerMenu from "@/components/BurgerMenu";
import Button from "@/components/Button";
import GenPage from "@/components/GenPage";
import Hr from "@/components/Hr";
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
                        <section>
                            <h2>{getStringTranslation("REPORT_BUG_TITLE")}</h2>
                            <Hr />
                            <p>
                                {getStringTranslation("REPORT_BUG_DESC")}
                            </p>
                            <Button href="mailto:xaliscoral@gmail.com" hyperlink>
                                {getStringTranslation("REPORT_BUG_LINK")}
                            </Button>
                        </section>
                        <section>
                            <h2>{getStringTranslation("CONTRIBUTE_TITLE")}</h2>
                            <Hr />
                            <p>
                                {getStringTranslation("CONTRIBUTE_DESC")}
                            </p>
                            <Button href="https://github.com/qwyzex/savor25" hyperlink newTab>
                                {getStringTranslation("CONTRIBUTE_LINK")}
                            </Button>
                        </section>
                    </main>
                </GenPage>
            </Roof>
        </>
    );
};

export default UsPage;
