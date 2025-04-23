import GenPage from "@/components/GenPage";
import Hr from "@/components/Hr";
import Roof from "@/components/Roof";
import { useData } from "@/context/DataContext";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "@/styles/Info.module.sass";
import Button from "@/components/Button";

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
                        <section id={styles.title}>
                            {/* TITLE */}
                            <h1>{localData?.name}</h1>
                            <p>SMANSA Festive of Competitions Regional</p>
                            <Hr />
                            <p>Welcome to our competition platform</p>
                        </section>
                    </main>
                </GenPage>
            </Roof>
        </>
    );
};

export default Information;
