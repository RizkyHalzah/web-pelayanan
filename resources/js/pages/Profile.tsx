import { motion } from 'framer-motion';
import MainLayout from '../components/layouts/MainLayout';
import Struktur from './Struktur';
import {
    CalendarDays,
    MapPin,
    Scale,
    Target,
    FileText,
    Calculator,
    ClipboardCheck,
    Wallet,
    Search,
    BadgeAlert,
    ShieldCheck,
} from "lucide-react";

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
};

export default function Profile() {
    return (
        <MainLayout>
            {/* ================= HERO ================= */}

            <section className="relative overflow-hidden bg-white pt-40 pb-24">

                {/* Background Blur */}

                <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-blue-100 opacity-40 blur-3xl"></div>

                <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-100 opacity-40 blur-3xl"></div>

                <div className="relative mx-auto max-w-7xl px-8">

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="mx-auto max-w-4xl text-center"
                    >

                        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
                            Profil
                        </p>

                        <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
                            Badan Pendapatan Daerah
                            <br />
                            Kabupaten Banyuwangi
                        </h1>

                        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
                            Mengenal lebih dekat Badan Pendapatan Daerah
                            Kabupaten Banyuwangi, mulai dari sejarah,
                            tugas pokok dan fungsi hingga struktur organisasi
                            dalam memberikan pelayanan kepada masyarakat.
                        </p>

                    </motion.div>

                </div>

            </section>

            {/* ================= TENTANG ================= */}

<section id="about" className="relative overflow-hidden bg-white py-24">

    <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-30" />
    <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-100 blur-3xl opacity-30" />

    <div className="relative mx-auto max-w-7xl px-8">

        <div className="grid items-start gap-12 lg:grid-cols-2">

            {/* Left */}

            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >

                <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
                    TENTANG BAPENDA
                </span>

                <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
                    Mengenal BAPENDA
                    <br />
                    Kabupaten Banyuwangi
                </h2>

                <div className="mt-6 h-1 w-20 rounded-full bg-blue-600" />

                <p className="mt-8 leading-9 text-slate-600">
                    Badan Pendapatan Daerah Kabupaten Banyuwangi merupakan
                    perangkat daerah yang bertugas membantu Bupati dalam
                    melaksanakan urusan pemerintahan di bidang pendapatan
                    daerah. BAPENDA berkomitmen meningkatkan Pendapatan Asli
                    Daerah (PAD) melalui pengelolaan yang profesional,
                    transparan, inovatif, dan akuntabel.
                </p>

                <div className="mt-10 rounded-3xl border border-blue-100 bg-blue-50 p-8">
                    <div className="flex gap-5">
                        <div>

                            <h3 className="text-xl font-bold text-slate-900">
                                Visi BAPENDA
                            </h3>

                            <p className="mt-3 leading-8 text-slate-600">
                                Menjadi pengelola pendapatan daerah yang
                                profesional, inovatif, berintegritas serta
                                mampu mendukung Banyuwangi yang maju dan
                                sejahtera.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Right */}

            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-6 sm:grid-cols-2"
            >

                {[
                    {
                        icon: CalendarDays,
                        title: "Berdiri",
                        value: "2017",
                        color: "blue",
                        desc: "Resmi menjadi Badan Pendapatan Daerah.",
                    },
                    {
                        icon: MapPin,
                        title: "Wilayah",
                        value: "Kabupaten Banyuwangi",
                        color: "green",
                        desc: "Melayani seluruh wilayah Banyuwangi.",
                    },
                    {
                        icon: Scale,
                        title: "Dasar Hukum",
                        value: "Perbup No.03 Tahun 2019",
                        color: "violet",
                        desc: "Sebagai dasar penyelenggaraan organisasi.",
                    },
                    {
                        icon: ShieldCheck,
                        title: "Peran",
                        value: "Pengelola PAD",
                        color: "orange",
                        desc: "Mengoptimalkan Pendapatan Asli Daerah.",
                    },
                ].map((item, i) => {

                    const Icon = item.icon;

                    return (

                        <div
                            key={i}
                            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
                        >

                            <div className={`inline-flex rounded-2xl p-4
                            ${
                                item.color=="blue"
                                    ?"bg-blue-50"
                                    :item.color=="green"
                                    ?"bg-green-50"
                                    :item.color=="violet"
                                    ?"bg-violet-50"
                                    :"bg-orange-50"
                            }`}>

                                <Icon
                                    size={28}
                                    className={
                                        item.color=="blue"
                                            ?"text-blue-600"
                                            :item.color=="green"
                                            ?"text-green-600"
                                            :item.color=="violet"
                                            ?"text-violet-600"
                                            :"text-orange-500"
                                    }
                                />

                            </div>

                            <h4 className="mt-6 text-lg font-semibold">
                                {item.title}
                            </h4>

                            <p className="mt-2 text-3xl font-bold text-slate-900">
                                {item.value}
                            </p>

                            <p className="mt-4 text-slate-500">
                                {item.desc}
                            </p>

                        </div>

                    );

                })}

            </motion.div>

        </div>

    </div>

</section>

            {/* ================= TUPOKSI ================= */}

<section
    id="tupoksi"
    className="bg-linear-to-b from-blue-50 to-white py-24"
>

    <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
                TUGAS POKOK & FUNGSI
            </span>

            <h2 className="mt-6 text-5xl font-bold text-slate-900">
                Tugas Pokok & Fungsi BAPENDA
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
                BAPENDA mempunyai tugas membantu Bupati dalam pengelolaan
                Pendapatan Asli Daerah melalui berbagai fungsi pelayanan,
                penetapan, penagihan dan pengawasan pajak daerah.
            </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {[
                {
                    icon: FileText,
                    title: "Pendataan",
                    color: "blue",
                    desc: "Pendataan objek pajak secara akurat."
                },
                {
                    icon: Calculator,
                    title: "Penilaian",
                    color: "green",
                    desc: "Penilaian objek pajak sesuai ketentuan."
                },
                {
                    icon: ClipboardCheck,
                    title: "Penetapan",
                    color: "violet",
                    desc: "Penetapan besaran pajak daerah."
                },
                {
                    icon: Wallet,
                    title: "Penagihan",
                    color: "orange",
                    desc: "Pelaksanaan penagihan pajak."
                },
                {
                    icon: Search,
                    title: "Pemeriksaan",
                    color: "blue",
                    desc: "Pemeriksaan kepatuhan wajib pajak."
                },
                {
                    icon: BadgeAlert,
                    title: "Keberatan & Banding",
                    color: "pink",
                    desc: "Pelayanan keberatan dan banding."
                },
            ].map((item,index)=>{

                const Icon=item.icon;

                return(

                    <motion.div
                        key={index}
                        whileHover={{y:-8}}
                        className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg"
                    >

                        <div className="flex items-start gap-5">

                            <div className="rounded-2xl bg-blue-50 p-4">

                                <Icon
                                    size={30}
                                    className="text-blue-600"
                                />

                            </div>

                            <div>

                                <h3 className="text-2xl font-bold">
                                    {item.title}
                                </h3>

                                <p className="mt-3 leading-7 text-slate-500">
                                    {item.desc}
                                </p>

                            </div>

                        </div>

                        <div className="mt-8 flex items-center gap-4">

                            <span className="text-xl font-bold text-blue-600">
                                {String(index+1).padStart(2,"0")}
                            </span>

                            <div className="h-px flex-1 bg-slate-200"/>

                        </div>

                    </motion.div>

                )

            })}

        </div>

        <div className="mx-auto mt-16 max-w-5xl rounded-3xl bg-white p-8 shadow-lg">

            <div className="flex items-center gap-5">

                <div className="rounded-2xl bg-blue-100 p-4">

                    <ShieldCheck
                        className="text-blue-600"
                        size={30}
                    />

                </div>

                <p className="text-lg leading-8 text-slate-600">

                    <span className="font-bold text-slate-900">
                        BAPENDA
                    </span>{" "}
                    berkomitmen memberikan pelayanan terbaik demi
                    terwujudnya tata kelola pendapatan daerah yang
                    transparan, akuntabel, profesional, dan berorientasi
                    pada kepuasan masyarakat.

                </p>

            </div>

        </div>

    </div>

</section>

            {/* ================= STRUKTUR ================= */}

            <Struktur />

        </MainLayout>
    );
}