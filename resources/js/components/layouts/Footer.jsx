import { Link } from "@inertiajs/react";
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import {
    FaFacebookF,
    FaInstagram,
    FaTiktok,
    FaYoutube,
} from 'react-icons/fa';

const helpMenus = [
    {
        title: "FAQ",
        href: "/faq",
    },
    {
        title: "Panduan",
        href: "/panduan",
    },
    {
        title: "Hubungi Kami",
        href: "/kontak",
    },
    {
        title: "Kebijakan Privasi",
        href: "/privacy-policy",
    },
];

export function Footer() {
    return (
        <footer 
        id="kontak"
        className="border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-8 py-6">
                <div className="grid gap-8 lg:grid-cols-12">
                    {/* Company */}

                    <div className="lg:col-span-5">
                        <div className="flex items-center gap-3">
                            <img
                                src="/images/logo.jpg"
                                alt="Logo"
                                className="h-12 w-12"
                            />

                            <div>
                                <h3 className="text-xl font-bold text-slate-900">
                                    BAPENDA
                                </h3>

                                <p className="text-sm text-slate-500">
                                    Kabupaten Banyuwangi
                                </p>
                            </div>
                        </div>

                        <p className="mt-4 max-w-md leading-7 text-slate-600">
                            Portal resmi Badan Pendapatan Daerah Kabupaten
                            Banyuwangi yang memberikan informasi, layanan, serta
                            akses digital perpajakan daerah.
                        </p>

                        <div className="mt-5 space-y-3">
                            <div className="flex items-center gap-3 text-slate-600">
                                <MapPin size={17} />
                                <span>
                                    Jl. Jaksa Agung Suprapto No.37, Banyuwangi
                                </span>
                            </div>

                            <div className="flex items-center gap-3 text-slate-600">
                                <Phone size={17} />
                                <span>(0333) 418818</span>
                            </div>

                            <div className="flex items-center gap-3 text-slate-600">
                                <Mail size={17} />
                                <span>bapenda@banyuwangikab.go.id</span>
                            </div>
                        </div>

                        <div className="mt-6 flex gap-3">
                    <a
                        href="https://www.instagram.com/bapenda_banyuwangi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 transition-all hover:border-pink-500 hover:bg-pink-50 hover:text-pink-600"
                    >
                        <FaInstagram size={18} />
                    </a>

                    <a
                        href="https://www.facebook.com/BapendaBanyuwangi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 transition-all hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600"
                    >
                        <FaFacebookF size={18} />
                    </a>

                    <a
                        href="https://www.youtube.com/@badanpendapatandaerahbanyu3040"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 transition-all hover:border-red-600 hover:bg-red-50 hover:text-red-600"
                    >
                        <FaYoutube size={18} />
                    </a>

                <a
                    href="https://www.tiktok.com/@bappedabanyuwangi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
                >
                    <FaTiktok size={18} />
                </a>

                    <a
                    href="https://x.com/BapendaBwi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 transition-all hover:border-black hover:bg-slate-100 hover:text-black"
                >
                    <FaXTwitter size={18} />
                </a>
                    </div>

                    </div>

                    {/* Layanan */}

                    <div className="lg:col-span-2">
                        <h4 className="mb-4 text-lg font-semibold text-slate-900">
                            Layanan
                        </h4>

                        <ul className="space-y-2.5">
                            {[
                                'PBB',
                                'BPHTB',
                                'E-Billing',
                                'Informasi Pajak',
                                'Dokumen',
                            ].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="transition hover:text-blue-600"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Bantuan */}

                    <div className="lg:col-span-3">
                        <h4 className="mb-4 text-lg font-semibold text-slate-900">
                            Bantuan
                        </h4>

                        <ul className="space-y-2.5">
                            <li>
                                <Link
                                    href="/faq"
                                    className="transition hover:text-blue-600"
                                >
                                    FAQ
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/panduan"
                                    className="transition hover:text-blue-600"
                                >
                                    Panduan
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/kontak"
                                    className="transition hover:text-blue-600"
                                >
                                    Hubungi Kami
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/privacy-policy"
                                    className="transition hover:text-blue-600"
                                >
                                    Kebijakan Privasi
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom */}

            <div className="border-t border-slate-200">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-8 py-4 text-sm text-slate-500 md:flex-row">
                    <p>
                        © 2026 BAPENDA Kabupaten Banyuwangi. All rights
                        reserved.
                    </p>

                    <div className="flex flex-wrap gap-5">
                        <a href="#" className="hover:text-blue-600">
                            Kebijakan Privasi
                        </a>

                        <a href="#" className="hover:text-blue-600">
                            Syarat Layanan
                        </a>

                        <a href="https://www.google.com/maps/place/District+Revenue+Agency/@-8.216334,114.3672694,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd14549c8f5d1dd:0xab83e651db0373a0!8m2!3d-8.216334!4d114.3672694!16s%2Fg%2F1hm3xcgm5?entry=ttu&g_ep=EgoyMDI2MDcxNC4wIKXMDSoASAFQAw%3D%3D" 
                        className="hover:text-blue-600">
                            Sitemap
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    
    );
}


export default Footer;
