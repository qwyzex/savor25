import GenPage from "./GenPage";
import styles from "@/styles/Home.module.sass";
import Hr from "./Hr";
import Button from "./Button";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";

const HomePage = () => {
    const { getStringTranslation } = useLanguage();

    const [timeLeft, setTimeLeft] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    // Replace this with your actual target time
    const targetDate = new Date("2025-05-02T17:00:00Z");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const diff = targetDate.getTime() - now.getTime();

            if (diff <= 0) {
                clearInterval(interval);
                setTimeLeft({
                    days: "00",
                    hours: "00",
                    minutes: "00",
                    seconds: "00",
                });
                return;
            }

            const totalSeconds = Math.floor(diff / 1000);
            const days = Math.floor(totalSeconds / 86400);
            const hours = Math.floor((totalSeconds % 86400) / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;

            setTimeLeft({
                days: String(days).padStart(2, "0"),
                hours: String(hours).padStart(2, "0"),
                minutes: String(minutes).padStart(2, "0"),
                seconds: String(seconds).padStart(2, "0"),
            });
        }, 1000);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const createGoogleCalendarUrl = () => {
        const title = encodeURIComponent("Savor Open Registration Day");
        const details = encodeURIComponent(
            "Don't miss Savor 2025 Open Registration Date! Visit https://savor25.vercel.app for more information and registration details. See you there! 🎉✨🎊🎈🎆🎇"
        );
        const location = encodeURIComponent("Metro, Lampung, Indonesia");

        // Format: YYYYMMDDTHHmmssZ (UTC time)
        const startUTC = "20250502T170000Z";
        const endUTC = "20250502T180000Z";

        return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${startUTC}/${endUTC}`;
    };

    return (
        <GenPage>
            <main className={`mainScene ${styles.main}`}>
                <section id={styles.countdown}>
                    <h1>{getStringTranslation("HOME_COUNTDOWN_TITLE")}</h1>
                    <Hr />
                    <p>
                        {getStringTranslation("HOME_DESC_1")}
                        <br />
                        {getStringTranslation("HOME_DESC_2")}
                        <br />
                    </p>
                    <div className={styles.numbers}>
                        <div>
                            <h1>{timeLeft.days}</h1>
                            <p>{getStringTranslation("HOME_TERM_DAYS")}</p>
                        </div>
                        <h2>{":"}</h2>
                        <div>
                            <h1>{timeLeft.hours}</h1>
                            <p>{getStringTranslation("HOME_TERM_HOURS")}</p>
                        </div>
                        <h2>{":"}</h2>
                        <div>
                            <h1>{timeLeft.minutes}</h1>
                            <p>{getStringTranslation("HOME_TERM_MINUTES")}</p>
                        </div>
                        <h2>{":"}</h2>
                        <div>
                            <h1>{timeLeft.seconds}</h1>
                            <p>{getStringTranslation("HOME_TERM_SECONDS")}</p>
                        </div>
                    </div>
                    <Button
                        hyperlink
                        href={createGoogleCalendarUrl()}
                        className={styles.addToCalendar}
                    >
                        {getStringTranslation("HOME_BUTTON_ADD_TO_CALENDAR")}
                    </Button>
                </section>
                <section id={"additional"}>
                    {/* FOOTER */}
                    <h1>{getStringTranslation("HOME_MORE_INFO")}</h1>
                    <Hr />
                    <Button hyperlink href={"https://www.instagram.com/official.savor"}>
                        INSTAGRAM
                    </Button>
                    <Button hyperlink href={"https://wa.me/+6282177524039"}>
                        CONTACT PERSON
                    </Button>
                    <Button hyperlink href={"https://wa.me/+6282171933493"}>
                        {getStringTranslation("HOME_BUSINESS_INQUIRY")}
                    </Button>
                </section>
            </main>
        </GenPage>
    );
};

export default HomePage;
