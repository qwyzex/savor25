import { ReactNode, createContext } from "react";

export interface CompDoc {
    name: string; // Nama
    extra: string; // Ekstrakurikuler
    register: string; // Link pendaftaran
    booklet: string; // Link Juknis
    level: number; // Tingkat pendidikan
    description: string; // Deskripsi
    cp: string; // Contact Person
}

interface DataProviderProps {
    children: ReactNode;
}

interface DataContextProps {
    data: Array<CompDoc> | null;
}
export const DataContext = createContext<DataContextProps>({
    data: null,
});

export function DataProvider({ children }: DataProviderProps) {
    const data = [
        {
            name: "Basketball 5v5",
            extra: "Basket",
            register: "https://github.com",
            booklet: "https://github.com",
            level: 0,
            description: "Perlombaan Basket 5v5",
            cp: "https://wa.me/62895366666666",
        },
        {
            name: "Olimpiade SD",
            extra: "Olimpiade",
            register: "https://github.com",
            booklet: "https://github.com",
            level: 1,
            description: "Olimpiade IPA, IPS, dan Matematika",
            cp: "https://wa.me/62895366666666",
        },
    ];

    return <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>;
}
