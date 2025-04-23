import "@/styles/globals.sass";
import "@/styles/international.sass";
import type { AppProps } from "next/app";
import { DataProvider } from "@/context/DataContext";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import Head from "next/head";
import { Analytics } from '@vercel/analytics/next';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <LanguageProvider>
            <DataProvider>
                {" "}
                <div id="LOVE">
                    <NavMenu />
                </div>
                <Head>
                    <link rel="icon" href="/imgs/icon_3.png" />
                </Head>
                <Component {...pageProps} />
                <Analytics />
            </DataProvider>
        </LanguageProvider>
    );
}

function NavMenu() {
    const { language, setLanguage, getStringTranslation } = useLanguage();

    return (
        <>
            <section className="optionSection">
                <div>
                    <p>{getStringTranslation("LANG_STR")}</p>
                    <button
                        onClick={() => setLanguage("id")}
                        className={`langButton langId ${language == "id" ? "active" : ""
                            }`}
                    ></button>
                    <button
                        onClick={() => setLanguage("en")}
                        className={`langButton langEn ${language == "en" ? "active" : ""
                            }`}
                    ></button>
                </div>
            </section>
        </>
    );
}
