import styles from "@/styles/Landing.module.sass";
// import Image from "next/image";

const Landing = () => {
    return (
        <>
            <main className={styles.container}>
                <div className={styles.wrapper}>
                    <div>
                        <h1>SAVOR</h1>
                        <p>2025</p>
                    </div>
                    <footer>
                        {/* <Image
                        src={"/imgs/sun_grain.png"}
                        alt="asdf"
                        width={200}
                        height={200}
                    /> */}

                        <div className={styles.orb}>
                            <div className={styles.shroud}></div>
                        </div>
                    </footer>
                </div>
            </main>
        </>
    );
};

export default Landing;
