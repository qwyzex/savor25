import "@/styles/globals.sass";
import type { AppProps } from "next/app";
import { DataProvider } from "@/context/DataContext";
import { LanguageProvider } from "@/context/LanguageContext";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <LanguageProvider>
            <DataProvider>
                <Component {...pageProps} />
            </DataProvider>
        </LanguageProvider>
    );
}
