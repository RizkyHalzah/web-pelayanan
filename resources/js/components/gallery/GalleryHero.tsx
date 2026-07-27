import { motion } from "framer-motion";
import {
    ArrowRight,
    Camera,
    CalendarDays,
    Images,
    MapPin,
} from "lucide-react";

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: (delay: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            delay,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    }),
};

const heroImages = [
    "/images/gallery/gallery-1.jpg",
    "/images/gallery/gallery-2.jpg",
    "/images/gallery/gallery-3.jpg",
    "/images/gallery/gallery-4.jpg",
    "/images/gallery/gallery-5.jpg",
];

const statistics = [
    {
        icon: Images,
        value: "120+",
        label: "Dokumentasi",
    },
    {
        icon: Camera,
        value: "15+",
        label: "Kegiatan",
    },
    {
        icon: CalendarDays,
        value: "5 Tahun",
        label: "Arsip",
    },
];

export default function GalleryHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-sky-700 via-blue-700 to-indigo-900 pt-36 pb-28">
            {/* Background Blur */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

                <div className="absolute top-40 right-0 h-[420px] w-[420px] rounded-full bg-blue-300/10 blur-3xl" />

                <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-indigo-400/10 blur-[120px]" />
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.05]">
                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* ===================================== */}
                    {/* LEFT CONTENT */}
                    {/* ===================================== */}

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        className="relative z-10"
                    >
                        {/* Badge */}

                        <motion.div
                            variants={fadeUp}
                            custom={0}
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-xl"
                        >
                            <Camera size={16} />

                            <span>Galeri Dokumentasi BAPENDA</span>
                        </motion.div>

                        {/* Heading */}

                        <motion.h1
                            variants={fadeUp}
                            custom={0.1}
                            className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl xl:text-6xl"
                        >
                            Dokumentasi
                            <span className="block bg-gradient-to-r from-cyan-300 to-sky-100 bg-clip-text text-transparent">
                                Kegiatan &
                                Pelayanan
                            </span>
                        </motion.h1>

                        {/* Description */}

                        <motion.p
                            variants={fadeUp}
                            custom={0.2}
                            className="mt-8 max-w-xl text-lg leading-8 text-blue-100"
                        >
                            Jelajahi berbagai dokumentasi kegiatan,
                            pelayanan, sosialisasi, penghargaan,
                            serta aktivitas Badan Pendapatan Daerah
                            Kabupaten Banyuwangi yang telah
                            terdokumentasi selama beberapa tahun
                            terakhir.
                        </motion.p>

                        {/* Statistics */}

                        <motion.div
                            variants={fadeUp}
                            custom={0.3}
                            className="mt-10 grid grid-cols-3 gap-4"
                        >
                            {statistics.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={item.label}
                                        whileHover={{
                                            y: -6,
                                            scale: 1.03,
                                        }}
                                        transition={{
                                            duration: 0.25,
                                        }}
                                        className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl"
                                    >
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                                            <Icon
                                                size={22}
                                                className="text-cyan-200"
                                            />
                                        </div>

                                        <h3 className="mt-4 text-3xl font-black text-white">
                                            {item.value}
                                        </h3>

                                        <p className="mt-1 text-sm text-blue-100">
                                            {item.label}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* CTA */}

                        <motion.div
                            variants={fadeUp}
                            custom={0.4}
                            className="mt-10 flex flex-wrap gap-4"
                        >
                            <a
                                href="#gallery"
                                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-sky-700 transition hover:scale-105"
                            >
                                Jelajahi Galeri

                                <ArrowRight size={18} />
                            </a>

                            <div className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-blue-100 backdrop-blur">
                                <MapPin size={18} />

                                Banyuwangi, Jawa Timur
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.3,
                        }}
                        className="relative hidden lg:flex items-center justify-center"
                    >
                        {/* Main Photo */}
                        <motion.div
                            whileHover={{
                                scale: 1.03,
                                rotate: -1,
                            }}
                            transition={{
                                duration: 0.35,
                            }}
                            className="relative z-20 overflow-hidden rounded-[32px] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-xl"
                        >
                            <img
                                src={heroImages[0]}
                                alt="Gallery Hero"
                                className="h-[520px] w-[360px] rounded-[24px] object-cover"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                            {/* Bottom Information */}
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                                    <div className="flex items-center gap-2 text-cyan-200">
                                        <Camera size={16} />

                                        <span className="text-sm font-medium">
                                            Dokumentasi Terbaru
                                        </span>
                                    </div>

                                    <h3 className="mt-3 text-xl font-bold text-white">
                                        Sosialisasi Pajak Daerah
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-blue-100">
                                        Edukasi kepada masyarakat mengenai
                                        pentingnya kesadaran membayar pajak
                                        daerah.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Photo - Top */}
                        <motion.div
                            animate={{
                                y: [-8, 8, -8],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute -left-6 top-10 z-30 overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-2 shadow-xl backdrop-blur-xl"
                        >
                            <img
                                src={heroImages[1]}
                                alt="Gallery"
                                className="h-40 w-32 rounded-2xl object-cover"
                            />
                        </motion.div>

                        {/* Floating Photo - Right */}
                        <motion.div
                            animate={{
                                y: [10, -10, 10],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute -right-10 top-28 z-10 overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-2 shadow-xl backdrop-blur-xl"
                        >
                            <img
                                src={heroImages[2]}
                                alt="Gallery"
                                className="h-48 w-36 rounded-2xl object-cover"
                            />
                        </motion.div>

                        {/* Floating Photo - Bottom */}
                        <motion.div
                            animate={{
                                y: [-6, 6, -6],
                            }}
                            transition={{
                                duration: 4.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute bottom-6 -left-12 z-10 overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-2 shadow-xl backdrop-blur-xl"
                        >
                            <img
                                src={heroImages[3]}
                                alt="Gallery"
                                className="h-36 w-44 rounded-2xl object-cover"
                            />
                        </motion.div>

                        {/* Floating Photo - Bottom Right */}
                        <motion.div
                            animate={{
                                y: [8, -8, 8],
                            }}
                            transition={{
                                duration: 5.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute bottom-0 right-0 z-30 overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-2 shadow-xl backdrop-blur-xl"
                        >
                            <img
                                src={heroImages[4]}
                                alt="Gallery"
                                className="h-32 w-40 rounded-2xl object-cover"
                            />
                        </motion.div>

                        {/* Floating Info Card */}
                        <motion.div
                            animate={{
                                y: [-8, 8, -8],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                            }}
                            className="absolute right-12 bottom-32 z-40 rounded-2xl border border-white/20 bg-white/10 p-5 shadow-xl backdrop-blur-xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/20">
                                    <Images
                                        size={24}
                                        className="text-cyan-200"
                                    />
                                </div>

                                <div>
                                    <h4 className="text-lg font-bold text-white">
                                        Arsip Digital
                                    </h4>

                                    <p className="text-sm text-blue-100">
                                        Dokumentasi kegiatan sejak 2020
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative Ring */}
                        <div className="absolute inset-0 -z-10 flex items-center justify-center">
                            <div className="h-[560px] w-[560px] rounded-full border border-white/10" />

                            <div className="absolute h-[430px] w-[430px] rounded-full border border-white/5" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}


<motion.div
    initial="hidden"
    animate="visible"
    className="relative flex justify-center lg:justify-end"
>
    <div className="relative">
        {/* Main Image Stack */}
        <div className="grid grid-cols-2 gap-4">
            {heroImages.slice(0, 4).map((src, i) => (
                <motion.div
                    key={src}
                    variants={fadeUp}
                    custom={0.1 + i * 0.1}
                    className="overflow-hidden rounded-2xl border border-white/20 shadow-xl"
                >
                    <img
                        src={src}
                        alt={`Galeri ${i + 1}`}
                        className="h-28 w-full object-cover md:h-36"
                    />
                </motion.div>
            ))}
        </div>

        {/* Floating Badge */}
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -right-4 -top-4 flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-xl"
        >
            <Images size={20} className="text-cyan-200" />
            <span className="text-sm font-semibold text-white">
                {heroImages.length}+ Foto
            </span>
        </motion.div>

        {/* Bottom Floating Card */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -bottom-4 -left-6 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-xl"
        >
            <MapPin size={18} className="text-cyan-200" />
            <span className="text-sm font-medium text-white">
                Banyuwangi
            </span>
        </motion.div>
    </div>
</motion.div>
