import GenPage from "@/components/GenPage";
import Hr, { R } from "@/components/Hr";
import Roof from "@/components/Roof";
import { useData } from "@/context/DataContext";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "@/styles/Info.module.sass";
import Button from "@/components/Button";
import { ReactNode } from "react";

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
                                <Crested>
                                    <p>{localData?.description}</p>
                                </Crested>
                                <ul>
                                    <li>
                                        <p>Tingkat: </p>
                                        <Crested>
                                            {localData?.level}
                                        </Crested>
                                    </li>
                                    <li>
                                        <p>Biaya: </p>
                                        <Crested>
                                            {localData?.price}
                                        </Crested>
                                    </li>
                                    <li>
                                        <p>Juknis: </p>
                                        <Button>
                                            {localData?.booklet}
                                        </Button>
                                    </li>
                                    <li>
                                        <p>CP: </p>
                                        <Button>
                                            {localData?.cp}
                                        </Button>

                                    </li>
                                </ul>
                            </div>
                        </section>
                    </main>
                </GenPage>
            </Roof>
        </>
    );
};

export default Information;

const Crested = ({ children }: { children: ReactNode }) => {
    return (
        <div className={styles.crested}>{children}</div>
    )
}
