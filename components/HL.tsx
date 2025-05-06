import { ReactNode } from "react"
import styles from "@/styles/components/HL.module.sass"

const HL = ({ children }: { children: ReactNode }) => {
    return (
        <i className={styles.HL}>{children}</i>
    )
}

export default HL;
