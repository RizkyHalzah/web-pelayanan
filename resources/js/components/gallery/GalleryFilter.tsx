import { motion } from "framer-motion";
import { CalendarRange, Search, SlidersHorizontal } from "lucide-react";
import {
    galleryCategories,
    galleryYears,
} from "@/data/gallery";

interface GalleryFilterProps {
    selectedCategory: string;
    selectedYear: number | "all";
    search: string;

    onCategoryChange: (category: string) => void;
    onYearChange: (year: number | "all") => void;
    onSearchChange: (value: string) => void;
}

export default function GalleryFilter({
    selectedCategory,
    selectedYear,
    search,
    onCategoryChange,
    onYearChange,
    onSearchChange,
}: GalleryFilterProps) {
    return (
        <section className="relative -mt-14 z-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl"
                >
                    <div className="grid gap-8 p-8 lg:grid-cols-12">

                        {/* ================= Search ================= */}

                        <div className="lg:col-span-5">
                            <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-700">
                                <Search size={16} />

                                Cari Dokumentasi
                            </label>

                            <div className="relative">
                                <Search
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                />

                                <input
                                    type="text"
                                    value={search}
                                    placeholder="Cari kegiatan..."
                                    onChange={(e) =>
                                        onSearchChange(e.target.value)
                                    }
                                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-sm outline-none transition focus:border-sky-500 focus:bg-white"
                                />
                            </div>
                        </div>

                        {/* ================= Category ================= */}

                        <div className="lg:col-span-4">
                            <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-700">
                                <SlidersHorizontal size={16} />

                                Kategori
                            </label>

                            <div className="flex flex-wrap gap-2">
                                {galleryCategories.map((category) => {
                                    const active =
                                        selectedCategory === category;

                                    return (
                                        <button
                                            key={category}
                                            onClick={() =>
                                                onCategoryChange(category)
                                            }
                                            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300
                                            ${
                                                active
                                                    ? "bg-sky-600 text-white shadow-lg"
                                                    : "bg-slate-100 text-slate-700 hover:bg-sky-100 hover:text-sky-700"
                                            }`}
                                        >
                                            {category}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* ================= Year ================= */}

                        <div className="lg:col-span-3">
                            <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-700">
                                <CalendarRange size={16} />

                                Tahun
                            </label>

                            <select
                                value={selectedYear}
                                onChange={(e) =>
                                    onYearChange(
                                        e.target.value === "all"
                                            ? "all"
                                            : Number(e.target.value)
                                    )
                                }
                                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:bg-white"
                            >
                                <option value="all">
                                    Semua Tahun
                                </option>

                                {galleryYears.map((year) => (
                                    <option
                                        key={year}
                                        value={year}
                                    >
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Bottom Information */}

                    <div className="border-t border-slate-100 bg-slate-50 px-8 py-4">
                        <div className="flex flex-col gap-2 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
                            <span>
                                Gunakan filter untuk menemukan dokumentasi
                                kegiatan berdasarkan kategori maupun tahun.
                            </span>

                            <span className="font-medium text-sky-600">
                                Arsip Digital BAPENDA Banyuwangi
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}