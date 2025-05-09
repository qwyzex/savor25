import "@/styles/globals.sass";
import "@/styles/international.sass";
import type { AppProps } from "next/app";
import { DataProvider } from "@/context/DataContext";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { useEffect, useState } from "react";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/next";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <LanguageProvider>
            <DataProvider>
                <Head>
                    <link rel="icon" href="/imgs/icon_3.png" />
                </Head>
                <div id="LOVE">
                    <NavMenu />
                </div>
                <Component {...pageProps} />
                <Analytics />
            </DataProvider>
        </LanguageProvider>
    );
}

function NavMenu() {
    const { language, setLanguage, getStringTranslation } = useLanguage();

    const [gradientOn, setGradientOn] = useState<"true" | "false">("false");

    // check for gradient orb in localStorage
    useEffect(() => {
        const orbOn = localStorage.getItem("orbOn");

        if (orbOn) {
            setGradientOn("true");
        } else if (orbOn == null) {
            localStorage.setItem("orbOn", "true");
            setGradientOn("true");
        }
    }, []);

    const handleGradientOn = () => {
        const newValue = gradientOn === "true" ? "false" : "true";
        setGradientOn(newValue); // update state
        localStorage.setItem("orbOn", newValue); // update localStorage
    };

    return (
        <>
            <ul>
                <li>
                    <Link className="link-wrapper" href="/">
                        {/* <span className="fallback">Index</span> */}
                        <div className="shape-wrapper">
                            <div className="shape red-fill jelly">
                                <svg
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 108.1 47"
                                    enableBackground="new 0 0 108.1 47"
                                >
                                    <polygon
                                        fill="#F9336B"
                                        points="29.5,8.5 150.7,0 108.1,32.7 3.1,47"
                                    />
                                </svg>
                            </div>
                            <div className="shape cyan-fill jelly">
                                <svg
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 108.1 47"
                                    enableBackground="new 0 0 108.1 47"
                                >
                                    <polygon
                                        fill="#FFB412"
                                        points="0.3,17 125.1,0 68.8,45.6 24.3,39"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="img-wrapper">
                            <h1>{getStringTranslation("NAV_HOME")}</h1>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className="link-wrapper" href="/pendaftaran">
                        {/* <span className="fallback">Ask</span> */}
                        <div className="shape-wrapper">
                            <div className="shape red-fill jelly">
                                <svg
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 108.1 47"
                                    enableBackground="new 0 0 108.1 47"
                                >
                                    <polygon
                                        fill="#F9336B"
                                        points="0,7.1 127.3,0 32.3,64 4.8,58.2"
                                    />
                                </svg>
                            </div>
                            <div className="shape cyan-fill jelly">
                                <svg
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 108.1 47"
                                    enableBackground="new 0 0 108.1 47"
                                >
                                    <polygon
                                        fill="#FFB412"
                                        points="14,0.5 127.4,0 77.4,164 2.3,61.1"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="img-wrapper">
                            <h1>{getStringTranslation("NAV_REGISTER")}</h1>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className="link-wrapper" href="/juknis">
                        {/* <span className="fallback">Archive</span> */}
                        <div className="shape-wrapper">
                            <div className="shape red-fill jelly">
                                <svg
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 108.1 47"
                                    enableBackground="new 0 0 108.1 47"
                                >
                                    <polygon
                                        fill="#F9336B"
                                        points="15.5,0 70.7,0 118.1,32.7 43.1,47"
                                    />
                                </svg>
                            </div>
                            <div className="shape cyan-fill jelly">
                                <svg
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 108.1 47"
                                    enableBackground="new 0 0 108.1 47"
                                >
                                    <polygon
                                        fill="#FFB412"
                                        points="17.3,0 105.1,0 68.8,45.6 24.3,39"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="img-wrapper">
                            <h1>{getStringTranslation("NAV_GUIDEBOOK")}</h1>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className="link-wrapper" href="/us">
                        {/* <span className="fallback">About</span> */}
                        <div className="shape-wrapper">
                            <div className="shape red-fill jelly">
                                <svg
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 108.1 47"
                                    enableBackground="new 0 0 108.1 47"
                                >
                                    <polygon
                                        fill="#F9336B"
                                        points="19.5,0 110.7,0 80.1,32.7 3.1,47"
                                    />
                                </svg>
                            </div>
                            <div className="shape cyan-fill jelly">
                                <svg
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 108.1 47"
                                    enableBackground="new 0 0 108.1 47"
                                >
                                    <polygon
                                        fill="#FFB412"
                                        points="11,3 85.1,0 118.8,45.6 14.3,29"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="img-wrapper">
                            <h1>{getStringTranslation("NAV_OF_US")}</h1>
                        </div>
                    </Link>
                </li>
            </ul>
            <section className="optionSection">
                {/* <p>{language}</p> */}
                <div>
                    <div>
                        <p>Gradient</p>
                        <p>Orb</p>
                    </div>
                    <input
                        onClick={handleGradientOn}
                        checked={gradientOn == "true" ? true : false}
                        type="checkbox"
                        className="orbButton orbOn"
                    ></input>
                </div>
                <div>
                    <p>{getStringTranslation("LANG_STR")}</p>
                    <button
                        onClick={() => setLanguage("id")}
                        className={`langButton langId ${
                            language == "id" ? "active" : ""
                        }`}
                    ></button>
                    <button
                        onClick={() => setLanguage("en")}
                        className={`langButton langEn ${
                            language == "en" ? "active" : ""
                        }`}
                    ></button>
                </div>
            </section>
        </>
    );
}
