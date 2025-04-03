import { ReactNode, createContext, useState, useEffect, useContext } from "react";

// Define the shape of our language data
interface LanguageData {
    [key: string]: string;
}

// Define available languages
type Language = "en" | "id";

// Language data library
const languageLibrary = {
    en: {
        HOME_DESCRIPTION: "Welcome to our competition platform",
        HOME_CHECK_IT_OUT_BUTTON: "CHECK IT OUT!",
        HOME_WATCH_TRAILER: "Watch The Trailer!",
        HOME_LIST_OF_COMPETITIONS: "List of Competitions",
        HOME_KEY_DATES: "Key Dates & Highlights",
        HOME_FAQ: "Frequently Asked Questions",
        HOME_SPONSORS: "Sponsored and Supported By",
        HOME_MORE_INFO: "More Information",
    },
    id: {
        HOME_DESCRIPTION: "Selamat datang di platform kompetisi kami",
        HOME_CHECK_IT_OUT_BUTTON: "LIHAT SEKARANG!",
        HOME_WATCH_TRAILER: "Tonton Trailer!",
        HOME_LIST_OF_COMPETITIONS: "Daftar Kompetisi",
        HOME_KEY_DATES: "Tanggal Penting",
        HOME_FAQ: "Pertanyaan yang Sering Diajukan",
        HOME_SPONSORS: "Didukung dan Disponsori Oleh",
        HOME_MORE_INFO: "Informasi Lebih Lanjut",
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
