import styles from "@/styles/components/Timeline.module.sass";

interface TimelineProps {
    active: Array<number>;
}

const Timeline = ({ active }: TimelineProps) => {
    return (
        <>
            <div className={styles.main_timeline}>
                <section>
                    <div className={styles.bf}>H-1</div>
                    <div className={`${active.includes(1) ? styles.active : ""}`}>
                        H+1
                    </div>
                    <div className={`${active.includes(2) ? styles.active : ""}`}>
                        H+2
                    </div>
                    <div className={`${active.includes(3) ? styles.active : ""}`}>
                        H+3
                    </div>
                    <div className={styles.libur}>H+4</div>
                </section>
                <section>
                    <div className={`${active.includes(5) ? styles.active : ""}`}>
                        H+5
                    </div>
                    <div className={`${active.includes(6) ? styles.active : ""}`}>
                        H+6
                    </div>
                    <div className={`${active.includes(7) ? styles.active : ""}`}>
                        H+7
                    </div>
                    <div className={`${active.includes(8) ? styles.active : ""}`}>
                        H+8
                    </div>
                    <div className={styles.libur}>H+9</div>
                    <div className={`${active.includes(10) ? styles.active : ""}`}>
                        H+10
                    </div>
                </section>
            </div>
        </>
    );
};

export default Timeline;
