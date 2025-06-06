import styles from "@/styles/Roof.module.sass";
import { useRouter } from "next/router";
import { ReactNode } from "react";
interface RoofType {
    children: ReactNode;
}

const Roof = ({ children }: RoofType) => {
    const router = useRouter();

    const handleBurger = () => {
        const root = document.getElementById("_roof");
        const header = document.getElementById("_header");
        if (!root || !header) return;

        const isShifted = root.classList.contains("shifted");
        const isOpen = header.classList.contains("headerNavOpen");

        if (!isShifted && !isOpen) {
            root.classList.add("shifted");
            header.classList.add("headerNavOpen");
        } else {
            root.classList.remove("shifted");
            header.classList.remove("headerNavOpen");
        }
    };

    return (
        <div id={"_roof"} className={`${router.pathname == "/run" ? styles.run : ""} ${styles.roof}`}>
            <div className={"closeNavOverlay"} onClick={handleBurger}></div>
            {children}
        </div>
    );
};

export default Roof;
