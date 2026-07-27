import MainLayout from '@/components/layouts/MainLayout';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from '@inertiajs/react';

interface Props {
    title: string;
    description: string;
    requirements: string[];
    url: string;
    information?: string[];
}

export default function ServiceDetail({
    title,
    description,
    requirements,
    url,
    information,
}: Props) {
    return (
        <MainLayout>
            <section className="bg-slate-50 py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
                        <Link href="/">Beranda</Link>
                        <span>/</span>
                        <Link href="/#layanan">Layanan</Link>
                        <span>/</span>
                        <span className="font-semibold text-blue-600">
                            {title}
                        </span>
                    </div>

                    <h1 className="mt-6 text-5xl font-bold">{title}</h1>

                    <p className="mt-6 max-w-3xl text-lg text-slate-600">
                        {description}
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-2">
                    {information && information.length > 0 && (
                        <div className="rounded-3xl bg-white p-8 shadow lg:col-span-2">
                            <h2 className="text-2xl font-bold text-slate-950">
                                Informasi Layanan
                            </h2>
                            <div className="mt-6 space-y-4">
                                {information.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                                        <span className="leading-relaxed text-slate-600">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="rounded-3xl bg-white p-8 shadow">
                        <h2 className="text-2xl font-bold">Persyaratan</h2>

                        <div className="mt-6 space-y-4">
                            {requirements.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2 className="shrink-0 text-blue-600" />
                                    <span className="text-slate-600">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* <div className="rounded-3xl bg-white p-8 shadow">
                        <h2 className="text-2xl font-bold">Buka Sistem</h2>

                        <p className="mt-4 text-slate-500">
                            Klik tombol berikut untuk menuju layanan resmi.
                        </p>

                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-6 py-4 text-white transition-colors hover:bg-blue-700"
                        >
                            Buka Layanan
                            <ArrowRight />
                        </a>
                    </div> */}
                </div>
            </section>
        </MainLayout>
    );
}
