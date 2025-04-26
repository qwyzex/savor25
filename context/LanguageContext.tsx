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
        NAV_HOME: "HOME",
        NAV_REGISTER: "REGISTER",
        NAV_GUIDEBOOK: "GUIDEBOOK",
        NAV_OF_US: "& OF US",
        LANG_STR: "Language",
        HOME_DESCRIPTION: "Welcome to our competition platform",
        HOME_CHECK_IT_OUT_1_BUTTON: "CHECK OUT THE TRAILER!",
        HOME_CHECK_IT_OUT_2_BUTTON: "SEE THE LIST OF COMPETITIONS!",
        HOME_WATCH_TRAILER: "Watch The Trailer!",
        HOME_LIST_OF_COMPETITIONS: "List of Competitions",
        HOME_KEY_DATES: "Key Dates & Highlights",
        HOME_FAQ: "Frequently Asked Questions",
        HOME_SPONSORS: "Sponsored and Supported By",
        HOME_MORE_INFO: "More Information",
        HOME_BUSINESS_INQUIRY: "BUSINESS INQUIRY / PUBLIC RELATION",
        FAQ: [
            {
                q: "What is Savor?",
                a: "Savor is a competitive event organized by SMANSA’s student council, bringing together students to compete, collaborate, and showcase their talents across various categories.",
            },
            {
                q: "Who can participate in Savor?",
                a: "All Elementary School, Middleschool and Highschool students of Lampung are welcome to participate. Some competitions may have specific eligibility criteria based on grade level or extracurricular affiliation.",
            },
            {
                q: "Do I need to register for Savor?",
                a: "Yes, participants must register online before the deadline to compete in their chosen events. Walk-in participation is not allowed.",
            },
            {
                q: "Is there a participation fee?",
                a: "There are fees to participate in a category of competition. Details are listed in the competitions registration page and in the Guidebook.",
            },
            {
                q: "Where can I find the schedule for the events?",
                a: "The full schedule is available on the Savor homepage. You can also find updates through official OSIS social media channels.",
            },
            {
                q: "Can I join more than one competition?",
                a: "Yes, as long as the competition times don’t overlap. Be sure to check the schedule before registering for multiple events!",
            },
            {
                q: "Will there be awards or certificates?",
                a: "Absolutely! Winners will receive trophies and certificates, some categories may include development fund.",
            },
            {
                q: "What should I wear during Savor?",
                a: "Participants should wear their school uniform unless their category involves a performance or role that requires a specific costume. Please refer back to each category for details.",
            },
            {
                q: "Can friends & the public attend even if they’re not competing?",
                a: "Yes! Everybody are encouraged to attend, support their friends, and enjoy the festivities. Some competitions are open for audience viewing.",
            },
            {
                q: "Who should I contact for more information?",
                a: 'You can contact the general contact person through the "More Information" section of the Homepage.',
            },
        ],
        REGIS_TITLE: "Competitions List",
        REGIS_SORT: "SORT",
        REGIS_SORT_LEVEL: "Level",
        REGIS_SORT_PRICE: "Price",
        REGIS_SORT_EXTRA: "Extracurricular",
    },
    id: {
        NAV_HOME: "BERANDA",
        NAV_REGISTER: "DAFTAR",
        NAV_GUIDEBOOK: "JUKNIS",
        NAV_OF_US: "DAN KAMI!",
        LANG_STR: "::Bahasa",
        HOME_DESCRIPTION: "Selamat datang di platform kompetisi kami",
        HOME_CHECK_IT_OUT_1_BUTTON: "PERIKSA TRAILER-NYA!!",
        HOME_CHECK_IT_OUT_2_BUTTON: "CEK DAFTAR PERLOMBAAN!",
        HOME_WATCH_TRAILER: "Tonton Trailer!",
        HOME_LIST_OF_COMPETITIONS: "Daftar Kompetisi",
        HOME_KEY_DATES: "Tanggal Penting",
        HOME_FAQ: "Pertanyaan yang Sering Diajukan",
        HOME_SPONSORS: "Didukung dan Disponsori Oleh",
        HOME_MORE_INFO: "Informasi Lebih Lanjut",
        HOME_BUSINESS_INQUIRY: "PERTANYAAN BISNIS / HUMAS",
        FAQ: [
            {
                q: "Apa itu Savor?",
                a: "Savor adalah acara kompetisi yang diselenggarakan oleh OSIS SMANSA, yang mempertemukan para pelajar untuk berkompetisi, berkolaborasi, dan menampilkan bakat mereka dalam berbagai kategori.",
            },
            {
                q: "Siapa saja yang bisa ikut serta dalam Savor?",
                a: "Semua siswa SD, SMP, dan SMA Provinsi Lampung dipersilakan untuk berpartisipasi. Beberapa lomba mungkin memiliki syarat khusus berdasarkan jenjang pendidikan atau afiliasi ekstrakurikuler.",
            },
            {
                q: "Apakah saya harus mendaftar untuk mengikuti Savor?",
                a: "Ya, peserta harus mendaftar secara online sebelum batas waktu yang ditentukan untuk dapat mengikuti lomba pilihan mereka. Pendaftaran langsung di tempat tidak diperbolehkan.",
            },
            {
                q: "Apakah ada biaya pendaftaran?",
                a: "Ada biaya untuk mengikuti masing-masing kategori lomba. Rincian lengkap tersedia di halaman pendaftaran lomba dan di Buku Panduan.",
            },
            {
                q: "Di mana saya bisa melihat jadwal lomba?",
                a: "Jadwal lengkap tersedia di halaman utama Savor. Informasi terbaru juga bisa didapatkan melalui media sosial resmi OSIS.",
            },
            {
                q: "Apakah saya bisa mengikuti lebih dari satu lomba?",
                a: "Bisa, selama jadwal lomba yang diikuti tidak bertabrakan. Pastikan untuk mengecek jadwal terlebih dahulu sebelum mendaftar ke beberapa lomba!",
            },
            {
                q: "Apakah akan ada hadiah atau sertifikat?",
                a: "Tentu saja! Para pemenang akan mendapatkan trofi plakat dan sertifikat. Beberapa kategori lomba juga menyediakan dana pembinaan.",
            },
            {
                q: "Apa yang harus saya kenakan selama Savor?",
                a: "Peserta wajib mengenakan seragam sekolah kecuali jika kategori lomba mengharuskan kostum khusus. Silakan lihat kembali ketentuan tiap kategori untuk detailnya.",
            },
            {
                q: "Apakah teman atau publik boleh datang meskipun tidak ikut lomba?",
                a: "Boleh! Semua orang sangat dianjurkan untuk hadir, mendukung teman-temannya, dan menikmati suasana acara. Beberapa lomba terbuka untuk penonton.",
            },
            {
                q: "Siapa yang bisa saya hubungi untuk informasi lebih lanjut?",
                a: 'Kamu bisa menghubungi contact person umum yang tercantum di bagian "Informasi Lebih Lanjut" di halaman utama.',
            },
        ],
        REGIS_TITLE: "Daftar Kompetisi",
        REGIS_SORT: "URUTKAN",
        REGIS_SORT_LEVEL: "Jenjang",
        REGIS_SORT_PRICE: "Biaya",
        REGIS_SORT_EXTRA: "Ekstrakurikuler",
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
