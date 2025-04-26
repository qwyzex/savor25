import { ReactNode, createContext, useState, useEffect, useContext } from "react";

// Define the FAQ item type
interface FAQItem {
    q: string;
    a: string;
}

// Define the shape of our language data
interface LanguageData {
    // Special case for FAQ which is an array
    FAQ: FAQItem[];
    // All other keys are strings
    [key: string]: string | FAQItem[];
}

// Type guard function to check if a translation value is a string
function isString(value: string | FAQItem[]): value is string {
    return typeof value === "string";
}

// Define available languages
type Language = "en" | "id";

// Language data library
const languageLibrary: Record<Language, LanguageData> = {
    en: {
        LANG_STR: "Language",
        HOME_COUNTDOWN_TITLE: "History's in the making!",
        HOME_DESC_1: "We're cooking up something special for you! We can't tell you yet.",
        HOME_DESC_2: "But you'll want to be here. The flavor drops in...",
        HOME_BUTTON_ADD_TO_CALENDAR: "Savor every second. Add to Calendar!",
        HOME_TERM_DAYS: "DAYS",
        HOME_TERM_HOURS: "HOURS",
        HOME_TERM_MINUTES: "MINUTES",
        HOME_TERM_SECONDS: "SECONDS",
        HOME_MORE_INFO: "More Information",
        HOME_BUSINESS_INQUIRY: "BUSINESS INQUIRY / PUBLIC RELATION",
        FAQ: [],
    },
    id: {
        LANG_STR: "Bahasa",
        HOME_COUNTDOWN_TITLE: "Kala Wiyasa — saat istimewa kan datang.",
        HOME_DESC_1: "Ada sajian sedang diramu, rahasia hingga waktunya nyata.",
        HOME_DESC_2:
            "Rasa akan mekar dalam waktu — dan dikau, sang pemeran, tengah ditunggu.",
        HOME_TERM_DAYS: "HARI",
        HOME_TERM_HOURS: "JAM",
        HOME_TERM_MINUTES: "MENIT",
        HOME_TERM_SECONDS: "DETIK",
        HOME_BUTTON_ADD_TO_CALENDAR: "Kabari semesta kan kehadiranmu - tandai harinya!",
        HOME_MORE_INFO: "Informasi Lebih Lanjut",
        HOME_BUSINESS_INQUIRY: "PERTANYAAN BISNIS / HUMAS",
        FAQ: [],
    },
};

// Enhanced context props interface with helper functions
interface LanguageContextProps {
    language: Language;
    translations: LanguageData;
    setLanguage: (lang: Language) => void;
    // Helper function to safely get string translations
    getStringTranslation: (key: string) => string;
}

// Create context with default values
export const LanguageContext = createContext<LanguageContextProps>({
    language: "en",
    translations: languageLibrary.en,
    setLanguage: () => { },
    getStringTranslation: () => "",
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

    // Helper function to safely get string translations
    const getStringTranslation = (key: string): string => {
        const value = translations[key];
        if (isString(value)) {
            return value;
        }
        console.warn(`Translation key "${key}" is not a string`);
        return key; // Return the key as fallback
    };

    return (
        <LanguageContext.Provider
            value={{
                language,
                translations,
                setLanguage,
                getStringTranslation,
            }}
        >
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
