import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Camera,
    FileImage,
    ImagePlus,
} from "lucide-react";

export default function GalleryCTA() {
    return (
        <section className="pb-24 pt-8">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-800 shadow-2xl"
                >
                    {/* Background Decoration */}

                    <div className="absolute -left-16 -top-16 h-72 w-72 rounded-full bg-cyan-300/15 blur-3xl" />

                    <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />

                    <div className="absolute inset-0 opacity-[0.06]">
                        <div
                            className="h-full w-full"
                            style={{
                                backgroundImage:
                                    "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                                backgroundSize: "36px 36px",
                            }}
                        />
                    </div>

                    <div className="relative z-10 grid gap-12 p-10 lg:grid-cols-2 lg:p-14">

                        {/* Left */}

                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                                <Camera size={16} />

                                Dokumentasi BAPENDA
                            </div>

                            <h2 className="mt-6 text-4xl font-black leading-tight text-white">
                                Mari Ikuti
                                <span className="block text-cyan-200">
                                    Kegiatan Kami
                                </span>
                            </h2>

                            <p className="mt-6 max-w-xl leading-8 text-blue-100">
                                BAPENDA Kabupaten Banyuwangi terus
                                menyelenggarakan berbagai kegiatan pelayanan,
                                sosialisasi, edukasi perpajakan, hingga inovasi
                                digital. Jangan lewatkan dokumentasi terbaru
                                kami.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">

                                <Link
                                    href="/services"
                                    className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-sky-700 transition hover:scale-105"
                                >
                                    Lihat Layanan

                                    <ArrowRight size={18} />
                                </Link>

                                <a
                                    href="#gallery"
                                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                                >
                                    Jelajahi Galeri
                                </a>

                            </div>
                        </div>

                        {/* Right */}

                        <div className="grid grid-cols-2 gap-5">

                            <motion.div
                                whileHover={{
                                    y: -8,
                                }}
                                className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                                    <FileImage
                                        size={28}
                                        className="text-cyan-200"
                                    />
                                </div>

                                <h3 className="mt-6 text-4xl font-black text-white">
                                    120+
                                </h3>

                                <p className="mt-2 text-blue-100">
                                    Dokumentasi
                                    <br />
                                    Kegiatan
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{
                                    y: -8,
                                }}
                                transition={{
                                    delay: 0.05,
                                }}
                                className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                                    <ImagePlus
                                        size={28}
                                        className="text-cyan-200"
                                    />
                                </div>

                                <h3 className="mt-6 text-4xl font-black text-white">
                                    15+
                                </h3>

                                <p className="mt-2 text-blue-100">
                                    Agenda
                                    <br />
                                    Tahunan
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{
                                    y: -8,
                                }}
                                transition={{
                                    delay: 0.1,
                                }}
                                className="col-span-2 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur"
                            >
                                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                                    <div>
                                        <h3 className="text-2xl font-bold text-white">
                                            Arsip Digital Terintegrasi
                                        </h3>

                                        <p className="mt-2 max-w-lg leading-7 text-blue-100">
                                            Seluruh dokumentasi kegiatan
                                            BAPENDA Kabupaten Banyuwangi
                                            disimpan secara digital untuk
                                            memudahkan masyarakat memperoleh
                                            informasi dan transparansi kegiatan.
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-white px-6 py-5 text-center">
                                        <p className="text-sm text-slate-500">
                                            Sejak
                                        </p>

                                        <h4 className="text-4xl font-black text-sky-700">
                                            2020
                                        </h4>
                                    </div>

                                </div>
                            </motion.div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}