import { ReactNode, createContext, useContext } from "react";

export interface CompDoc {
    // name: string; // Nama
    // extra: string; // Ekstrakurikuler
    // regCode: string; // Link pendaftaran
    // booklet: string; // Link Juknis
    // hue: number; // HUE Shifts
    // level: number; // Tingkat pendidikan
    // description: string; // Deskripsi
    // price: number; // HTM
    // cp: string; // Contact Person

    name: string,
    extra: string,
    regCode: string,
    description: string,
    form: string,
    booklet: string,
    edu: string,
    level: number,
    hue: number,
    price: number,
    cp: string,
    cpFull: string,
    hx: Array<number>,
}

interface DataProviderProps {
    children: ReactNode;
}

interface DataContextProps {
    data: Array<CompDoc> | null;
}

export const DataContext = createContext<DataContextProps>({
    data: [{
        name: "",
        extra: "",
        regCode: "",
        description: "",
        form: "",
        booklet: "",
        edu: "",
        level: 0,
        hue: 0,
        price: 0,
        cp: "",
        cpFull: "",
        hx: [],
    }],
});

export function DataProvider({ children }: DataProviderProps) {
    const data = [
        {
            "name": "Baca Puisi",
            "extra": "Teater Pena",
            "regCode": "baca_puisi",
            "description": "Kompetisi Baca Puisi mengundang siswa SMA/SMK/MA sederajat se-Provinsi Lampung untuk membacakan puisi bertema “Bara Pemuda-Pemudi”. Peserta membawakan satu puisi wajib dan satu puisi pilihan dari daftar panitia. Penilaian mencakup penafsiran, penghayatan, vokal, dan penampilan. Peserta mengenakan seragam sekolah atau almamater, boleh menggunakan properti tambahan.",
            "form": "https://forms.gle/kX9v1DhN58sutacz7",
            "booklet": "https://drive.google.com/drive/folders/1LSAL8ZmjDMawGOY0yHc2aIJ10c2hEZH3?usp=drive_link",
            "edu": "SMA",
            "level": 0,
            "hue": 270,
            "price": 50000,
            "cp": "85218217952",
            "cpFull": "085218217952",
            "hx": [5]
        },
        {
            "name": "Band",
            "extra": "Band",
            "regCode": "band",
            "description": "Kompetisi Band adalah ajang bagi siswa SMA/SMK/MA sederajat se-Provinsi Lampung untuk unjuk bakat bermusik dalam format band. Setiap tim terdiri dari 4-6 orang dengan instrumen wajib vokal, gitar, bass, dan drum. Peserta menampilkan maksimal 2 lagu bebas selama 15 menit, dengan penilaian berdasarkan aksi panggung, keterampilan musikal, dan harmonisasi. Kostum dan lirik harus sopan, tanpa unsur SARA.",
            "form": "https://forms.gle/zGg3cceMXWtYBQnEA",
            "booklet": "https://drive.google.com/drive/folders/13_9pk4tCQPAiXvByYAoUvj-nR3apbp7G?usp=drive_link",
            "edu": "SMA",
            "level": 0,
            "hue": 0,
            "price": 180000,
            "cp": "85279203763",
            "cpFull": "085279203763",
            "hx": [5]
        },
        {
            "name": "Basket 5v5",
            "extra": "Basketball",
            "regCode": "basket_5v5",
            "description": "Kompetisi Basket 5v5 terbuka untuk siswa SMA/SMK/MA sederajat se-Kota Metro. Setiap tim terdiri dari 10-12 pemain dan 2 official (manajer dan pelatih bersertifikat). Pertandingan mengacu pada aturan PERBASI/FIBA 2024. Peserta wajib mengenakan jersey seragam dengan nomor punggung. Penilaian berdasarkan keterampilan dan sportivitas.",
            "form": "https://forms.gle/9f9R4bmBFdP1emzM6",
            "booklet": "https://drive.google.com/drive/folders/10Gcynaqt-twJlTEK--sEo7cQuBUiETRQ",
            "edu": "SMA",
            "level": 0,
            "hue": 30,
            "price": 500000,
            "cp": "81539347721",
            "cpFull": "081539347721",
            "hx": [3, 4, 5, 6, 7, 8]
        },
        {
            "name": "Coswalk",
            "extra": "Japanese Club",
            "regCode": "coswalk",
            "description": "Kompetisi Cosplay Walk adalah ajang bagi siswa SMA/SMK/MA sederajat se-Provinsi Lampung untuk memerankan karakter dari anime, manga, game, atau tokusatsu Jepang melalui catwalk selama 1,5 menit. Penilaian berdasarkan kemiripan kostum, penampilan, kualitas kostum, dan dampak visual. Kostum harus sopan, tanpa unsur SARA, dan peserta boleh membawa properti aman.",
            "form": "https://forms.gle/5fAWvMj3NGbXwDVx6",
            "booklet": "https://drive.google.com/drive/folders/1bePttp8QjVDhJKYgRCtWqzsj0_46INFc?usp=drive_link",
            "edu": "SMA",
            "level": 0,
            "hue": 330,
            "price": 70000,
            "cp": "83809532175",
            "cpFull": "083809532175",
            "hx": [5]
        },
        {
            "name": "Da'i Da'iyah",
            "extra": "Rohani Islam",
            "regCode": "dai_daiyah",
            "description": "Kompetisi Da’i & Da’iyah mengundang siswa SMP/MTs se-Provinsi Lampung untuk menyampaikan ceramah keagamaan secara spontan selama 7-10 menit dengan tema-tema pilihan. Penilaian mencakup isi ceramah, penguasaan materi, dan penampilan di panggung. Peserta harus berpakaian sopan dan hadir 15 menit sebelum lomba dimulai. Setiap sekolah boleh mengirimkan peserta tanpa batas jumlah.",
            "form": "https://forms.gle/NCXUz8j1ojvC8bxC6",
            "booklet": "https://drive.google.com/drive/folders/1SdtDz8K2DwvuYdPM2-9p17dsto4ZXwuX?usp=drive_link",
            "edu": "SMP",
            "level": 1,
            "hue": 340,
            "price": 60000,
            "cp": "81280029925",
            "cpFull": "081280029925",
            "hx": [3]
        },
        {
            "name": "Dharmawacana Hindu",
            "extra": "Rohani Hindu",
            "regCode": "dharmawacana_hindu",
            "description": "Kompetisi Dharmawacana mengajak siswa SMA se-Provinsi Lampung untuk menyampaikan ceramah keagamaan Hindu secara lisan selama maksimal 6 menit dengan tema yang ditentukan panitia. Penilaian berdasarkan penguasaan materi, penyampaian, dan penampilan. Peserta wajib mengenakan pakaian sembahyang Bali yang sopan. Setiap sekolah boleh mengirimkan maksimal 3 peserta.",
            "form": "https://forms.gle/pb8HL5xzvzxee4EPA",
            "booklet": "https://drive.google.com/drive/folders/1v_no3K2mRLdakm0v3jfxD1Y3BPegKGrL?usp=drive_link",
            "edu": "SMA",
            "level": 0,
            "hue": 305,
            "price": 50000,
            "cp": "82382322116",
            "cpFull": "082382322116",
            "hx": [7]
        },
        {
            "name": "E-Sports MLBB",
            "extra": "E-Sports",
            "regCode": "mlbb",
            "description": "Kompetisi MLBB E-Sports adalah turnamen Mobile Legends untuk siswa SMA/SMK/MA se-Provinsi Lampung. Setiap tim terdiri dari 5 pemain inti dan 1 cadangan dari sekolah yang sama. Pertandingan menggunakan sistem BO3, menekankan strategi dan kerja sama tim. Peserta harus menggunakan akun yang terdaftar dan membawa kartu pelajar. Kompetisi ini mengutamakan sportivitas. Biaya pendaftaran Rp120.000 per tim, dengan kuota maksimal 32 tim.",
            "form": "https://forms.gle/M1yrX1giNPaP7dMX8",
            "booklet": "https://drive.google.com/drive/folders/1uNfi5r5ABtpc7W5GZ-5vYzb_vUU46Pk_?usp=drive_link",
            "edu": "SMA",
            "level": 0,
            "hue": 200,
            "price": 120000,
            "cp": "85783894030",
            "cpFull": "085783894030",
            "hx": [0, 1, 2]
        },
        {
            "name": "Film Pendek",
            "extra": "Cinematography",
            "regCode": "film_pendek",
            "description": "Kompetisi Film Pendek mengundang siswa SMA/SMK/MA sederajat se-Provinsi Lampung untuk membuat film drama fiksi berdurasi maksimal 4 menit bertema “Spark Your Passion On The Stage Of Valor”. Setiap tim berisi 4 orang (sutradara, produser, penulis, sinematografer). Penilaian mencakup kesesuaian tema, kreativitas, dan estetika visual. Film harus bebas dari unsur SARA dan diunggah melalui Google Drive.",
            "form": "https://forms.gle/LGqoi65VM9zHwXNE8",
            "booklet": "https://drive.google.com/drive/folders/1pKXf-jQtAJXXMZB-7V4_0BEjAQT86EPj?usp=drive_link",
            "edu": "SMA",
            "level": 0,
            "hue": 300,
            "price": 50000,
            "cp": "88286202249",
            "cpFull": "088286202249",
            "hx": [8]
        },
        {
            "name": "Futsal",
            "extra": "Futsal",
            "regCode": "futsal",
            "description": "Kompetisi Futsal adalah turnamen untuk siswa SMP/MTs se-Provinsi Lampung. Setiap tim terdiri dari maksimal 12 pemain, termasuk 2 official (pelatih dan pendamping), dan bertanding dalam sistem gugur dengan durasi 2x10 menit. Peserta wajib mengenakan perlengkapan futsal seperti sepatu dan kaos olahraga sekolah. Penilaian berdasarkan sportivitas dan keterampilan bermain.",
            "form": "https://forms.gle/VsczQtgtoF8Vdr6EA",
            "booklet": "https://drive.google.com/drive/folders/1qLSI8RbTTH42vtq9B87M_itsFrJwx382?usp=drive_link",
            "edu": "SMP",
            "level": 1,
            "hue": 40,
            "price": 250000,
            "cp": "85832750891",
            "cpFull": "085832750891",
            "hx": [-1, 0, 1, 2]
        },
        {
            "name": "Kriya",
            "extra": "IPCA",
            "regCode": "kriya",
            "description": "Kompetisi Kriya mengajak siswa SMP/MTs se-Provinsi Lampung untuk membuat karya seni bertema “Kearifan Lokal dan Pelestarian Budaya Lampung”. Peserta menciptakan karya dari bahan alam seperti kayu atau bambu, disertai video presentasi berdurasi 7 menit. Penilaian berdasarkan orisinalitas, keunikan, estetika, dan kerajinan. Peserta mengenakan seragam sekolah dan boleh mengirimkan lebih dari satu karya per sekolah.",
            "form": "https://forms.gle/Py6EzscrbDrfMTuC7",
            "booklet": "https://drive.google.com/drive/folders/1LldPvcE1xgBw6UGcObNwMvzSm8nbBolh?usp=drive_link",
            "edu": "SMP",
            "level": 1,
            "hue": 110,
            "price": 75000,
            "cp": "8.95339E+11",
            "cpFull": "0895339111022",
            "hx": [8]
        },
        {
            "name": "LKBB Variasi Formasi",
            "extra": "Paskibra",
            "regCode": "lkbb",
            "description": "Kompetisi LKBB Variasi Formasi mengundang siswa SMP dan SMA se-Provinsi Lampung untuk menampilkan gerakan baris-berbaris (PBB) dan formasi kreatif. Setiap regu berisi 13-16 orang, tampil selama 10 menit. Penilaian meliputi kekompakan gerakan PBB, kreativitas formasi, dan kepemimpinan ketua regu. Peserta mengenakan seragam sekolah atau OSIS yang sopan. Biaya pendaftaran Rp300.000 per regu, dengan kuota 30 regu.",
            "form": "https://forms.gle/cwhD9nBg36mDnG8Q8",
            "booklet": "https://drive.google.com/drive/folders/16RBiOJd7yFRa6WDvhhL2coYo4jQY0pO2?usp=drive_link",
            "edu": "SMP & SMA",
            "level": 2,
            "hue": 190,
            "price": 300000,
            "cp": "82175089080",
            "cpFull": "082175089080",
            "hx": [3]
        },
        {
            "name": "Miniatur Pioneering Pramuka",
            "extra": "Pramuka",
            "regCode": "pramuka_miniatur_pioneering",
            "description": "Kompetisi Miniatur Pioneering Pramuka mengajak siswa SMA se-Provinsi Lampung untuk membuat miniatur struktur menggunakan tali dan kayu dengan teknik Pramuka. Peserta dinilai berdasarkan kreativitas, kekuatan miniatur, dan ketepatan simpul. Kompetisi ini mengasah keterampilan dan kerja sama tim.",
            "form": "https://forms.gle/dRJFpACNEAuCAGzg8",
            "booklet": "https://drive.google.com/drive/folders/1d60YaVCBaWDrcAk8r0CY364vcbtXvn7R?usp=drive_link",
            "edu": "SMA",
            "level": 0,
            "hue": 95,
            "price": 65000,
            "cp": "82376124318",
            "cpFull": "082376124318",
            "hx": [8]
        },
        {
            "name": "Modern Dance",
            "extra": "Modern Dance",
            "regCode": "modern_dance",
            "description": "Kompetisi Modern Dance mengajak siswa SMP dan SMA se-Provinsi Lampung untuk menampilkan tarian kreatif bertema “Find Your Iconic” yang mencerminkan ciri khas sekolah. Setiap tim beranggotakan 5-10 orang, menari selama maksimal 7 menit dengan gaya bebas seperti hiphop, modern, atau tradisional (kecuali cheerleader). Penilaian berdasarkan kreativitas, kekompakan, kostum, dan kesesuaian tema. Peserta boleh menggunakan properti dengan izin panitia.",
            "form": "https://forms.gle/ar9VeRzJ1MJvmpi99",
            "booklet": "https://drive.google.com/drive/folders/1kAl0pZnJuA-Q2A5lUQf_aJbxCUOLUPyQ?usp=drive_link",
            "edu": "SMP & SMA",
            "level": 2,
            "hue": 270,
            "price": 150000,
            "cp": "85832697158",
            "cpFull": "085832697158",
            "hx": [7]
        },
        {
            "name": "Olimpiade",
            "extra": "Olimpiade",
            "regCode": "olimpiade",
            "description": "Kompetisi Olimpiade terbuka untuk siswa SD/MI (IPA dan Matematika) dan SMP/MTs (IPA, Matematika, IPS) se-Provinsi Lampung. Lomba terdiri dari babak penyisihan (pilihan ganda) dan final (isian singkat), masing-masing berdurasi 2 jam. Peserta dinilai berdasarkan kebenaran jawaban dan diharuskan membawa alat tulis serta mengenakan seragam sekolah.",
            "form": "https://forms.gle/U1tKAuqyUUsthaZY6",
            "booklet": "https://drive.google.com/drive/folders/1omOHkE1XM3UbL82rtlFdIO3hyB-Kdn32?usp=drive_link",
            "edu": "SD & SMP",
            "level": 3,
            "hue": 120,
            "price": 50000,
            "cp": "81273858388",
            "cpFull": "081273858388",
            "hx": [1, 2]
        },
        {
            "name": "Pelafalan Doa Hindu",
            "extra": "Rohani Hindu",
            "regCode": "hafalan_doa_hindu",
            "description": "Kompetisi Pelafalan Doa Hindu mengundang siswa SMP dan SMA se-Provinsi Lampung untuk melafalkan doa Hindu secara individu. Peserta dinilai berdasarkan kejelasan, intonasi, dan penghayatan doa. Peserta wajib mengenakan pakaian adat atau persembahyangan Bali yang sopan. Kompetisi ini menekankan nilai spiritual dan ketepatan pelafalan.",
            "form": "https://forms.gle/NvcySkUCti27LwUU7",
            "booklet": "https://drive.google.com/drive/folders/1OelBxWXuFZwPufBxeEp5E6Pmz0aT_ic6?usp=drive_link",
            "edu": "SMP",
            "level": 1,
            "hue": 305,
            "price": 50000,
            "cp": "82382322116",
            "cpFull": "082382322116",
            "hx": [7]
        },
        {
            "name": "Pidato Impromptu",
            "extra": "Opini",
            "regCode": "pidato",
            "description": "Kompetisi Pidato Impromptu mengundang siswa SMP/MTs se-Provinsi Lampung untuk berpidato secara spontan selama maksimal 5 menit. Tema pidato diundi sesuai tema besar SAVOR 2025. Penilaian berdasarkan isi pidato, cara penyampaian, bahasa tubuh, dan penampilan. Peserta mengenakan seragam sekolah dan boleh membawa atribut pendukung yang sopan.",
            "form": "https://forms.gle/ZXQUJ1HxfXzNiuXh6",
            "booklet": "https://drive.google.com/drive/folders/1cBmfuhlMrG4k1BQQdpGN7DY-o2MWVtEl?usp=drive_link",
            "edu": "SMP",
            "level": 1,
            "hue": 25,
            "price": 50000,
            "cp": "85709034351",
            "cpFull": "085709034351",
            "hx": [6]
        },
        {
            "name": "PMR Pertolongan Pertama",
            "extra": "PMR",
            "regCode": "pmr_pp",
            "description": "Kompetisi Peragaan Pertolongan Pertama PMR diperuntukkan bagi anggota PMR Wira SMA se-Provinsi Lampung. Setiap tim berisi 5 penolong dan 1 korban, menunjukkan keterampilan pertolongan pertama selama maksimal 14 menit. Penilaian mencakup ketepatan teknik, kerja sama, dan kecepatan. Peserta membawa peralatan seperti mitela dan tandu, serta mengenakan seragam PMR.",
            "form": "https://forms.gle/QwfecGNe5Zh861248",
            "booklet": "https://drive.google.com/drive/folders/1E9asa7B8fnFXOrR5YHfxejqqteSxKh4j?usp=drive_link",
            "edu": "SMA",
            "level": 0,
            "hue": 50,
            "price": 75000,
            "cp": "8.95383E+11",
            "cpFull": "0895382509408",
            "hx": [1]
        },
        {
            "name": "PMR Tandu Darurat",
            "extra": "PMR",
            "regCode": "pmr_td",
            "description": "Kompetisi Peragaan Tandu Darurat PMR diperuntukkan bagi anggota PMR Wira SMA se-Provinsi Lampung. Setiap tim berisi 2 orang membuat tandu darurat dengan tali dan peralatan standar. Penilaian mencakup kekuatan tandu, ketepatan simpul, kerapihan, dan kecepatan. Peserta harus membawa peralatan seperti mitela dan pembalut gulung. Setiap sekolah boleh mengirimkan 1 tim putra dan 1 tim putri.",
            "form": "https://forms.gle/nLrxE8toA2sZV2dV9",
            "booklet": "https://drive.google.com/drive/folders/1bUN4Ji_aggUPzrL8gY4SwTercX5lKMe2?usp=drive_link",
            "edu": "SMA",
            "level": 0,
            "hue": 50,
            "price": 75000,
            "cp": "85658846635",
            "cpFull": "085658846635",
            "hx": [1]
        },
        {
            "name": "Poster Digital",
            "extra": "Solusi",
            "regCode": "poster_digital",
            "description": "Kompetisi Poster Digital mengajak siswa SMA/SMK/MA sederajat se-Provinsi Lampung untuk membuat poster bertema “Bersama Merajut Prestasi, Menggapai Masa Depan”. Poster dibuat secara individu dalam format digital (A3, 300 dpi) dan diunggah di Instagram dengan tagar khusus. Penilaian berdasarkan orisinalitas, kesesuaian tema, estetika, dan penyampaian pesan.",
            "form": "https://forms.gle/6jY7t3hWcc9b1V5x7",
            "booklet": "https://drive.google.com/drive/folders/1gQijmA7waw7a1VG-DzoKb3PHacIUPCvN?usp=drive_link",
            "edu": "SMA",
            "level": 0,
            "hue": 160,
            "price": 65000,
            "cp": "85257264599",
            "cpFull": "085257264599",
            "hx": [3]
        },
        {
            "name": "Roket Air",
            "extra": "KIR",
            "regCode": "roket_air",
            "description": "Kompetisi Roket Air mengundang siswa SMA/SMK/MA sederajat se-Provinsi Lampung untuk meluncurkan roket air kreasi tim (maksimal 3 orang) dari botol berukuran 1,5 liter, dengan berat roket maksimal 200 gram dan muatan air maksimal 200 ml. Penilaian berdasarkan ketepatan pendaratan roket dan desain. Peserta mengenakan seragam olahraga atau KIR sekolah.",
            "form": "https://forms.gle/2PXx5n9iGup7QRdi9",
            "booklet": "https://drive.google.com/drive/folders/1WKfqktslXmpWTN08I3VB7CmnIEfcnWvV?usp=drive_link",
            "edu": "SMA",
            "level": 0,
            "hue": 180,
            "price": 75000,
            "cp": "83179925043",
            "cpFull": "083179925043",
            "hx": [3]
        },
        {
            "name": "Senam Pramuka",
            "extra": "Pramuka",
            "regCode": "pramuka_senam",
            "description": "Kompetisi Senam Pramuka mengundang anggota Pramuka Penggalang SMP se-Provinsi Lampung untuk menampilkan gerakan senam resmi Kwartir Nasional. Setiap regu berisi 6 orang, tampil di lapangan 10x10 meter dengan seragam olahraga atau pangkalan. Penilaian berdasarkan ketepatan gerakan, keseragaman, kekompakan, semangat, dan kelincahan. Peserta boleh menggunakan yel-yel dan aksesoris, namun harus menjaga ketertiban.",
            "form": "https://forms.gle/nxQ7HeEhZccmWdSGA",
            "booklet": "https://drive.google.com/drive/folders/1Y0wwqpd3ESD3dYOA6BT6j2bUJwdlZDJ5?usp=drive_link",
            "edu": "SMP",
            "level": 1,
            "hue": 85,
            "price": 65000,
            "cp": "87892500548",
            "cpFull": "087892500548",
            "hx": [2]
        },
        {
            "name": "Solo Song",
            "extra": "Paduan Suara",
            "regCode": "solo_song",
            "description": "Kompetisi Solo Song mengajak siswa SMA/SMK/MA sederajat se-Provinsi Lampung untuk menyanyikan satu lagu populer dari daftar pilihan, seperti karya Raisa atau Judika. Penilaian berdasarkan teknik vokal, improvisasi, penghayatan, serta ekspresi panggung. Peserta mengenakan pakaian bebas yang sopan dan rapi. Setiap sekolah boleh mengirimkan maksimal 3 peserta.",
            "form": "https://forms.gle/nY9WzyWD5o1s54cu7",
            "booklet": "https://drive.google.com/drive/folders/1VYg46UXL6SJ-vZ8NlZkljPggY42XEJYW?usp=drive_link",
            "edu": "SMA",
            "level": 0,
            "hue": 0,
            "price": 75000,
            "cp": "82175099715",
            "cpFull": "082175099715",
            "hx": [6]
        },
        {
            "name": "Solo Song Rohani",
            "extra": "Rohani Kristen",
            "regCode": "solo_song_rohani",
            "description": "Kompetisi Solo Song Rohani Kristiani adalah ajang bagi siswa SMA/SMK se-Provinsi Lampung untuk menyanyikan lagu rohani Kristiani secara individu selama maksimal 7 menit. Peserta membawakan lagu bebas dengan musik minus one (MP3) yang disiapkan sendiri. Penilaian mencakup teknik vokal, interpretasi lagu, penguasaan lirik, dan penampilan. Peserta disarankan mengenakan pakaian bernuansa kedaerahan.",
            "form": "https://forms.gle/fArq4KEz8ZwZzKhj8",
            "booklet": "https://drive.google.com/drive/folders/14ns738fTQbOW2xOfzFKfnA-gvisnSq3g?usp=drive_link",
            "edu": "SMA",
            "level": 0,
            "hue": 340,
            "price": 50000,
            "cp": "82181531725",
            "cpFull": "082181531725",
            "hx": [7]
        },
        {
            "name": "Storytelling",
            "extra": "English Club",
            "regCode": "storrytelling",
            "description": "Kompetisi Storytelling mengajak siswa SMA/SMK/MA sederajat se-Provinsi Lampung untuk menceritakan kisah orisinal bertema “Can You Hear The Music?” dalam dua babak. Babak pertama menggunakan naskah yang disiapkan, sedangkan babak final menggunakan cerita spontan berdasarkan tiga kata acak. Penilaian berdasarkan interpretasi cerita, kelancaran, dan interaksi dengan penonton. Peserta mengenakan kostum sesuai cerita.",
            "form": "https://forms.gle/1xdVbDVyDziqG9GeA",
            "booklet": "https://drive.google.com/drive/folders/1V37s1lGQly-lcurm_FNRk37v4ipBrwfP?usp=drive_link",
            "edu": "SMA",
            "level": 0,
            "hue": 290,
            "price": 75000,
            "cp": "8.95371E+11",
            "cpFull": "0895370907289",
            "hx": [8]
        },
        {
            "name": "Tahfidz",
            "extra": "Rohani Islam",
            "regCode": "tahfidz",
            "description": "Kompetisi Tahfidz mengundang siswa SMP/MTs se-Provinsi Lampung untuk melafalkan ayat-ayat Al-Qur’an dari Juz 30 (surah wajib) dan satu surah pilihan (Al-Haqqah, Al-Jin, atau Al-Qiyamah). Penilaian mencakup kelancaran, tajwid, dan kualitas suara. Peserta mengenakan busana muslim dan hadir 15 menit sebelum lomba dimulai. Tidak ada batas jumlah peserta per sekolah.",
            "form": "https://forms.gle/oUTLyQsvxozVyN7g7",
            "booklet": "https://drive.google.com/drive/folders/1Qih9kkahsMANZaJlcLAQrnvnyjUQoKZg?usp=drive_link",
            "edu": "SMP",
            "level": 1,
            "hue": 340,
            "price": 60000,
            "cp": "87895262725",
            "cpFull": "087895262725",
            "hx": [3]
        },
        {
            "name": "Tari Kreasi",
            "extra": "Traditional Dance",
            "regCode": "tari_kreasi",
            "description": "Kompetisi Tari Kreasi terbuka untuk siswa SMP dan SMA se-Provinsi Lampung, menampilkan tarian berkelompok (3-5 orang) bertema bebas dengan unsur kedaerahan. Durasi tarian 4-6 menit, dengan penilaian berdasarkan gerakan, irama, ekspresi, dan penampilan. Kostum harus sopan dan mencerminkan tema. Peserta wajib menyerahkan backsound sebelum lomba.",
            "form": "https://forms.gle/qn9dPD1xtew13mhL9",
            "booklet": "https://drive.google.com/drive/folders/1ZvBpWeolWwqxmeMC-s7LqDRT7NF2M6n-?usp=drive_link",
            "edu": "SMP & SMA",
            "level": 2,
            "hue": 210,
            "price": 125000,
            "cp": "82177874504",
            "cpFull": "082177874504",
            "hx": [8]
        }
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
