import styles from "@/styles/Burger.module.sass";
import { useRef, useState } from "react";
import Box2 from "./boxes/2";
import Box3 from "./boxes/3";
import Box4 from "./boxes/4";
import Box1 from "./boxes/1";

const BurgerMenu = () => {
    const [openBurger, setOpenBurger] = useState<number>(0);

    const menuRef = useRef<HTMLDivElement | null>(null);

    const GradientMenu = () => {
        return (
            <svg
                width="134"
                height="134"
                viewBox="0 0 134 134"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M73.364 2.65328C69.8492 -0.861435 64.1508 -0.861437 60.636 2.65328L2.65328 60.636C-0.861435 64.1508 -0.861437 69.8492 2.65328 73.364L60.636 131.347C64.1508 134.861 69.8492 134.861 73.364 131.347L131.347 73.364C134.861 69.8492 134.861 64.1508 131.347 60.636L73.364 2.65328ZM72.9325 16.364C69.4178 12.8492 63.7193 12.8492 60.2046 16.364L16.364 60.2046C12.8492 63.7193 12.8492 69.4178 16.364 72.9325L60.2046 116.773C63.7193 120.288 69.4178 120.288 72.9325 116.773L116.773 72.9325C120.288 69.4178 120.288 63.7193 116.773 60.2046L72.9325 16.364Z"
                    fill="url(#paint0_linear_6_16)"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_6_16"
                        x1="45.5"
                        y1="-17.5"
                        x2="101.5"
                        y2="159"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#FFB412" />
                        <stop offset="0.98579" stop-color="#F9336B" />
                    </linearGradient>
                </defs>
            </svg>
        );
    };

    const handleBurger = () => {
        if (openBurger == 0) {
            openMenu();
        } else if (openBurger == 1) {
            closeMenu();
        }
    };

    const openMenu = () => {
        if (menuRef.current) {
            setOpenBurger(1);
        }
    };

    const closeMenu = () => {
        if (menuRef.current) {
            setOpenBurger(2);

            // Delay hiding the menu after the animation
            setTimeout(() => {
                setOpenBurger(0);
            }, 300); // Match animation duration (0.3s)
        }
    };

    return (
        <div className={styles.container}>
            <header className={openBurger == 1 ? styles.open : ""}>
                <section
                    ref={menuRef}
                    className={`${styles.theMenu} ${
                        openBurger == 1 ? styles.opening : ""
                    } ${openBurger == 2 ? styles.closing : ""}`}
                >
                    <Box1>
                        <a href="#">HOME</a>
                    </Box1>
                    <Box2>
                        <a href="#">BRANCHES</a>
                    </Box2>
                    <Box3>
                        <a href="#">BOOKLET</a>
                    </Box3>
                    <Box4>
                        <a href="#">WHAT OF US</a>
                    </Box4>
                </section>
                <h1>Homepage</h1>
                <button onClick={handleBurger}>
                    <div>
                        <GradientMenu />
                    </div>
                </button>
            </header>
        </div>
    );
};

export default BurgerMenu;
