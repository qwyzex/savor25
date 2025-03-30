import { ReactNode } from "react";
import styles from "@/styles/Button.module.sass";
import Link from "next/link";

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
}: ButtonProps) {
    return (
        <>
            {!hyperlink ? (
                <button
                    onClick={onClick}
                    className={`${className} ${styles.button} ${
                        arrow ? styles.arrow : ""
                    } ${
                        size == "small"
                            ? styles.small
                            : size == "medium"
                            ? styles.medium
                            : styles.large
                    } ${color == "primary" ? styles.primary : ""} ${
                        color == "secondary" ? styles.secondary : ""
                    } ${color == "tertiary" ? styles.tertiary : ""}`}
                    disabled={disabled}
                    type={type}
                >
                    {children}
                </button>
            ) : (
                <div
                    className={`${className} ${styles.button} ${
                        arrow ? styles.arrow : ""
                    } ${
                        size == "small"
                            ? styles.small
                            : size == "medium"
                            ? styles.medium
                            : styles.large
                    } ${color == "primary" ? styles.primary : ""} ${
                        color == "secondary" ? styles.secondary : ""
                    } ${color == "tertiary" ? styles.tertiary : ""}`}
                >
                    <a href={href}></a>
                    {children}
                </div>
            )}
        </>
    );
}
