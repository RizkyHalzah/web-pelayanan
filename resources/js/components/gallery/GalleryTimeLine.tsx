import type { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

import { galleryYears } from "@/data/gallery";

interface GalleryTimelineProps {
    selectedYear: number | "all";
    onYearChange: Dispatch<SetStateAction<number | "all">>;
}

export default function GalleryTimeline({
    selectedYear,
    onYearChange,
}: GalleryTimelineProps) {
    const years: Array<number | "all"> = ["all", ...galleryYears];

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 py-12">

            {/* Background decoration */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
                <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header */}

                <div className="mb-8 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/20 ring-1 ring-sky-500/30">
                        <CalendarDays size={20} className="text-sky-400" />
                    </div>

                    <div>
                        <h2 className="text-lg font-bold text-white">
                            Telusuri Per Tahun
                        </h2>

                        <p className="text-sm text-slate-400">
                            Filter dokumentasi berdasarkan tahun kegiatan
                        </p>
                    </div>
                </div>

                {/* Timeline Track */}

                <div className="relative">

                    {/* Horizontal line */}

                    <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-slate-600 to-transparent md:block" />

                    {/* Year Nodes */}

                    <div className="flex flex-wrap items-center justify-center gap-3 md:flex-nowrap md:justify-between md:gap-0">
                        {years.map((year, index) => {
                            const isSelected = selectedYear === year;
                            const isAll = year === "all";
                            const label = isAll ? "Semua" : String(year);

                            return (
                                <motion.div
                                    key={String(year)}
                                    className="relative flex flex-col items-center"
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: index * 0.06,
                                        duration: 0.35,
                                    }}
                                >
                                    {/* Node button */}

                                    <motion.button
                                        onClick={() => onYearChange(year)}
                                        whileHover={{ scale: 1.08 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={[
                                            "relative z-10 flex flex-col items-center gap-1.5 rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
                                            isSelected
                                                ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30 ring-2 ring-sky-400/50"
                                                : "bg-slate-800/80 text-slate-300 ring-1 ring-slate-700 hover:bg-slate-700 hover:text-white hover:ring-sky-600/50",
                                        ].join(" ")}
                                    >
                                        {/* Dot indicator */}

                                        <span
                                            className={[
                                                "h-2 w-2 rounded-full transition-colors duration-300",
                                                isSelected
                                                    ? "bg-white"
                                                    : "bg-slate-500",
                                            ].join(" ")}
                                        />

                                        {label}

                                        {isSelected && (
                                            <motion.span
                                                layoutId="year-glow"
                                                className="absolute inset-0 -z-10 rounded-2xl bg-sky-500/30 blur-md"
                                            />
                                        )}
                                    </motion.button>

                                    {/* Active underline */}

                                    {isSelected && (
                                        <motion.div
                                            layoutId="year-underline"
                                            className="mt-2 h-1 w-8 rounded-full bg-sky-400"
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Active year label */}

                <motion.p
                    key={String(selectedYear)}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 text-center text-sm text-slate-400"
                >
                    Menampilkan dokumentasi tahun{" "}
                    <span className="font-semibold text-sky-400">
                        {selectedYear === "all" ? "semua tahun" : selectedYear}
                    </span>
                </motion.p>

            </div>
        </section>
    );
}