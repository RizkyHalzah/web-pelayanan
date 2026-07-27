import { motion } from 'framer-motion';

const missions = [
    'Mewujudkan aksesibilitas dan kualitas pelayanan bidang pendidikan, kesehatan dan kebutuhan dasar lainnya.',
    'Mewujudkan daya saing ekonomi daerah melalui pertumbuhan ekonomi yang berkualitas dan berkelanjutan berbasis potensi sumber daya alam dan kearifan lokal.',
    'Meningkatkan kuantitas dan kualitas infrastruktur fisik, ekonomi, dan sosial.',
    'Optimalisasi sumber daya daerah berbasis pemberdayaan masyarakat, pembangunan berkelanjutan dan berwawasan lingkungan.',
    'Mewujudkan tata pemerintahan yang baik dan bersih (good and clean governance) serta layanan publik yang berkualitas berbasis Teknologi Informasi.',
];

export default function VisionMission() {
    return (
        <section
            id="vision"
            className="relative overflow-hidden bg-white py-28"
        >
            {/* Background Blur */}
            <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-100 opacity-40 blur-3xl" />

            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-100 opacity-40 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-8">
                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
                        Visi & Misi
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
                        Arah Pembangunan Kabupaten Banyuwangi
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600">
                        Landasan pembangunan daerah dalam mewujudkan masyarakat
                        yang semakin sejahtera, mandiri, dan berakhlak mulia
                        melalui pelayanan publik yang berkualitas.
                    </p>
                </motion.div>

                {/* Content */}

                <div className="mt-20 grid gap-10 lg:grid-cols-12">
                    {/* VISI */}

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -6 }}
                        className="relative rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:shadow-xl lg:col-span-5"
                    >
                        {/* Decorative Quote */}

                        <span className="absolute top-6 right-8 select-none text-8xl leading-none font-black text-blue-100">
                            &ldquo;
                        </span>

                        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                            VISI
                        </span>

                        <div className="my-8 h-1 w-20 rounded-full bg-blue-600" />

                        <blockquote className="relative text-2xl font-semibold leading-relaxed text-slate-800 md:text-3xl">
                            Terwujudnya Masyarakat Banyuwangi Yang Semakin
                            Sejahtera, Mandiri, Dan Berakhlak Mulia Melalui
                            Peningkatan Perekonomian Dan Kualitas Sumber
                            Daya Manusia.
                        </blockquote>

                    </motion.div>

                    {/* MISI */}

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -6 }}
                        className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:shadow-xl lg:col-span-7"
                    >
                        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                            MISI
                        </span>

                        <div className="my-8 h-1 w-20 rounded-full bg-blue-600" />

                        <div className="space-y-6">
                            {missions.map((mission, index) => (
                                <div
                                    key={index}
                                    className="group flex gap-5 border-b-2 border-slate-200 pb-7 transition-all duration-300 hover:border-blue-300 last:border-0 last:pb-0"
                                >
                                    {/* Number Badge */}

                                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-xl font-bold text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>

                                    <p className="leading-8 text-slate-600 transition-colors duration-300 group-hover:text-slate-900">
                                        {mission}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}