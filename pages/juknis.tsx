import GenPage from "@/components/GenPage";
import HL from "@/components/HL";
import Hr from "@/components/Hr";
import { SVG_External } from "@/components/Icons";
import Roof from "@/components/Roof";
import { useData } from "@/context/DataContext";
import { useLanguage } from "@/context/LanguageContext";
import styles from "@/styles/Guide.module.sass";
import Head from "next/head";

const GuidePage = () => {
    const { data } = useData();
    const { getStringTranslation } = useLanguage();

    return (
        <>
            <Head>
                <title>Juknis SAVOR 25</title>
            </Head>
            {/* <div className={`mainScene  ${styles.Guide}`}>
                <BurgerMenu />
            </div> */}
            <Roof>
                <GenPage>
                    <main className={`mainScene ${styles.main}`}>
                        <section className={styles.title}>
                            <h1 className={styles.title}>{getStringTranslation("GUIDE_TITLE_1")}</h1>
                            <Hr />
                            <div className={styles.content}>
                                <p>
                                    {getStringTranslation("GUIDE_DESC")}
                                </p>
                            </div>
                        </section>
                        <section className={styles.guides}>
                            <h1>
                                {getStringTranslation("GUIDE_TITLE_2")}
                            </h1>
                            <Hr />
                            <div className={styles.content}>

                                <ul>
                                    {data?.map((item, index) => (
                                        <li key={index}>
                                            <p>
                                                {getStringTranslation("GUIDE_OF")}{" "}
                                                <HL>
                                                    {item.name}
                                                </HL>
                                            </p>
                                            <a className="a" href={item.booklet} target="_blank" rel="noopener noreferrer">
                                                Buka <SVG_External />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    </main>
                </GenPage>
            </Roof>
        </>
    );
};

export default GuidePage;
