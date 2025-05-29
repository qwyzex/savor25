import GenPage from "@/components/GenPage";
import { R } from "@/components/Hr";
import Roof from "@/components/Roof";
import { useData } from "@/context/DataContext";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "@/styles/Info.module.sass";
import Button from "@/components/Button";
import { ReactNode } from "react";
import Timeline from "@/components/Timeline";
import { SVG_Call, SVG_Dollar, SVG_Guidebook, SVG_Level, SVG_Regist } from "@/components/Icons";
import { getLevelLabel } from "@/components/ListBox";
import HL from "@/components/HL";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import { useLanguage } from "@/context/LanguageContext";

const Information = () => {
    const router = useRouter();
    const { data } = useData();
    const { getStringTranslation } = useLanguage();

    const { regCode } = router.query;

    const localData = data?.find((item) => item.regCode === regCode);

    return (
        <>
            <Head>
                <title>{localData?.name} - SAVOR 25</title>
                <meta name="description" content="Savor 2025 Information" />
            </Head>
            <Roof>
                <GenPage>
                    <main className={`mainScene ${styles.main}`}>
                        <section id={styles.backPanel}
                            style={{
                                filter: `hue-rotate(${localData?.hue}deg)`,
                                boxShadow: `0 0 40px ${`hsla(${(340 + (localData?.hue || 0))}, 70%, 70%, 55%)`}`
                            }}>
                            <button>
                                <Arrow />
                            </button>
                            <Link href="/pendaftaran"></Link>
                        </section>
                        <section id={styles.info}>
                            <div className={styles.title}>
                                {/* TITLE */}
                                <h1 className={styles.name}>{localData?.name}</h1>
                                <p className={styles.extra}>{localData?.extra} - {localData?.cpFull}</p>
                                <R />
                            </div>
                            <div className={styles.info_main}>
                                <section>
                                    <div className={styles.critical}>
                                        <Button hyperlink newTab href={localData?.form}>
                                            <p>
                                                REGISTER
                                                <SVG_Regist />
                                            </p>
                                        </Button>
                                        <ul>
                                            <li>
                                                <Crested>
                                                    <SVG_Level />
                                                    <p>Jenjang</p>
                                                    {/* <Button>{getLevelLabel(localData?.level || 0)}</Button> */}
                                                    <HL>{getLevelLabel(localData?.level || 0)}</HL>
                                                </Crested>
                                            </li>
                                            <li>
                                                <Crested>
                                                    <SVG_Dollar />
                                                    <p>Biaya:</p>
                                                    {/* <Button>{`Rp. ${localData?.price.toLocaleString('id-ID')}`}</Button> */}
                                                    <HL>{`Rp. ${localData?.price.toLocaleString('id-ID')}`}</HL>
                                                </Crested>
                                            </li>
                                            <li>
                                                <Button hyperlink newTab href={localData?.booklet}>
                                                    <SVG_Guidebook />
                                                    <p>
                                                        JUKNIS
                                                    </p>
                                                </Button>
                                            </li>
                                            <li>
                                                <Button hyperlink newTab href={`https://wa.me/+62${localData?.cpFull}`}>
                                                    <SVG_Call />
                                                    <p>
                                                        CP
                                                    </p>
                                                </Button>
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                                <section>
                                    <div className={styles.description}>
                                        <h3>Description</h3>
                                        <Crested left>
                                            <p>{localData?.description}</p>
                                        </Crested>
                                        <p>
                                            {getStringTranslation("INFO_NOTE")}
                                        </p>
                                    </div>
                                    <div className={styles.timeline}>
                                        <Timeline active={localData?.hx} />
                                    </div>
                                </section>
                            </div>
                            {/* <div className={styles.faq}>
                                <h1>FAQ</h1>
                                <FAQBox question="Lorem ipsum" answer="Lorem ipsum" />
                            </div> */}
                        </section>
                    </main>
                </GenPage>
            </Roof>
        </>
    );
};

export default Information;

const Crested = ({ children, left = false }: { children: ReactNode, left?: boolean }) => {
    return <div className={`${left ? styles.left : ""} ${styles.crested}`}>{children}</div>;
};
