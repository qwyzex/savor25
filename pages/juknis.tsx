import Button from "@/components/Button";
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
                            <h1 className={styles.title}>
                                {getStringTranslation("GUIDE_TITLE_1")}
                            </h1>
                            <Hr />
                            <div className={styles.content}>
                                <p>{getStringTranslation("GUIDE_DESC")}</p>
                                <Button hyperlink newTab href={"https://drive.google.com/drive/folders/1-1y-sd-85S-DNzv0c78V-ROngP_7PCzI?usp=drive_link"}>
                                    {getStringTranslation("GUIDE_GENERAL")}
                                </Button>
                            </div>
                        </section>
                        <section className={styles.registration}>
                            <h2>
                                {getStringTranslation("GUIDE_TITLE_REGISTRATION")}
                            </h2>
                            <Hr />
                            <div className={styles.content}>
                                <ol>
                                    <li>
                                        {getStringTranslation("GUIDE_DESC_REGISTRATION_1")}
                                    </li>
                                    <li>
                                        {getStringTranslation("GUIDE_DESC_REGISTRATION_2")}
                                    </li>
                                    <li>
                                        {getStringTranslation("GUIDE_DESC_REGISTRATION_3")}
                                    </li>
                                    <li>
                                        {getStringTranslation("GUIDE_DESC_REGISTRATION_4")}
                                    </li>
                                    <li>
                                        {getStringTranslation("GUIDE_DESC_REGISTRATION_5")}
                                    </li>
                                    <li>
                                        {getStringTranslation("GUIDE_DESC_REGISTRATION_6")}
                                    </li>
                                    <li>
                                        {getStringTranslation("GUIDE_DESC_REGISTRATION_7")}
                                    </li>
                                    <li>
                                        {getStringTranslation("GUIDE_DESC_REGISTRATION_8")}
                                    </li>
                                </ol>
                                <div>
                                    <Button
                                        hyperlink
                                        newTab
                                        href={
                                            "https://drive.google.com/file/d/19-PCEckI3lunyyxmW_V28aqnjQ3Y_2qd/view?usp=drive_link"
                                        }
                                    >
                                        {getStringTranslation("GUIDE_REGISTRATION")}
                                    </Button>
                                    <Button hyperlink href="/pendaftaran">
                                        {getStringTranslation("NAV_REGISTER")}
                                        {" >>"}
                                    </Button>
                                </div>
                            </div>
                        </section>
                        <section className={styles.guides}>
                            <h2>{getStringTranslation("GUIDE_TITLE_2")}</h2>
                            <Hr />
                            <div className={styles.content}>
                                <ul>
                                    {data?.map((item, index) => (
                                        <li key={index}>
                                            <p>
                                                {getStringTranslation("GUIDE_OF")}{" "}
                                                <HL>{item.name}</HL>
                                            </p>
                                            <a
                                                className="a"
                                                href={item.booklet}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
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
