// import { DataContext } from "@/context/DataContext";
import styles from "@/styles/Landing.module.sass";
import { useState } from "react";
// import { useContext } from "react";
// import Image from "next/image";

const Landing = () => {
    // const { data } = useContext(DataContext);

    const [isNova, setIsNova] = useState(false);
    const [superNova, setSuperNova] = useState(false);

    const handleNova = () => {
        setIsNova(true);
        setTimeout(() => {
            setSuperNova(true);
        }, 6000);
    };

    const StarSVG = () => {
        return (
            <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M50 0C50 27.6142 27.6142 50 0 50C27.6142 50 50 72.3858 50 100C50 72.3858 72.3858 50 100 50C72.3858 50 50 27.6142 50 0Z"
                    fill="white"
                />
            </svg>
        );
    };

    return (
        <>
            <main className={`${styles.container} ${isNova && styles.novaContainer}`}>
                <div className={styles.darkBg}></div>
                {!superNova && (
                    <div
                        className={`${styles.gradientBlobContainer} ${
                            isNova && styles.novaGradientBlobContainer
                        }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <filter id="goo">
                                    <feGaussianBlur
                                        in="SourceGraphic"
                                        stdDeviation="4"
                                        result="blur"
                                    />
                                    <feColorMatrix
                                        in="blur"
                                        mode="matrix"
                                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                                        result="goo"
                                    />
                                    <feBlend in="SourceGraphic" in2="goo" />
                                </filter>
                            </defs>
                        </svg>
                        <div className={styles.g1}></div>
                        <div className={styles.g2}></div>
                        <div className={styles.g3}></div>
                        <div className={styles.g4}></div>
                        <div className={styles.g5}></div>
                    </div>
                )}
                {!superNova && (
                    <div className={`${styles.wrapper} ${isNova && styles.novaWrapper}`}>
                        <div className={styles.title}>
                            <h1>SAVOR</h1>
                            <p>2025</p>
                        </div>
                        <div className={styles.wrapperMain}>
                            <button onClick={handleNova}>
                                <StarSVG />
                            </button>
                        </div>
                        <footer className={`${isNova && styles.novaFooter}`}>
                            <div className={styles.orb}>
                                {/* <div className={styles.shroud}></div> */}
                                {/* <div className={styles.reflection}></div>
                                <div className={styles.innerGlow}></div>
                                <div className={styles.outerShadow}></div>
                                <div className={styles.orbGradientBlob}>
                                    <svg xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <filter id="igoo">
                                                <feGaussianBlur
                                                    in="SourceGraphic"
                                                    stdDeviation="3"
                                                    result="blur"
                                                />
                                                <feBlend in="SourceGraphic" in2="igoo" />
                                            </filter>
                                        </defs>
                                    </svg>
                                    <div className={styles.g1}></div>
                                    <div className={styles.g2}></div>
                                    <div className={styles.g3}></div>
                                    <div className={styles.g4}></div>
                                    <div className={styles.g5}></div>
                                </div> */}
                            </div>
                        </footer>
                    </div>
                )}
            </main>
        </>
    );
};

export default Landing;
