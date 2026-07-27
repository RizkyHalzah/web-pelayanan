import { motion, Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import MainLayout from '../components/layouts/MainLayout';
import Footer from '../components/layouts/Footer';
import Services from './Services';
import VisiMisi from './VisiMisi';
import {
    ArrowDown,
    BarChart3,
    FileText,
    Headphones,
    Wallet,
} from 'lucide-react';
import VisionMission from './VisiMisi';

const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: 'easeOut',
        },
    },
};

const stagger: Variants = {
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

export default function Home() {
    const heroRef = useRef<HTMLDivElement | null>(null);
    const [indicatorStyle, setIndicatorStyle] = useState({
        opacity: 1,
        translateY: 0,
    });

    useEffect(() => {
        const handleScroll = () => {
            if (!heroRef.current) {
                return;
            }

            const heroHeight = heroRef.current.offsetHeight;
            const startFade = heroHeight * 0.7;
            const endFade = heroHeight * 0.9;
            const scroll = window.scrollY;

            let opacity = 1;
            let translateY = 0;

            if (scroll > startFade) {
                const progress = Math.min(
                    (scroll - startFade) / (endFade - startFade),
                    1,
                );

                opacity = 1 - progress;
                translateY = progress * 40;
            }

            setIndicatorStyle({
                opacity,
                translateY,
            });
        };

        window.addEventListener('scroll', handleScroll, {
            passive: true,
        });

        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const features = [
        {
            icon: FileText,
            title: 'Informasi Cepat',
            desc: 'Akses informasi terbaru dan pengumuman resmi kapan saja.',
        },
        {
            icon: Wallet,
            title: 'Layanan Terintegrasi',
            desc: 'Seluruh layanan tersedia dalam satu platform digital.',
        },
        {
            icon: BarChart3,
            title: 'Transparan',
            desc: 'Data dan informasi dapat diakses secara terbuka.',
        },
        {
            icon: Headphones,
            title: 'Pelayanan 24 Jam',
            desc: 'Layanan online yang dapat digunakan kapan pun.',
        },
    ];

    return (
        <MainLayout>
            {/* ================= HERO ================= */}

            <section
                ref={heroRef}
                className="relative overflow-hidden bg-white pt-40 pb-28"
            >
                {/* Background Blur */}
                <div className="absolute top-24 left-0 h-72 w-72 rounded-full bg-blue-50 opacity-70 blur-3xl"></div>

                <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-slate-100 opacity-70 blur-3xl"></div>

                <div className="relative mx-auto max-w-7xl px-8">
                    {/* Heading */}

                    <motion.div
                        className="mx-auto max-w-4xl text-center"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.p
                            variants={fadeUp}
                            className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-blue-600 md:text-base"
                        >
                            Selamat Datang
                        </motion.p>

                        <motion.h1
                            variants={fadeUp}
                            className="text-4xl leading-tight font-extrabold text-slate-900 sm:text-5xl lg:text-6xl"
                        >
                            Platform Resmi BAPENDA
                            <br />
                            Kabupaten Banyuwangi
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600"
                        >
                            Sarana Aktualisasi Masyarakat Sadar Pajak.
                            <br />
                            Kelola informasi, layanan, pembayaran pajak, dan
                            akses publik dalam satu platform yang cepat,
                            transparan, dan profesional.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            className="mt-10 flex flex-wrap justify-center gap-5"
                        >
                            <a
                                href="#services"
                                className="rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
                            >
                                Jelajahi Layanan
                            </a>

                            <a
                                href="#"
                                className="rounded-full border border-blue-600 px-8 py-4 font-semibold text-blue-600 transition hover:bg-blue-50"
                            >
                                Tentang Kami
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Feature Cards */}

                    <motion.div
                        className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {features.map((item) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                    variants={fadeUp}
                                >
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                                        <Icon size={28} />
                                    </div>

                                    <h3 className="text-xl font-semibold text-slate-900">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 leading-7 text-slate-600">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Scroll Indicator */}

                    <motion.div
                        className="mt-16 flex flex-col items-center"
                        animate={{
                            opacity: indicatorStyle.opacity,
                            y: indicatorStyle.translateY,
                        }}
                        transition={{
                            duration: 0.25,
                        }}
                    >
                        <motion.div
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-200 text-blue-600"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 1.2, ease: 'easeInOut', repeat: Infinity }}
                        >
                            <ArrowDown size={22} />
                        </motion.div>

                        <p className="mt-4 text-sm text-slate-500">
                            Scroll untuk melihat layanan
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* VISION & MISSION */}
            <VisionMission />

            {/* ================= SERVICES ================= */}

            <Services/>
        
        </MainLayout>
    );
}
