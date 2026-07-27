import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import {
    ArrowRight,
    ShieldCheck,
    House,
    Landmark,
    UtensilsCrossed,
    Hotel,
    ParkingCircle,
    Ticket,
    Presentation,
    Droplets,
    CarFront,
} from "lucide-react";

const services = [
    {
        title: 'PBB-P2',
        description:
            'Pelayanan Pajak Bumi dan Bangunan Perdesaan dan Perkotaan secara online.',
        features: ['Informasi Pajak', 'Persyaratan', 'Pembayaran'],
        icon: House,
        color: 'bg-emerald-100',
        iconColor: 'text-emerald-700',

        detailUrl: 'services/pbbp2',

        portalUrl: 'https://beta.banyuwangikab.go.id/layanan',
    },
    {
        title: 'BPHTB',
        description: 'Pelayanan Bea Perolehan Hak atas Tanah dan Bangunan.',
        features: ['Validasi', 'Persyaratan', 'Pembayaran'],
        icon: Landmark,
        color: 'bg-indigo-100',
        iconColor: 'text-indigo-700',

        detailUrl: '/services/bphtb',

        portalUrl: '#',
    },
    {
        title: 'Pajak Makanan & Minuman',
        description: 'Pelayanan pajak restoran dan usaha makanan minuman.',
        features: ['Tarif', 'Pelaporan', 'Pembayaran'],
        icon: UtensilsCrossed,
        color: 'bg-orange-100',
        iconColor: 'text-orange-700',

        detailUrl: '/services/makanan',

        portalUrl: '#',
    },
    {
        title: 'Pajak Jasa Perhotelan',
        description: 'Pelayanan perpajakan bagi penyedia jasa perhotelan.',
        features: ['Tarif', 'Pelaporan', 'Pembayaran'],
        icon: Hotel,
        color: 'bg-cyan-100',
        iconColor: 'text-cyan-700',

        detailUrl: '/services/perhotelan',

        portalUrl: '#',
    },
    {
        title: 'Pajak Jasa Parkir',
        description: 'Pelayanan pajak penyelenggaraan tempat parkir.',
        features: ['Tarif', 'Pelaporan', 'Pembayaran'],
        icon: ParkingCircle,
        color: 'bg-violet-100',
        iconColor: 'text-violet-700',

        detailUrl: '/services/parkir',

        portalUrl: '#',
    },
    {
        title: 'Pajak Hiburan',
        description: 'Pelayanan perpajakan untuk penyelenggara hiburan.',
        features: ['Tarif', 'Pelaporan', 'Pembayaran'],
        icon: Ticket,
        color: 'bg-pink-100',
        iconColor: 'text-pink-700',

        detailUrl: '/services/hiburan',

        portalUrl: '#',
    },
    {
        title: 'Pajak Reklame',
        description: 'Pelayanan pajak reklame dan media promosi.',
        features: ['Perizinan', 'Tarif', 'Pembayaran'],
        icon: Presentation,
        color: 'bg-yellow-100',
        iconColor: 'text-yellow-700',

        detailUrl: '/services/reklame',

        portalUrl: '#',
    },
    {
        title: 'Pajak Air Tanah',
        description: 'Pelayanan perpajakan atas pemanfaatan air tanah.',
        features: ['Informasi', 'Pelaporan', 'Pembayaran'],
        icon: Droplets,
        color: 'bg-sky-100',
        iconColor: 'text-sky-700',

        detailUrl: '/services/airtanah',

        portalUrl: '#',
    },
    {
        title: 'Opsen PKB & BBNKB',
        description: 'Informasi dan pelayanan Opsen PKB serta BBNKB.',
        features: ['Tarif', 'Informasi', 'Pelayanan'],
        icon: CarFront,
        color: 'bg-green-100',
        iconColor: 'text-green-700',

        detailUrl: '/services/bbnkb',

        portalUrl: '#',
    },
];

