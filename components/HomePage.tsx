import GenPage from "./GenPage";
import styles from "@/styles/Home.module.sass";
import Hr from "./Hr";
import Button from "./Button";
import { useLanguage } from "@/context/LanguageContext";
import ListBox from "./ListBox";

const HomePage = () => {
    const { language, translations, setLanguage } = useLanguage();

    return (
        <GenPage>
            <main className={styles.main}>
                <section id={"title"}>
                    {/* TITLE */}
                    <h1>SAVOR 2025</h1>
                    <p>SMANSA Festive of Competitions Regional</p>
                    <Hr />
                    <p>{translations.HOME_DESCRIPTION}</p>
                    <Button hyperlink href="#trailer" arrow>
                        {translations.HOME_CHECK_IT_OUT_BUTTON}
                    </Button>
                    <button onClick={() => setLanguage("en")}>English</button>
                    <button onClick={() => setLanguage("id")}>Indonesian</button>
                </section>
                <section id={"trailer"}>
                    {/* TRAILER */}
                    <h1>{translations.HOME_WATCH_TRAILER}</h1>
                    <Hr />
                    <iframe
                        src="https://www.youtube.com/embed/19g66ezsKAg"
                        allowFullScreen
                    />
                </section>
                <section id={"competitions"}>
                    {/* LIST OF COMPETITIONS */}
                    <h1>{translations.HOME_LIST_OF_COMPETITIONS}</h1>
                    <Hr />
                    <ListBox />
                </section>
                <section id={"dates"}>
                    {/* HIGHLIGHTS */}
                    <h1>{translations.HOME_KEY_DATES}</h1>
                    <Hr />
                </section>
                <section id={"faq"}>
                    {/* FAQ */}
                    <h1>{translations.HOME_FAQ}</h1>
                    <Hr />
                </section>
                <section id={"sponsors"}>
                    {/* CALLING OUT SPONSORS */}
                    <h1>{translations.HOME_SPONSORS}</h1>
                    <Hr />
                    <section className={styles.sponsorsList}>
                        <img src="/imgs/ccl.jpg" alt="1" />
                        <img src="/imgs/ccl.jpg" alt="1" />
                        <img src="/imgs/ccl.jpg" alt="1" />
                        <img src="/imgs/ccl.jpg" alt="1" />
                        <img src="/imgs/ccl.jpg" alt="1" />
                        <img src="/imgs/ccl.jpg" alt="1" />
                        <img src="/imgs/ccl.jpg" alt="1" />
                        <img src="/imgs/ccl.jpg" alt="1" />
                        <img src="/imgs/ccl.jpg" alt="1" />
                        <img src="/imgs/ccl.jpg" alt="1" />
                    </section>
                </section>
                <section id={"additional"}>
                    {/* FOOTER */}
                    <h1>{translations.HOME_MORE_INFO}</h1>
                    <Hr />
                    <Button>INSTAGRAM</Button>
                    <Button>TIKTOK</Button>
                    <Button>CONTACT PERSON</Button>
                </section>
            </main>
        </GenPage>
    );
};

export default HomePage;
