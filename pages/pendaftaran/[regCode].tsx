import GenPage from "@/components/GenPage";
import { R } from "@/components/Hr";
import Roof from "@/components/Roof";
import { useData } from "@/context/DataContext";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "@/styles/Info.module.sass";
import Button from "@/components/Button";
import { ReactNode } from "react";
import FAQBox from "@/components/FAQBox";
import Timeline from "@/components/Timeline";

const Information = () => {
    const router = useRouter();
    const { data } = useData();

    const { regCode } = router.query;

    const localData = data?.find((item) => item.regCode === regCode);

    return (
        <>
            <Head>
                <title>Information</title>
                <meta name="description" content="Savor 2025 Information" />
            </Head>
            <Roof>
                <GenPage>
                    <main className={`mainScene ${styles.main}`}>
                        <section id={styles.backPanel}>
                            <Button>BACK</Button>
                        </section>
                        <section id={styles.info}>
                            <div className={styles.title}>
                                {/* TITLE */}
                                <h1 className={styles.name}>{localData?.name}</h1>
                                <p className={styles.extra}>{localData?.extra}</p>
                                <R />
                            </div>
                            <div className={styles.info_main}>
                                <section>
                                    <div className={styles.critical}>
                                        <Button>REGISTER</Button>
                                        <ul>
                                            <li>
                                                <Crested>
                                                    <p>Tingkat: </p>
                                                    <p>{localData?.level}</p>
                                                </Crested>
                                            </li>
                                            <li>
                                                <Crested>
                                                    <p>Biaya: </p>
                                                    <p>{localData?.price}</p>
                                                </Crested>
                                            </li>
                                            <li>
                                                <Button>JUKNIS</Button>
                                            </li>
                                            <li>
                                                <Button>CP</Button>
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
                                    </div>
                                    <div className={styles.timeline}>
                                        <Timeline active={[-1, 2, 4, 8]} />
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
