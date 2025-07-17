// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */
import Button from "@/components/Button";
import GenPage from "@/components/GenPage";
import Hr from "@/components/Hr";
import ListBox from "@/components/ListBox";
import Roof from "@/components/Roof";
import { useData } from "@/context/DataContext";
import { useLanguage } from "@/context/LanguageContext";
import styles from "@/styles/Branches.module.sass";
import Head from "next/head";
import { useState } from "react";

const BranchesPage = () => {
    const { language, getStringTranslation, setLanguage } = useLanguage();
    const { data } = useData();

    // State to track current sorting criterion
    const [sortBy, setSortBy] = useState<string>("default"); // Possible values: default, name, level, price, extra

    // Sorting criteria order
    const sortCriteria = ["default", "name", "level", "price", "extra"];
    const sortLabels = {
        default: "Default",
        name: "A-Z",
        level: getStringTranslation("REGIS_SORT_LEVEL"),
        price: getStringTranslation("REGIS_SORT_PRICE"),
        extra: getStringTranslation("REGIS_SORT_EXTRA"),
    };

    // Handle button click to cycle through sorting criteria
    const handleSort = () => {
        const currentIndex = sortCriteria.indexOf(sortBy);
        const nextIndex = (currentIndex + 1) % sortCriteria.length;
        setSortBy(sortCriteria[nextIndex]);
    };

    // Sort data based on current sortBy value
    const sortedData = [...(data || [])].sort((a, b) => {
        switch (sortBy) {
            case "name":
                return a.name.localeCompare(b.name); // A-Z sorting
            case "level":
                return a.level - b.level; // Assumes level is a string (e.g., "Beginner", "Advanced")
            case "price":
                return b.price - a.price; // Assumes price is a number
            case "extra":
                return a.extra.localeCompare(b.extra); // Assumes extra is a string
            case "default":
            default:
                return 0; // Maintain original order (index)
        }
    });

    return (
        <>
            <Head>
                <title>Daftar Lomba SAVOR 25</title>
            </Head>
            <Roof>
                <GenPage>
                    <main className={`mainScene ${styles.main}`}>
                        <section>
                            <h1>{getStringTranslation("REGIS_TITLE")}</h1>
                            <Hr />
                            <p>{getStringTranslation("REGIS_DESC")}</p>
                            <Hr />
                            <p>{getStringTranslation("REGIS_CLOSED_WARNING")}</p>
                            <Button hyperlink href="/juknis">
                                {getStringTranslation("REGIS_JUKNIS")}
                                {" >>"}
                            </Button>
                            <Button onClick={handleSort}>
                                {getStringTranslation("REGIS_SORT")}: {sortLabels[sortBy]}
                            </Button>
                            <ul className={styles.compLists}>
                                {sortedData.map((competition, index) => (
                                    <ListBox
                                        key={index}
                                        title={competition.name}
                                        level={competition.level}
                                        price={competition.price}
                                        regCode={competition.regCode}
                                        hue={competition.hue}
                                    />
                                ))}
                            </ul>
                        </section>
                    </main>
                </GenPage>
            </Roof>
        </>
    );
};

export default BranchesPage;
