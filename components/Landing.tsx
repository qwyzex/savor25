import styles from "@/styles/Landing.module.sass";
// import Image from "next/image";

const Landing = () => {
    return (
        <>
            <main className={styles.container}>
                <div className={styles.gradientBlobContainer}>
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <filter id="goo">
                                <feGaussianBlur
                                    in="SourceGraphic"
                                    stdDeviation="10"
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
                    <div className="g6"></div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.title}>
                        <h1>SAVOR</h1>
                        <p>2025</p>
                    </div>
                    <footer>
                        <div className={styles.orb}>
                            {/* <div className={styles.shroud}></div> */}
                            <div className={styles.reflection}></div>
                            <div className={styles.innerGlow}></div>
                            <div className={styles.outerShadow}></div>
                            {/* <div className={styles.orbGradientBlob}>
                                <svg xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <filter id="igoo">
                                            <feGaussianBlur
                                                in="SourceGraphic"
                                                stdDeviation="10"
                                                result="blur"
                                            />
                                            <feColorMatrix
                                                in="blur"
                                                mode="matrix"
                                                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                                                result="igoo"
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
            </main>
        </>
    );
};

export default Landing;
