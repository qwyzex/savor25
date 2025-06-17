import GenPage from "@/components/GenPage";
import Roof from "@/components/Roof";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useEffect } from "react";

export default function Redirect() {
    const router = useRouter();

    useEffect(() => {
        router.push('/run');
    }, [])

    return (
        <>
            <Head>
                <title>Run Alt Page</title>
            </Head>
            <Roof>
                <GenPage>
                    <section>
                        <h1>Redirecting...</h1>
                        <p>If you are not redirected automatically, please <Link href="/run">click here</Link>.</p>
                    </section>
                </GenPage>
            </Roof>
        </>
    )
}
