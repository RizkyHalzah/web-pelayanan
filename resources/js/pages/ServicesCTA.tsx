import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function ServiceCTA() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-28 overflow-hidden rounded-4xl bg-linear-to-r from-blue-600 via-sky-600 to-cyan-500 p-10 text-white lg:p-16"
        >
            <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">

                <div className="max-w-2xl">

                    <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                        🚀 Mulai Sekarang
                    </span>

                    <h2 className="mt-6 text-4xl font-bold">
                        Butuh Bantuan Mengenai Pajak Daerah?
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-blue-100">
                        Tim BAPENDA Kabupaten Banyuwangi siap membantu Anda
                        mengenai pelayanan perpajakan daerah secara cepat,
                        profesional, dan transparan.
                    </p>

                </div>

                <div className="flex flex-wrap gap-4">

                    <button className="flex items-center gap-3 rounded-2xl bg-white px-7 py-4 font-semibold text-blue-700 transition hover:scale-105">
                        <PhoneCall size={20} />
                        Hubungi Kami
                    </button>

                    <button className="flex items-center gap-3 rounded-2xl border border-white/30 px-7 py-4 font-semibold backdrop-blur transition hover:bg-white/10">
                        Semua Layanan
                        <ArrowRight size={18} />
                    </button>

                </div>

            </div>
        </motion.section>
    );
}