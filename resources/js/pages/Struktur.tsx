import { motion } from 'framer-motion';
import { Briefcase, Building2, Landmark, User } from 'lucide-react';

const departments = [
    {
        title: 'Bidang Pendataan & Penetapan',
        icon: Building2,
        color: 'violet',
        description:
            'Melaksanakan pendataan, penilaian, validasi serta penetapan pajak daerah.',
        children: [
            'Pendataan, Penilaian PBB P2 & BPHTB',
            'Pendataan Pajak Daerah Lainnya',
            'Validasi & Penetapan',
        ],
    },
    {
        title: 'Bidang Penagihan & Pemeriksaan',
        icon: Landmark,
        color: 'orange',
        description:
            'Melaksanakan penagihan, pemeriksaan, dan penanganan keberatan pajak daerah.',
        children: [
            'Penagihan PBB P2 & BPHTB',
            'Penagihan Pajak Daerah Lainnya',
            'Pemeriksaan & Keberatan',
        ],
    },
];

export default function Struktur() {
    return (
        <section className="bg-slate-50 py-24">
            <div className="mx-auto max-w-7xl px-8">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                        Struktur Organisasi
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-slate-900">
                        Susunan Organisasi BAPENDA
                    </h2>

                    <p className="mt-5 leading-8 text-slate-600">
                        Struktur organisasi Badan Pendapatan Daerah Kabupaten
                        Banyuwangi dalam menjalankan pelayanan publik secara
                        profesional, transparan, dan akuntabel.
                    </p>
                </motion.div>

                {/* Kepala */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-20 flex justify-center"
                >
                    <div className="w-full max-w-md rounded-4xl border border-blue-100 bg-white px-10 py-10 shadow-xl">
                        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-50">
                            <User size={42} className="text-blue-600" />
                        </div>

                        <h3 className="mt-8 text-center text-3xl font-bold text-slate-900">
                            Kepala Badan
                        </h3>

                        <p className="mt-4 text-center leading-7 text-slate-600">
                            Memimpin dan mengoordinasikan seluruh kegiatan Badan
                            Pendapatan Daerah Kabupaten Banyuwangi.
                        </p>

                        <div className="mt-8 h-1 rounded-full bg-linear-to-r from-blue-500 to-blue-700" />
                    </div>
                </motion.div>

                {/* Garis */}
                
<div className="relative mx-auto h-20 w-3/4 max-w-3xl">
    <div className="absolute left-1/2 top-0 h-8 w-px -translate-x-1/2 bg-blue-200" />

    <div className="absolute top-8 left-8 right-8 h-px bg-blue-200" />

    <div className="absolute left-8 top-8 h-10 w-px bg-blue-200" />

    <div className="absolute right-8 top-8 h-10 w-px bg-blue-200" />
</div>

                {/* Sekretaris + Jabatan */}
                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg">
                        <div className="flex items-center gap-5">
                            <div className="rounded-2xl bg-blue-50 p-4">
                                <Briefcase className="text-blue-600" size={28} />
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-slate-900">
                                    Sekretaris
                                </h3>
                                <p className="mt-2 text-slate-500">
                                    Mengoordinasikan administrasi, keuangan, dan
                                    penyusunan program.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 space-y-4">
                            <div className="rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4">
                                • Sub Bagian Umum & Keuangan
                            </div>
                            <div className="rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4">
                                • Sub Penyusunan Program
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg">
                            <div className="flex items-center gap-5">
                                <div className="rounded-2xl bg-green-50 p-4">
                                    <User size={28} className="text-green-600" />
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900">
                                    Kelompok Jabatan Fungsional
                                </h3>
                            </div>

                            <p className="mt-8 leading-8 text-slate-600">
                                Kelompok jabatan yang mendukung pelaksanaan tugas
                                teknis sesuai bidang keahlian dan kompetensi
                                masing-masing.
                            </p>

                            <div className="mt-8 rounded-2xl bg-green-50 px-5 py-4 text-green-700">
                                ✓ Mendukung tugas teknis sesuai keahlian
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Connector ke Bidang */}
                    <div className="relative mx-auto mb-8 mt-12 h-20 w-3/4 max-w-3xl">
                        {/* garis vertikal */}
                        <div className="absolute left-1/2 top-0 h-8 w-px -translate-x-1/2 bg-blue-200" />

                        {/* garis horizontal */}
                        <div className="absolute left-1/4 right-1/4 top-8 h-px bg-blue-200" />

                        {/* turun kiri */}
                        <div className="absolute left-1/4 top-8 h-10 w-px bg-blue-200" />

                        {/* turun kanan */}
                        <div className="absolute right-1/4 top-8 h-10 w-px bg-blue-200" />
                    </div>

                {/* Bidang */}
                <div className="mt-4 grid gap-8 lg:grid-cols-2">
                    {departments.map((dept, index) => {
                        const Icon = dept.icon;
                        const isViolet = dept.color === 'violet';

                        return (
                            <motion.div
                                key={`${dept.title}-${index}`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: index * 0.2,
                                    duration: 0.6,
                                }}
                                viewport={{ once: true }}
                                whileHover={{ y: -6 }}
                                className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                            >
                                <div className="flex items-start gap-5">
                                    <div
                                        className={`rounded-2xl p-4 ${
                                            isViolet
                                                ? 'bg-violet-100'
                                                : 'bg-orange-100'
                                        }`}
                                    >
                                        <Icon
                                            size={30}
                                            className={
                                                isViolet
                                                    ? 'text-violet-600'
                                                    : 'text-orange-500'
                                            }
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900">
                                            {dept.title}
                                        </h3>
                                        <p className="mt-2 text-slate-500">
                                            {dept.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-10 space-y-4">
                                    {dept.children.map((child, childIndex) => (
                                        <div
                                            key={`${child}-${childIndex}`}
                                            className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-white px-5 py-5 transition hover:border-blue-300 hover:shadow-md"
                                        >
                                            <div
                                                className={`flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold text-white ${
                                                    isViolet
                                                        ? 'bg-violet-600'
                                                        : 'bg-orange-500'
                                                }`}
                                            >
                                                {String(childIndex + 1).padStart(2, '0')}
                                            </div>

                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                                    Sub Bidang
                                                </p>
                                                <p className="font-medium text-slate-800">
                                                    {child}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div
                                    className={`mt-8 h-1 rounded-full ${
                                        isViolet
                                            ? 'bg-violet-600'
                                            : 'bg-orange-500'
                                    }`}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
