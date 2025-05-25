import { ReactNode } from "react";
import styles from "@/styles/Button.module.sass";
import Link from "next/link";
import { useRouter } from "next/router";

export interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    arrow?: boolean;
    color?: "primary" | "secondary" | "tertiary";
    size?: "small" | "medium" | "large";
    hyperlink?: boolean;
    href?: string;
    newTab?: boolean;
}

export default function Button({
    children,
    onClick,
    className,
    disabled = false,
    type = "button",
    arrow = false,
    color = "primary",
    size = "medium",
    hyperlink = false,
    href = "",
    newTab = false,
}: ButtonProps) {
    const router = useRouter();

    return (
        <>
            {!hyperlink ? (
                <button
                    onClick={onClick}
                    className={`${className} ${styles.button} ${arrow ? styles.arrow : ""
                        } ${size == "small"
                            ? styles.small
                            : size == "medium"
                                ? styles.medium
                                : styles.large
                        } ${color == "primary" ? styles.primary : ""} ${color == "secondary" ? styles.secondary : ""
                        } ${color == "tertiary" ? styles.tertiary : ""}
                        ${router.pathname == "/run" && styles.run}
                        `}
                    disabled={disabled}
                    type={type}
                >
                    {children}
                </button>
            ) : (
                <button
                    className={`${className} ${styles.button} ${arrow ? styles.arrow : ""
                        } ${size == "small"
                            ? styles.small
                            : size == "medium"
                                ? styles.medium
                                : styles.large
                        } ${color == "primary" ? styles.primary : ""} ${color == "secondary" ? styles.secondary : ""
                        } ${color == "tertiary" ? styles.tertiary : ""}
                        ${router.pathname == "/run" && styles.run}
                        `}
                >
                    <Link href={href} target={newTab ? "_blank" : "_self"}></Link>
                    {children}
                </button>
            )}
        </>
    );
}
