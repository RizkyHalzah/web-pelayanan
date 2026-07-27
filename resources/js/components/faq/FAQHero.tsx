import { motion } from "framer-motion";
import {
    HelpCircle,
    MessageCircleQuestion,
    Search,
    ShieldCheck,
} from "lucide-react";

export default function FAQHero() {
    return (
        <section className="relative overflow-hidden bg-linear-to-br from-sky-700 via-sky-600 to-cyan-500">

            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">

                <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

                <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

                <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-300/20 blur-3xl" />

            </div>

            <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-28 lg:flex-row">

                {/* Left */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .7 }}
                    className="flex-1"
                >

                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur">

                        <HelpCircle
                            size={18}
                            className="text-cyan-200"
                        />

                        <span className="text-sm font-medium text-white">

                            Pusat Bantuan

                        </span>

                    </div>

                    <h1 className="max-w-3xl text-5xl font-bold leading-tight text-white lg:text-6xl">

                        Frequently
                        <br />

                        Asked Questions

                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-sky-100">

                        Temukan jawaban mengenai seluruh layanan
                        Badan Pendapatan Daerah Kabupaten Banyuwangi.

                        Mulai dari pembayaran pajak,
                        BPHTB,
                        PBB-P2,
                        hingga pelayanan administrasi.

                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">

                        <div className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-3 backdrop-blur">

                            <ShieldCheck
                                size={20}
                                className="text-cyan-200"
                            />

                            <div>

                                <p className="text-sm text-sky-200">

                                    Informasi Resmi

                                </p>

                                <p className="font-semibold text-white">

                                    Terverifikasi

                                </p>

                            </div>

                        </div>

                        <div className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-3 backdrop-blur">

                            <Search
                                size={20}
                                className="text-cyan-200"
                            />

                            <div>

                                <p className="text-sm text-sky-200">

                                    Pencarian Cepat

                                </p>

                                <p className="font-semibold text-white">

                                    100+ Pertanyaan

                                </p>

                            </div>

                        </div>

                    </div>

                </motion.div>

                {/* Right */}

                <motion.div
                    initial={{
                        opacity: 0,
                        x: 50
                    }}
                    animate={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{
                        duration: .8
                    }}
                    className="flex flex-1 justify-center"
                >

                    <div className="relative">

                        {/* Glass Card */}

                        <div className="w-90 rounded-4xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">

                            <div className="flex justify-center">

                                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white">

                                    <MessageCircleQuestion
                                        size={48}
                                        className="text-sky-600"
                                    />

                                </div>

                            </div>

                            <h3 className="mt-8 text-center text-2xl font-bold text-white">

                                Butuh Bantuan?

                            </h3>

                            <p className="mt-3 text-center leading-7 text-sky-100">

                                Cari jawaban dari berbagai pertanyaan
                                yang sering diajukan masyarakat
                                mengenai pelayanan perpajakan daerah.

                            </p>

                            <div className="mt-10 space-y-4">

                                <div className="rounded-xl bg-white/10 px-5 py-4 text-white backdrop-blur">

                                    ✓ Pembayaran Pajak

                                </div>

                                <div className="rounded-xl bg-white/10 px-5 py-4 text-white backdrop-blur">

                                    ✓ Pelayanan PBB-P2

                                </div>

                                <div className="rounded-xl bg-white/10 px-5 py-4 text-white backdrop-blur">

                                    ✓ BPHTB

                                </div>

                                <div className="rounded-xl bg-white/10 px-5 py-4 text-white backdrop-blur">

                                    ✓ Administrasi Pajak

                                </div>

                            </div>

                        </div>

                        {/* Floating */}

                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 3,
                            }}
                            className="absolute -left-10 top-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-xl"
                        >

                            <Search
                                className="text-sky-600"
                            />

                        </motion.div>

                        <motion.div
                            animate={{
                                y: [0, 10, 0],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 4,
                            }}
                            className="absolute -right-8 bottom-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400 text-white shadow-xl"
                        >

                            <HelpCircle />

                        </motion.div>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}