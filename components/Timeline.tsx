import styles from "@/styles/components/Timeline.module.sass";

interface TimelineProps {
    active: Array<number> | undefined;
}

const Timeline = ({ active }: TimelineProps) => {
    const dates: { [key: number]: string } = {
        [-1]: "22 Juli 2025",
        0: "23 Juli 2025",
        1: "24 Juli 2025",
        2: "25 Juli 2025",
        3: "26 Juli 2025",
        4: "27 Juli 2025",
        5: "28 Juli 2025",
        6: "29 Juli 2025",
        7: "30 Juli 2025",
        8: "31 Juli 2025",
        9: "1 Agustus 2025",
        10: "2 Agustus 2025",
    };

    return (
        <>
            <div className={styles.main_timeline}>
                {/* DESKTOP */}
                <section className={styles.wide}>
                    <div title={dates[-1]} className={`${active?.includes(-1) ? styles.active : ""} ${styles.bf}`}>
                        H-2
                        <div className={styles.tooltip}>
                            <p>{dates[-1]}</p>
                            <div className={styles.tooltipArrow} />
                        </div>
                    </div>
                    <div title={dates[0]} className={`${active?.includes(0) ? styles.active : ""} ${styles.bf}`}>
                        H-1
                        <div className={styles.tooltip}>
                            <p>{dates[0]}</p>
                            <div className={styles.tooltipArrow} />
                        </div>
                    </div>
                    <div title={dates[1]} className={`${active?.includes(1) ? styles.active : ""}`}>
                        H+1
                        <div className={styles.tooltip}>
                            <p>{dates[1]}</p>
                            <div className={styles.tooltipArrow} />
                        </div>
                    </div>
                    <div title={dates[2]} className={`${active?.includes(2) ? styles.active : ""}`}>
                        H+2
                        <div className={styles.tooltip}>
                            <p>{dates[2]}</p>
                            <div className={styles.tooltipArrow} />
                        </div>
                    </div>
                    <div title={dates[3]} className={`${active?.includes(3) ? styles.active : ""}`}>
                        H+3
                        <div className={styles.tooltip}>
                            <p>{dates[3]}</p>
                            <div className={styles.tooltipArrow} />
                        </div>
                    </div>
                    <div title={dates[4]} className={`${active?.includes(4) ? styles.active : styles.libur}`}>
                        H+4
                        <div className={styles.tooltip}>
                            <p>{dates[4]}</p>
                            <div className={styles.tooltipArrow} />
                        </div>
                    </div>
                </section>
                <section className={styles.wide}>
                    <div title={dates[5]} className={`${active?.includes(5) ? styles.active : ""}`}>
                        H+5
                        <div className={styles.tooltip}>
                            <p>{dates[5]}</p>
                            <div className={styles.tooltipArrow} />
                        </div>
                    </div>
                    <div title={dates[6]} className={`${active?.includes(6) ? styles.active : ""}`}>
                        H+6
                        <div className={styles.tooltip}>
                            <p>{dates[6]}</p>
                            <div className={styles.tooltipArrow} />
                        </div>
                    </div>
                    <div title={dates[7]} className={`${active?.includes(7) ? styles.active : ""}`}>
                        H+7
                        <div className={styles.tooltip}>
                            <p>{dates[7]}</p>
                            <div className={styles.tooltipArrow} />
                        </div>
                    </div>
                    <div title={dates[8]} className={`${active?.includes(8) ? styles.active : ""}`}>
                        H+8
                        <div className={styles.tooltip}>
                            <p>{dates[8]}</p>
                            <div className={styles.tooltipArrow} />
                        </div>
                    </div>
                    <div title={dates[9]} className={`${active?.includes(9) ? styles.active : styles.libur}`}>
                        H+9
                        <div className={styles.tooltip}>
                            <p>{dates[9]}</p>
                            <div className={styles.tooltipArrow} />
                        </div>
                    </div>
                    <div title={dates[10]} className={`${active?.includes(10) ? styles.active : ""}`}>
                        H+10
                        <div className={styles.tooltip}>
                            <p>{dates[10]}</p>
                            <div className={styles.tooltipArrow} />
                        </div>
                    </div>
                </section>

                {/* MOBILE */}
                <section className={styles.small}>
                    <div title={dates[-1]} className={`${active?.includes(0) ? styles.active : ""} ${styles.bf}`}>
                        H-2
                        <div className={styles.tooltip}>
                            <p>{dates[-1]}</p>
                            <div className={styles.tooltipArrow} />
                        </div>
                    </div>
                    <div title={dates[0]} className={`${active?.includes(0) ? styles.active : ""} ${styles.bf}`}>
                        H-1
                        <div className={styles.tooltip}>
                            <p>{dates[0]}</p>
                            <div className={styles.tooltipArrow} />
                        </div>
                    </div>
                    <div title={dates[1]} className={`${active?.includes(1) ? styles.active : ""}`}>
                        H+1
                        <div className={styles.tooltip}>
                            <p>{dates[1]}</p>
                            <div className={styles.tooltipArrow} />
                        </div>
                    </div>
                    <div title={dates[2]} className={`${active?.includes(2) ? styles.active : ""}`}>
                        H+2
                        <div className={styles.tooltip}>
                            <p>{dates[2]}</p>
                            <div className={styles.tooltipArrow} />
                        </div>
                    </div>
                </section>
                <section className={styles.small}>
                    <div title={dates[3]} className={`${active?.includes(3) ? styles.active : ""}`}>
                        H+3
                        <div className={styles.tooltip}>
                            <p>{dates[3]}</p>
                            <div className={styles.tooltipArrow} />
                        </div>
                    </div>
                    <div title={dates[4]} className={`${active?.includes(4) ? styles.active : styles.libur}`}>
                        H+4
                        <div className={styles.tooltip}>
                            <p>{dates[4]}</p>
                            <div className={styles.tooltipArrow} />
                        </div>
                    </div>
                    <div title={dates[5]} className={`${active?.includes(5) ? styles.active : ""}`}>
                        H+5
                        <div className={styles.tooltip}>
                            <p>{dates[5]}</p>
                            <div className={styles.tooltipArrow} />
                        </div>
                    </div>
                    <div title={dates[6]} className={`${active?.includes(6) ? styles.active : ""}`}>
                        H+6
                        <div className={styles.tooltip}>
                            <p>{dates[6]}</p>
                            <div className={styles.tooltipArrow} />
                        </div>
                    </div>
                </section>
                <section className={styles.small}>
                    <div title={dates[7]} className={`${active?.includes(7) ? styles.active : ""}`}>
                        H+7
                        <div className={styles.tooltip}>
                            <p>{dates[7]}</p>
                            <div className={styles.tooltipArrow} />
                        </div>
                    </div>
                    <div title={dates[8]} className={`${active?.includes(8) ? styles.active : ""}`}>
                        H+8
                        <div className={styles.tooltip}>
                            <p>{dates[8]}</p>
                            <div className={styles.tooltipArrow} />
                        </div>
                    </div>
                    <div title={dates[9]} className={`${active?.includes(9) ? styles.active : styles.libur}`}>
                        H+9
                        <div className={styles.tooltip}>
                            <p>{dates[9]}</p>
                            <div className={styles.tooltipArrow} />
                        </div>
                    </div>
                    <div title={dates[10]} className={`${active?.includes(10) ? styles.active : ""}`}>
                        H+10
                        <div className={styles.tooltip}>
                            <p>{dates[10]}</p>
                            <div className={styles.tooltipArrow} />
                        </div>
                    </div>
                </section>
                <article>
                    <div>
                        <div></div>
                        <p>
                            Lomba Lain
                        </p>
                    </div>
                    <div>
                        <div></div>
                        <p>
                            Dilaksanakan
                        </p>
                    </div>
                    <div>
                        <div></div>
                        <p>
                            Pra-Pembukaan
                        </p>
                    </div>
                    <div>
                        <div></div>
                        <p>
                            Libur
                        </p>
                    </div>
                </article>
            </div>
        </>
    );
};

export default Timeline;
