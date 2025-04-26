import { ReactNode, createContext, useContext } from "react";

export interface CompDoc {
    name: string; // Nama
    extra: string; // Ekstrakurikuler
    regCode: string; // Link pendaftaran
    booklet: string; // Link Juknis
    hue: number; // HUE Shifts
    level: number; // Tingkat pendidikan
    description: string; // Deskripsi
    price: number; // HTM
    cp: string; // Contact Person
}

interface DataProviderProps {
    children: ReactNode;
}

interface DataContextProps {
    data: Array<CompDoc> | null;
}

export const DataContext = createContext<DataContextProps>({
    data: [],
});

export function DataProvider({ children }: DataProviderProps) {
    const data = [
        {
            name: "Band",
            extra: "Band",
            regCode: "band",
            booklet: "https://github.com",
            hue: 0,
            level: 0,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis optio at nisi totam omnis earum vel, ut suscipit doloremque maxime perferendis magnam harum eligendi molestiae sapiente quasi molestias facilis est.\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore maiores sapiente, maxime voluptas, voluptates dolore officiis praesentium in illum asperiores quam quod veniam saepe sequi quas. Quisquam quae corporis numquam?\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, itaque? Adipisci impedit commodi possimus neque. Temporibus quidem aut fugiat, nulla possimus quia exercitationem odio assumenda ad ab. Quaerat, amet ut.",
            price: 180000,
            cp: "082281019574",
        },
        {
            name: "Basket 5v5",
            extra: "Basket",
            regCode: "basket_5v5",
            booklet: "https://github.com",
            hue: 30,
            level: 0,
            description:
                "Standard 5-on-5 basketball tournament focused on strategy and skill.",
            price: 300000,
            cp: "082281019574",
        },
        {
            name: "Film Pendek",
            extra: "Cinematography",
            regCode: "film_pendek",
            booklet: "https://github.com",
            hue: 300,
            level: 1,
            description:
                "Short film competition to express creativity and storytelling through video.",
            price: 40000,
            cp: "082281019574",
        },
        {
            name: "Mobile Legends",
            extra: "E-Sports",
            regCode: "mlbb",
            booklet: "https://github.com",
            hue: 200,
            level: 0,
            description: "Mobile Legends tournament for strategic team-based gameplay.",
            price: 100000,
            cp: "082281019574",
        },
        {
            name: "Futsal",
            extra: "Futsal",
            regCode: "futsal",
            booklet: "https://github.com",
            hue: 40,
            level: 1,
            description:
                "Indoor football competition requiring teamwork and fast reflexes.",
            price: 250000,
            cp: "082281019574",
        },
        {
            name: "Kriya",
            extra: "IPCA",
            regCode: "kriya",
            booklet: "https://github.com",
            hue: 110,
            level: 1,
            description:
                "Handicraft and creative design contest showcasing artistic talent.",
            price: 75000,
            cp: "082281019574",
        },
        {
            name: "Coswalk",
            extra: "Japanese Club",
            regCode: "coswalk",
            booklet: "https://github.com",
            hue: 330,
            level: 0,
            description:
                "Cosplay walking performance blending costume and character acting.",
            price: 70000,
            cp: "082281019574",
        },
        {
            name: "Roket Air",
            extra: "KIR",
            regCode: "roket_air",
            booklet: "https://github.com",
            hue: 180,
            level: 0,
            description:
                "Water rocket engineering competition to test physics and creativity.",
            price: 75000,
            cp: "082281019574",
        },
        {
            name: "Modern Dance",
            extra: "Modern Dance",
            regCode: "modern_dance",
            booklet: "https://github.com",
            hue: 270,
            level: 10,
            description:
                "Choreographed modern dance competition with expressive movement.",
            price: 150000,
            cp: "082281019574",
        },
        {
            name: "Olimpiade",
            extra: "Olimpiade",
            regCode: "olimpiade",
            booklet: "https://github.com",
            hue: 120,
            level: 21,
            description: "Academic olympiad testing knowledge and critical thinking.",
            price: 50000,
            cp: "082281019574",
        },
        {
            name: "Pidato Impromptu",
            extra: "Opini",
            regCode: "pidato",
            booklet: "https://github.com",
            hue: 25,
            level: 1,
            description:
                "Spontaneous speech competition focusing on articulation and logic.",
            price: 50000,
            cp: "082281019574",
        },
        {
            name: "Solo Song",
            extra: "Paduan Suara",
            regCode: "solo_song",
            booklet: "https://github.com",
            hue: 0,
            level: 0,
            description:
                "Solo singing competition judged on vocal quality and expression.",
            price: 75000,
            cp: "082281019574",
        },
        {
            name: "LKBB VARFOR",
            extra: "Paskibra",
            regCode: "lkbb",
            booklet: "https://github.com",
            hue: 190,
            level: 10,
            description:
                "Marching and formation competition testing discipline and coordination.",
            price: 300000,
            cp: "082281019574",
        },
        {
            name: "PMR Tandu Darurat",
            extra: "PMR",
            regCode: "pmr_td",
            booklet: "https://github.com",
            hue: 50,
            level: 0,
            description: "First aid competition focused on emergency stretcher handling.",
            price: 75000,
            cp: "082281019574",
        },
        {
            name: "PMR Pertolongan Pertama",
            extra: "PMR",
            regCode: "pmr_pp",
            booklet: "https://github.com",
            hue: 50,
            level: 0,
            description: "Basic first aid simulation showcasing response accuracy.",
            price: 75000,
            cp: "082281019574",
        },
        {
            name: "Senam Pramuka",
            extra: "Pramuka",
            regCode: "pramuka_senam",
            booklet: "https://github.com",
            hue: 85,
            level: 1,
            description: "Scout gymnastics with synchronized movements and energy.",
            price: 65000,
            cp: "082281019574",
        },
        {
            name: "Miniatur Pioneering Pramuka",
            extra: "Pramuka",
            regCode: "pramuka_miniatur_pioneering",
            booklet: "https://github.com",
            hue: 95,
            level: 0,
            description:
                "Miniature pioneering construction challenge using scouting techniques.",
            price: 65000,
            cp: "082281019574",
        },
        {
            name: "Dharmawacana Hindu",
            extra: "Rohin",
            regCode: "dharmawacana_hindu",
            booklet: "https://github.com",
            hue: 305,
            level: 1,
            description: "Hindu religious speech focusing on values and philosophy.",
            price: 30000,
            cp: "082281019574",
        },
        {
            name: "Hafalan Doa Hindu",
            extra: "Rohin",
            regCode: "hafalan_doa_hindu",
            booklet: "https://github.com",
            hue: 305,
            level: 0,
            description:
                "Hindu prayer recitation test highlighting memorization and fluency.",
            price: 30000,
            cp: "082281019574",
        },
        {
            name: "Dai/Da’iyah",
            extra: "Rohis",
            regCode: "dai_daiyah",
            booklet: "https://github.com",
            hue: 340,
            level: 1,
            description: "Islamic preaching competition focusing on persuasive delivery.",
            price: 60000,
            cp: "082281019574",
        },
        {
            name: "Tahfidz",
            extra: "Rohis",
            regCode: "tahfidz",
            booklet: "https://github.com",
            hue: 340,
            level: 1,
            description:
                "Qur’an memorization competition focusing on accuracy and tajwid.",
            price: 60000,
            cp: "082281019574",
        },
        {
            name: "Solo Song Rohani",
            extra: "Rokris",
            regCode: "solo_song_rohani",
            booklet: "https://github.com",
            hue: 340,
            level: 0,
            description:
                "Christian solo song contest based on vocal expression and message.",
            price: 35000,
            cp: "082281019574",
        },
        {
            name: "Storytelling",
            extra: "English Club",
            regCode: "storytelling",
            booklet: "https://github.com",
            hue: 290,
            level: 0,
            description:
                "English storytelling contest emphasizing creativity and delivery.",
            price: 75000,
            cp: "082281019574",
        },
        {
            name: "Poster Digital",
            extra: "Solusi",
            regCode: "poster_digital",
            booklet: "https://github.com",
            hue: 160,
            level: 0,
            description:
                "Digital poster design contest focusing on aesthetics and message.",
            price: 65000,
            cp: "082281019574",
        },
        {
            name: "Tari Kreasi",
            extra: "Traditional Dance",
            regCode: "tari_kreasi",
            booklet: "https://github.com",
            hue: 210,
            level: 10,
            description: "Creative traditional dance performance with cultural elements.",
            price: 65000,
            cp: "082281019574",
        },
        {
            name: "Baca Puisi",
            extra: "Teater Pena",
            regCode: "baca_puisi",
            booklet: "https://github.com",
            hue: 270,
            level: 0,
            description: "Poetry reading competition judged on emotion and articulation.",
            price: 50000,
            cp: "082281019574",
        },
    ];
    return <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>;
}

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useData must be used within a DataProvider");
    }
    return context;
};
