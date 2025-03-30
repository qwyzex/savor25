// import { DataContext } from "@/context/DataContext";
import styles from "@/styles/Landing.module.sass";
import { useState, Dispatch, SetStateAction } from "react";
// import { useContext } from "react";
// import Image from "next/image";

interface LandingProps {
    bbSetter: Dispatch<SetStateAction<boolean>>;
}

const Landing = ({ bbSetter }: LandingProps) => {
    // const { data } = useContext(DataContext);

    const [preNova, setPreNova] = useState(false);
    const [isNova, setIsNova] = useState(false);
    const [superNova, setSuperNova] = useState(false);
    const [light, letThereBe] = useState(false);
    // const [hideOrb, setHideOrb] = useState(false);
    // const orbRef = useRef<HTMLDivElement>(null);

    // Handle the nova animation
    const handleNova = () => {
        setPreNova(true);
        setTimeout(() => {
            setIsNova(true);
        }, 1000);
        setTimeout(() => {
            bbSetter(true);
        }, 4000);
        setTimeout(() => {
            setSuperNova(true);
        }, 5000);
        setTimeout(() => {
            letThereBe(true);
        }, 6000);
    };

    // // Apply transform instead of width/height for performance
    // useEffect(() => {
    //     if (!orbRef.current) return;

    //     // Using transform for animations is more performant than changing width/height
    //     if (superNova) {
    //         // Add the will-change property before animation starts
    //         // orbRef.current.style.willChange = "transform";
    //     }
    // }, [superNova]);

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
            {!light && (
                <main
                    className={`${styles.container} ${
                        preNova ? styles.preNovaContainer : ""
                    } ${isNova ? styles.novaContainer : ""} ${
                        superNova ? styles.superContainer : ""
                    }`}
                >
                    {/* {light
                    ? "And God Said..."
                    : superNova
                    ? "Super Nova"
                    : isNova
                    ? "Nova"
                    : preNova
                    ? "Pre Nova"
                    : "Idle"} */}
                    {!superNova && (
                        <>
                            {isNova && (
                                <>
                                    <div className={`${styles.half} ${styles.h2}`}></div>
                                    <div className={`${styles.half} ${styles.h1}`}></div>
                                </>
                            )}
                            <div className={`${styles.half} ${styles.h0}`}></div>
                        </>
                    )}
                    {!isNova && (
                        <div
                            className={`${styles.gradientBlobContainer} ${
                                preNova ? styles.novaGradientBlobContainer : ""
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
                    {!light && (
                        <>
                            <div
                                className={`${styles.wrapper} ${
                                    preNova ? styles.preWrapper : ""
                                } ${isNova ? styles.novaWrapper : ""} ${
                                    superNova ? styles.superWrapper : ""
                                }`}
                            >
                                {!superNova && (
                                    <>
                                        <div className={styles.wrapperMain}>
                                            <button onClick={handleNova}>
                                                <StarSVG />
                                            </button>
                                        </div>
                                        <div className={`noSelection ${styles.title}`}>
                                            <span>
                                                <p>S</p>
                                            </span>
                                            <span>
                                                <p>A</p>
                                            </span>
                                            <span>
                                                <p>V</p>
                                            </span>
                                            <span>
                                                <p>O</p>
                                            </span>
                                            <span>
                                                <p>R</p>
                                            </span>
                                            <span>
                                                <button onClick={handleNova}>
                                                    <StarSVG />
                                                </button>
                                            </span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </>
                    )}
                </main>
            )}
        </>
    );
};

export default Landing;

// {!hideOrb && (
//     <footer className={`${isNova ? styles.novaFooter : ""}`}>
//         <div
//             ref={orbRef}
//             className={`${styles.orb} ${
//                 superNova ? styles.performantOrb : ""
//             }`}
//         >
//             <div className={styles.orbGradientBlob}>
//                 <svg xmlns="http://www.w3.org/2000/svg">
//                     <defs>
//                         <filter id="igoo">
//                             <feGaussianBlur
//                                 in="SourceGraphic"
//                                 stdDeviation="3"
//                                 result="blur"
//                             />
//                             <feBlend in="SourceGraphic" in2="igoo" />
//                         </filter>
//                     </defs>
//                 </svg>
//                 <div className={styles.g1}></div>
//                 <div className={styles.g2}></div>
//                 <div className={styles.g3}></div>
//                 {/* <div className={styles.g4}></div>
//                 <div className={styles.g5}></div> */}
//             </div>
//             <div className={styles.highlight}></div>
//         </div>
//     </footer>
// )}
