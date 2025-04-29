import BurgerMenu from "@/components/BurgerMenu";
import Button from "@/components/Button";
import GenPage from "@/components/GenPage";
import Hr from "@/components/Hr";
import Roof from "@/components/Roof";
import styles from "@/styles/Us.module.sass";
import Head from "next/head";

const UsPage = () => {
    return (
        <>
            <Head>
                <title>404 - Page Not Found</title>
            </Head>
            <Roof>
                <GenPage>
                    <main className={`mainScene`}>
                        <section>
                            <h1>404 - Page Not Found</h1>
                            <Hr />
                            <p>Sorry, the page you are looking for does not exist.</p>
                            <p>You can go back to the <Button hyperlink href="/">homepage</Button> or check out our <Button hyperlink href="/us">about us</Button> page.</p>
                        </section></main>
                </GenPage>
            </Roof>
        </>
    );
};

export default UsPage;
