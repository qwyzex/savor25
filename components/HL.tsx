import { ReactNode } from "react"
import styles from "@/styles/components/HL.module.sass"

const HL = ({ children }: { children: ReactNode }) => {
    return (
        <p className={styles.HL}>{children}</p>
    )
}

export default HL;
