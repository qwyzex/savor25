import { ReactNode, createContext, useState, useEffect, useContext } from "react";

// Define the shape of our language data
interface LanguageData {
    HOME_DESCRIPTION: string;
    HOME_TITLE_1: string;
    PAGE2_TITLE: string;
    [key: string]: string; // Allow for additional keys
}

// Define available languages
type Language = "en" | "id";

// Language data library
const languageLibrary = {
    en: {
        HOME_DESCRIPTION: "Welcome to our competition platform",
        HOME_TITLE_1: "Join the Fun",
        PAGE2_TITLE: "Competition Details",
    },
    id: {
        HOME_DESCRIPTION: "Selamat datang di platform kompetisi kami",
        HOME_TITLE_1: "Bergabunglah dalam Keseruan",
        PAGE2_TITLE: "Detail Kompetisi",
    },
};

// Context props interface
interface LanguageContextProps {
    language: Language;
    translations: LanguageData;
    setLanguage: (lang: Language) => void;
}

// Create context with default values
export const LanguageContext = createContext<LanguageContextProps>({
    language: "en",
    translations: languageLibrary.en,
    setLanguage: () => {},
});

interface LanguageProviderProps {
    children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
    // State to hold current language
    const [language, setLanguageState] = useState<Language>("en");

    // Effect to check localStorage on mount
    useEffect(() => {
        if (typeof window !== "undefined") {
            // Check if we're in browser
            const storedLang = localStorage.getItem("language") as Language;
            if (storedLang && (storedLang === "en" || storedLang === "id")) {
                setLanguageState(storedLang);
            }
        }
    }, []);

    // Function to update language and save to localStorage
    const setLanguage = (newLang: Language) => {
        setLanguageState(newLang);
        if (typeof window !== "undefined") {
            localStorage.setItem("language", newLang);
        }
    };

    // Get the appropriate translations based on current language
    const translations = languageLibrary[language];

    return (
        <LanguageContext.Provider value={{ language, translations, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

// Optional: Custom hook to use the context easily
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
