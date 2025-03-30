import GenPage from "./GenPage";
import styles from "@/styles/Home.module.sass";
import Hr from "./Hr";
import Button from "./Button";
import Arrow from "./Arrow";
import { useLanguage } from "@/context/LanguageContext";

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
                        CHECK IT OUT!
                    </Button>
                    <button onClick={() => setLanguage("en")}>English</button>
                    <button onClick={() => setLanguage("id")}>Indonesian</button>
                </section>
                <section id={"trailer"}>
                    {/* TRAILER */}
                    <h1>Watch The Trailer!</h1>
                    <Hr />
                    <iframe
                        width={640}
                        height={360}
                        src="https://www.youtube.com/embed/19g66ezsKAg"
                        allowFullScreen
                    />
                </section>
                <section id={"competitions"}>
                    {/* LIST OF COMPETITIONS */}
                    <h1>List of Competitions</h1>
                    <Hr />
                    <ListBox />
                </section>
                <section id={"dates"}>
                    {/* HIGHLIGHTS */}
                    <h1>Key Dates & Highlights</h1>
                    <Hr />
                </section>
                <section id={"faq"}>
                    {/* FAQ */}
                    <h1>Frequently Asked Questions</h1>
                    <Hr />
                </section>
                <section id={"sponsors"}>
                    {/* CALLING OUT SPONSORS */}
                    <h1>Sponsored and Supported By</h1>
                    <Hr />
                </section>
                <section id={"additional"}>
                    {/* FOOTER */}
                    <h1>More Information</h1>
                    <Hr />
                </section>
            </main>
        </GenPage>
    );
};

export function ListBox() {
    return (
        <div className={styles.listBox}>
            <section className={styles.listBoxItem}>
                <div>
                    <h2>Basket 5v5</h2>
                </div>
                <div></div>
                <div>SMP | Rp. 100.000</div>
                <span className={styles.colorHighlight}></span>
            </section>
            <section className={styles.listBoxButton}>
                <button>
                    <Arrow />
                </button>
            </section>
        </div>
    );
}

export default HomePage;