export default function Services() {
    return (
        <section
            id="layanan"
            className="relative overflow-hidden bg-slate-50 py-24"
        >
            {/* Background */}
            <div className="absolute top-20 -left-24 h-72 w-72 rounded-full bg-blue-100 opacity-40 blur-3xl" />

            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-100 opacity-40 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                {/* SECTION PAGE 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between"
                >
                    {/* Left */}
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
                            🌐 Portal Layanan Digital
                        </span>

                        <h2 className="mt-6 text-5xl leading-tight font-bold text-slate-900">
                            Pilih Jenis Pajak
                            <span className="block text-blue-600">
                                yang Ingin Anda Akses
                            </span>
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-500">
                            Seluruh layanan perpajakan daerah Kabupaten
                            Banyuwangi kini tersedia dalam satu portal digital.
                            Pilih jenis pajak yang sesuai untuk memperoleh
                            informasi, persyaratan, pelaporan, hingga pembayaran
                            secara online.
                        </p>
                    </div>

                    {/* Right Card */}

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -6 }}
                        className="w-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:max-w-md"
                    >
                        <div className="flex items-start gap-5">
                            <div className="flex h-16 w-40 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                                <ShieldCheck size={36} />
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-900">
                                    Aman & Terpercaya
                                </h3>

                                <p className="mt-3 leading-7 text-slate-500">
                                    Seluruh layanan menggunakan sistem digital
                                    yang aman, transparan, serta menjaga
                                    kerahasiaan data wajib pajak.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="rounded-2xl bg-slate-50 p-4">
                                <h4 className="text-2xl font-bold text-blue-600">
                                    9
                                </h4>

                                <p className="mt-1 text-sm text-slate-500">
                                    Jenis Pajak
                                </p>
                            </div>

                            <div className="rounded-2xl bg-slate-50 p-4">
                                <h4 className="text-2xl font-bold text-emerald-600">
                                    24/7
                                </h4>

                                <p className="mt-1 text-sm text-slate-500">
                                    Layanan Online
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                <div className="mt-20">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-10 flex items-center justify-between"
                    >
                        <div>
                            <h3 className="text-3xl font-bold text-slate-900">
                                Portal Layanan Pajak
                            </h3>

                            <p className="mt-2 text-slate-500">
                                Seluruh layanan perpajakan daerah tersedia
                                secara digital.
                            </p>
                        </div>

                        <span className="hidden rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-600 md:block">
                            9 Jenis Pajak
                        </span>
                    </motion.div>

                    {/* ================= MOBILE ================= */}
                    <div className="lg:hidden">
                        {/* Shortcut */}
                        <div className="mb-8">
                            <div className="mb-6 flex items-center">
                                <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
                                    Pilihan Layanan
                                </span>
                            </div>

                            <div className="grid grid-cols-3 gap-5">
                                {services.map((service, index) => {
                                    const Icon = service.icon;

                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 15 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.35,
                                                delay: index * 0.05,
                                            }}
                                        >
                                            <Link
                                                href={service.portalUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex flex-col items-center"
                                            >
                                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-600 group-hover:bg-blue-600">
                                                    <Icon
                                                        size={28}
                                                        className="text-blue-600 transition group-hover:text-white"
                                                    />
                                                </div>

                                                <span className="mt-2 text-center text-[11px] leading-tight font-medium text-slate-600">
                                                    {service.title}
                                                </span>
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* CARD LIST */}
                        <div className="space-y-5">
                            {services.map((service, index) => {
                                const Icon = service.icon;

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.45,
                                            delay: index * 0.05,
                                        }}
                                        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                                    >
                                        <div className="flex items-start justify-between">
                                            <div
                                                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${service.color}`}
                                            >
                                                <Icon
                                                    size={26}
                                                    className={service.iconColor}
                                                />
                                            </div>

                                            <ArrowRight
                                                size={22}
                                                className="text-slate-300"
                                            />
                                        </div>

                                        <h3 className="mt-6 text-xl font-bold text-slate-900">
                                            {service.title}
                                        </h3>

                                        <p className="mt-3 leading-7 text-slate-500">
                                            {service.description}
                                        </p>

                                        <div className="mt-6 space-y-2">
                                            {service.features.map((feature) => (
                                                <div
                                                    key={feature}
                                                    className="flex items-center gap-3"
                                                >
                                                    <div className="h-2 w-2 rounded-full bg-blue-500" />

                                                    <span className="text-sm text-slate-600">
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-6">
                                            <Link
                                                href={service.detailUrl}
                                                className="inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3"
                                            >
                                                Detail Layanan
                                                <ArrowRight size={18} />
                                            </Link>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* ================= DESKTOP ================= */}
                    <div className="hidden gap-7 lg:grid lg:grid-cols-2 xl:grid-cols-3">
                        {services.map((service, index) => {
                            const Icon = service.icon;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.45,
                                        delay: index * 0.08,
                                    }}
                                    whileHover={{ y: -8 }}
                                    className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:border-blue-200 hover:shadow-xl"
                                >
                                    {/* Header */}
                                    <div className="flex items-start justify-between">
                                        <div
                                            className={`flex h-16 w-16 items-center justify-center rounded-2xl ${service.color}`}
                                        >
                                            <Icon
                                                size={30}
                                                className={service.iconColor}
                                            />
                                        </div>

                                        <ArrowRight className="text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-blue-600" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="mt-8 text-2xl font-bold text-slate-900">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-3 leading-7 text-slate-500">
                                        {service.description}
                                    </p>

                                    {/* Feature */}
                                    <div className="mt-8 space-y-3">
                                        {service.features.map((feature) => (
                                            <div
                                                key={feature}
                                                className="flex items-center gap-3"
                                            >
                                                <div className="h-2 w-2 rounded-full bg-blue-500" />

                                                <span className="text-slate-600">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Footer Button */}
                                    <div className="mt-auto flex gap-3 pt-8">
                                        {/* Detail */}
                                        <div className="mt-auto pt-8">
                                            <Link
                                                href={service.portalUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 font-semibold text-blue-600 transition-all hover:gap-3"
                                            >
                                                Buka Layanan
                                                <ArrowRight size={18} />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
