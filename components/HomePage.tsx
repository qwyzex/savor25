// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */
import GenPage from "./GenPage";
import styles from "@/styles/Home.module.sass";
import Hr from "./Hr";
import Button from "./Button";
import { useLanguage } from "@/context/LanguageContext";
import ListBox from "./ListBox";
import FAQBox from "./FAQBox";
import { useData } from "@/context/DataContext";
import Image from "next/image";

const HomePage = () => {
    const { language, translations, getStringTranslation, setLanguage } = useLanguage();
    const { data } = useData();

    return (
        <GenPage>
            <main className={`mainScene ${styles.main}`}>
                <section id={"title"} className={styles.title}>
                    {/* TITLE */}
                    <img alt="SAVOR Logo" src={"/imgs/FEED_SAVOR.png"} />
                    <Hr />
                    <h1>SMANSA Festive Regional Competitions</h1>
                    <Hr />
                    <p>{translations.HOME_DESCRIPTION}</p>
                    <Button hyperlink href="#trailer" arrow>
                        {translations.HOME_CHECK_IT_OUT_1_BUTTON}
                    </Button>
                    <Button hyperlink href="#competitions" arrow>
                        {translations.HOME_CHECK_IT_OUT_2_BUTTON}
                    </Button>
                </section>
                {/* TRAILER */}
                <section id={"trailer"}>
                    <h2>{translations.HOME_WATCH_TRAILER}</h2>
                    <Hr />
                    <iframe
                        src="https://www.youtube.com/embed/NipJ8xQJkYY"
                        // https://youtu.be/NipJ8xQJkYY?si=HmTNr5ycrw47H6BV
                        allowFullScreen
                    />
                </section>
                <section id="run">
                    {/* RUNNING */}
                    <div className={styles.runImage}>
                        <Image
                            src={"/imgs/run/Logo.png"}
                            alt="Running"
                            width={400}
                            height={300}
                        />
                    </div>
                    <Hr />
                    <p>{translations.HOME_RUNNING_DESC}</p>
                    <Button hyperlink href="/run" arrow>
                        {translations.HOME_RUNNING_BUTTON}
                    </Button>
                </section>
                <section id={"competitions"}>
                    {/* LIST OF COMPETITIONS */}
                    <h2>{translations.HOME_LIST_OF_COMPETITIONS}</h2>
                    <Hr />
                    <ul className={styles.compLists}>
                        {data.sort((a, b) => {
                            return b.price - a.price;
                        }).slice(0, 6).map((competition, index) => (
                            <ListBox
                                key={index}
                                title={competition.name}
                                level={competition.level}
                                price={competition.price}
                                regCode={competition.regCode}
                                hue={competition.hue}
                            />
                        ))}
                        <ListBox
                            key={-1}
                            button={true}
                            buttonText=">> Lihat +20 kompetisi lain yang tersedia "
                            title={"Kompetisi Lainnya"}
                            level={0}
                            price={0}
                            regCode={""}
                            hue={289}
                        />
                    </ul>
                </section>
                <section id={"dates"} className={styles.dates}>
                    {/* HIGHLIGHTS */}
                    <h2>{translations.HOME_KEY_DATES}</h2>
                    <Hr />
                    <img src={"/imgs/Timeline_2.jpg"} />
                </section>
                <section id={"faq"}>
                    {/* FAQ */}
                    <h2>{translations.HOME_FAQ}</h2>
                    <Hr />
                    <ul className={styles.faqList}>
                        {translations.FAQ.map((faq, index) => (
                            <FAQBox key={index} question={faq.q} answer={faq.a} />
                        ))}
                    </ul>
                </section>
                <section id={"sponsors"}>
                    {/* CALLING OUT SPONSORS */}
                    <h2>{translations.HOME_SPONSORS}</h2>
                    <Hr />
                    <p>{getStringTranslation("HOME_SPONSORS_DESC")}</p>
                    <Button hyperlink newTab href={"https://wa.me/+6282171933493"}>
                        {getStringTranslation("HOME_SPONSORS_CALL")}
                    </Button>
                    <section className={styles.sponsorsList}>
                        {/* <img src="/imgs/ccl.jpg" alt="1" />
                        <img src="/imgs/ccl.jpg" alt="1" />
                        <img src="/imgs/ccl.jpg" alt="1" />
                        <img src="/imgs/ccl.jpg" alt="1" />
                        <img src="/imgs/ccl.jpg" alt="1" />
                        <img src="/imgs/ccl.jpg" alt="1" />
                        <img src="/imgs/ccl.jpg" alt="1" />
                        <img src="/imgs/ccl.jpg" alt="1" />
                        <img src="/imgs/ccl.jpg" alt="1" />
                        <img src="/imgs/ccl.jpg" alt="1" /> */}
                    </section>
                </section>
                <section id={"additional"}>
                    {/* FOOTER */}
                    <h2>{translations.HOME_MORE_INFO}</h2>
                    <Hr />
                    <Button
                        hyperlink
                        newTab
                        href={"https://instagram.com/official.savor"}
                    >
                        INSTAGRAM
                    </Button>
                    <Button hyperlink newTab href={"https://wa.me/+6282177524039"}>
                        CONTACT PERSON
                    </Button>
                    <Button hyperlink newTab href={"https://wa.me/+6282171933493"}>
                        {getStringTranslation("HOME_BUSINESS_INQUIRY")}
                    </Button>
                    <Button
                        hyperlink
                        newTab
                        href={"https://whatsapp.com/channel/0029VbAhRhB96H4RUaaX4x2f"}
                    >
                        WHATSAPP CHANNEL
                    </Button>
                </section>
            </main>
        </GenPage>
    );
};

export default HomePage;
