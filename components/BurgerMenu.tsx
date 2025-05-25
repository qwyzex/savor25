import { useLanguage } from "@/context/LanguageContext";
import styles from "@/styles/Burger.module.sass";
import { useRouter } from "next/router";
// import Link from "next/link";

const BurgerMenu = () => {
    const { getStringTranslation } = useLanguage();
    const router = useRouter();

    const pageName = () => {
        switch (router.pathname) {
            case "/":
                return "Homepage";
            case "/pendaftaran":
                return getStringTranslation("BURGER_REGISTER");
            case "/juknis":
                return getStringTranslation("BURGER_GUIDEBOOK");
            case "/us":
                return getStringTranslation("BURGER_OF_US");
            case "/run":
                return "SAVORRUN";
            default:
                return "General";
        }
    }


    const GradientMenu = () => {
        // return (
        //     <svg
        //         width="134"
        //         height="134"
        //         viewBox="0 0 134 134"
        //         fill="none"
        //         xmlns="http://www.w3.org/2000/svg"
        //     >
        //         <path
        //             fillRule="evenodd"
        //             clipRule="evenodd"
        //             d="M73.364 2.65328C69.8492 -0.861435 64.1508 -0.861437 60.636 2.65328L2.65328 60.636C-0.861435 64.1508 -0.861437 69.8492 2.65328 73.364L60.636 131.347C64.1508 134.861 69.8492 134.861 73.364 131.347L131.347 73.364C134.861 69.8492 134.861 64.1508 131.347 60.636L73.364 2.65328ZM72.9325 16.364C69.4178 12.8492 63.7193 12.8492 60.2046 16.364L16.364 60.2046C12.8492 63.7193 12.8492 69.4178 16.364 72.9325L60.2046 116.773C63.7193 120.288 69.4178 120.288 72.9325 116.773L116.773 72.9325C120.288 69.4178 120.288 63.7193 116.773 60.2046L72.9325 16.364Z"
        //             fill="url(#paint0_linear_6_16)"
        //         />
        //         <defs>
        //             <linearGradient
        //                 id="paint0_linear_6_16"
        //                 x1="45.5"
        //                 y1="-17.5"
        //                 x2="101.5"
        //                 y2="159"
        //                 gradientUnits="userSpaceOnUse"
        //             >
        //                 <stop stop-color="#FFB412" />
        //                 <stop offset="0.98579" stopColor="#F9336B" />
        //             </linearGradient>
        //         </defs>
        //     </svg>
        // );

        return (
            <svg width="135" height="134" viewBox="0 0 135 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M73.6361 2.63604C70.1214 -0.878679 64.4229 -0.878681 60.9082 2.63604L2.92541 60.6188C-0.589311 64.1335 -0.589313 69.832 2.92541 73.3467L60.9082 131.329C64.4229 134.844 70.1214 134.844 73.6361 131.329L131.619 73.3467C135.134 69.832 135.134 64.1335 131.619 60.6188L73.6361 2.63604ZM73.2046 16.3467C69.6899 12.832 63.9914 12.832 60.4767 16.3467L16.6361 60.1873C13.1214 63.7021 13.1214 69.4005 16.6361 72.9153L60.4767 116.756C63.9914 120.271 69.6899 120.271 73.2046 116.756L117.045 72.9153C120.56 69.4005 120.56 63.7021 117.045 60.1873L73.2046 16.3467Z" fill="url(#paint0_linear_71_13)" />
                <path d="M50.4558 41.9706L92.8822 84.397H75.9117L63.1837 71.6691L41.9705 50.4558L50.4558 41.9706Z" fill="#D9D9D9" />
                <path d="M75.9117 33.4853L88.6396 46.2132L109.853 67.4264L101.368 75.9117L58.9411 33.4853L75.9117 33.4853Z" fill="#D9D9D9" />
                <path d="M41.9706 67.4264L54.6985 80.1543L75.9117 101.368L58.9411 101.368L46.2132 88.6396L25 67.4264L41.9706 67.4264Z" fill="#D9D9D9" />
                <defs>
                    <linearGradient id="paint0_linear_71_13" x1="46.9056" y1="-13.0623" x2="99.9533" y2="154.132" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFB412" />
                        <stop offset="0.98579" stop-color="#F9336B" />
                    </linearGradient>
                </defs>
            </svg>
        )
    };

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
        <>
            <div className={`headerContainer ${styles.container}`}>
                <header id="_header" className={styles.header}>
                    <h1 className={styles.title}>SAVOR 25</h1>
                    <button onClick={handleBurger}>
                        <div>
                            <GradientMenu />
                        </div>
                    </button>
                    <h1 className={styles.pageName}>{pageName()}</h1>
                </header>
            </div>
        </>
    );
};

export default BurgerMenu;
