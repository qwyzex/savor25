// import BurgerMenu from "@/components/BurgerMenu";
import Button from "@/components/Button";
import GenPage from "@/components/GenPage";
import { S } from "@/components/Hr";
import Roof from "@/components/Roof";
import InstaFeed from "@/components/RunFeed";
// import { useLanguage } from "@/context/LanguageContext";
import styles from "@/styles/Run.module.sass";
import Head from "next/head";

const UsPage = () => {
    // const { getStringTranslation } = useLanguage();

    return (
        <>
            <Head>
                <title>SAVOR RUN</title>
            </Head>
            <Roof>
                <GenPage>
                    <main className={`${styles.main}`}>
                        <section>
                            <img src="/imgs/run/Logo.png" alt="Savor Run" className={styles.banner} />
                        </section>
                        <section className={styles.title}>
                            <h1>SAVOR RUN</h1>
                            <h2>
                                “Pace the race, Brace teh wave!”
                            </h2>
                            <S />
                            <p>
                                Hi runners! What&apos;s SAVOR RUN ? let&apos;s see...
                                • 𝑺𝑨𝑽𝑶𝑹 𝑹𝑼𝑵 merupakan bagian rangkaian dari event SAVOR yang diselenggarakan dalam rangka merayakan hari jadi SMA Negeri 1 Kota Metro ke-66!
                                <br />
                                <br />
                                Kategori Run 5K untuk umum dan pelajar, podium 1,2,3, doorprize dan rangkaian kegiatan menarik lainnya sudah siap untuk kalian meriahkan !🏃‍♂️
                                So, jangan sampai terlewat! Segera daftar & persiapkan diri kalian yaa Runners!
                            </p>
                            <div>
                                <Button hyperlink newTab href={"https://wa.me/+6285183335612"}>
                                    CP SAVORRUN
                                </Button>
                                <Button hyperlink newTab href={"https://wa.me/+6285123132955"}>
                                    CP PENDAFTARAN
                                </Button>
                            </div>
                        </section>
                        <section className={styles.info}>
                            <h2>Date and Registration</h2>
                            <S />
                            <h3>📅 Tanggal 2 Agustus 2025</h3>
                            <h3>🕘 Pendaftaran dibuka 4 Juni 2025</h3>

                        </section>
                        <section>
                            <h2>Upcoming Update...</h2>
                            <S />
                            <p>
                                Tunggu informasi lebih lanjut mengenai Rute Map, Racepack, dan Podium Prize!
                            </p>
                        </section>
                        <section className={styles.sponsor}>
                            <h2>Calling Out Sponsors!</h2>
                            <S />
                            <article>
                                <p>
                                    Hi Potential Sponsors & Media Partners!
                                    <br />
                                    It is time to mark your calendars for 𝐒𝐀𝐕𝐎𝐑 𝐑𝐔𝐍 𝟐𝟎𝟐𝟓 🗓️
                                </p>
                                <p>
                                    𝑺𝒎𝒂𝒏𝒔𝒂 𝑭𝒆𝒔𝒕𝒊𝒗𝒆 𝑹𝒆𝒈𝒊𝒐𝒏𝒂𝒍 𝑪𝒐𝒎𝒑𝒆𝒕𝒊𝒕𝒊𝒐𝒏 𝑹𝑼𝑵 mengundang sponsorship & media partner untuk berkontribusi serta berkolaborasi bersama dalam perjalanan kreatif kami 🏃🏻
                                    jangan lewatkan kesempatan untuk memperkenalkan brand kalian ke audiens yang lebih luas!
                                </p>
                                <p>
                                    Untuk informasi lebih lanjut, silakan hubungi kami melalui kontak di bawah ini:
                                    ☎️:
                                </p>
                                <div>

                                    <Button hyperlink newTab href={"https://wa.me/+6285896211584"}>
                                        SPONSORSHIP
                                    </Button>
                                    <Button hyperlink newTab href={"https://wa.me/+6281273202019"}>
                                        MEDIA PARTNER
                                    </Button>
                                    <Button hyperlink newTab href={"https://wa.me/+6282171933493"}>
                                        CP UMKM
                                    </Button>
                                </div>
                            </article>
                        </section>
                        <section>
                            <h2>Accepting Volunteers!</h2>
                            <S />
                            <p>
                                Hi Volunteers! Are you ready to be part of something big? Join us in making SAVOR RUN 2025 a success! 🏃‍♀️🏃‍♂️
                                <br />
                                Kami mencari sukarelawan yang antusias untuk membantu berbagai tugas menjelang dan selama acara berlangsung. Jika Kamu memiliki minat dalam olahraga lari dan ingin berkontribusi, kami ingin Kamu bergabung dengan tim kami!
                                <br />
                                <Button hyperlink newTab href={"https://wa.me/+6285183335612"}>
                                    Hubungi Kami!
                                </Button>
                            </p>
                        </section>
                        <section>
                            <h2>Instagram Feed</h2>
                            <S />
                            <div className={styles.instaFeed}>
                                <InstaFeed />
                            </div>
                        </section>
                    </main>
                </GenPage>
            </Roof>
        </>
    );
};

export default UsPage;
