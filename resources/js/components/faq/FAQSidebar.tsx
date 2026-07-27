import { motion } from "framer-motion";
import {
    BarChart3,
    ChevronRight,
    CircleHelp,
    Clock3,
    FileQuestion,
    Star,
} from "lucide-react";

import type { FAQQuestion } from "@/data/faq";

export interface PopularFAQ extends FAQQuestion {
    category: string;
}

export interface SidebarCategory {
    id: string;
    title: string;
    total: number;
}

export interface FAQSidebarProps {
    selected: string;
    onSelect: (id: string) => void;

    selectedQuestion: string | null;
    onQuestionSelect: (id: string | null) => void;

    totalFAQ: number;
    totalCategory: number;

    categories: SidebarCategory[];
    popularFAQ: PopularFAQ[];
}

export default function FAQSidebar({
    selected,
    onSelect,
    selectedQuestion,
    onQuestionSelect,
    totalFAQ,
    totalCategory,
    categories,
    popularFAQ,
}: FAQSidebarProps) {
    return (
        <motion.aside
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                ease: "easeOut",
            }}
            className="space-y-6 lg:sticky lg:top-28"
        >
            {/* Statistik */}
            <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl"
            >
                <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-sky-100 p-3">
                        <BarChart3 className="text-sky-600" />
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-800">
                            Statistik FAQ
                        </h3>

                        <p className="text-sm text-slate-500">
                            Informasi bantuan
                        </p>
                    </div>
                </div>

                <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-slate-500">
                            Total FAQ
                        </span>

                        <span className="font-bold text-sky-600">
                            {totalFAQ}
                        </span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-slate-500">
                            Kategori
                        </span>

                        <span className="font-bold text-sky-600">
                            {totalCategory}
                        </span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-slate-500">
                            Status
                        </span>

                        <span className="font-bold text-green-600">
                            Terbaru
                        </span>
                    </div>
                </div>
            </motion.div>

            {/* FAQ Populer */}
            <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl"
            >
                <div className="mb-5 flex items-center gap-3">
                    <Star className="text-amber-500" />

                    <h3 className="font-semibold text-slate-800">
                        FAQ Populer
                    </h3>
                </div>

                <div className="space-y-3">
                    {popularFAQ.length === 0 ? (
                        <div className="rounded-xl bg-slate-50 p-4 text-center text-sm text-slate-500">
                            Tidak ada FAQ populer.
                        </div>
                    ) : (
                        popularFAQ.map((faq) => (
                            <motion.button
                                key={faq.id}
                                type="button"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => onQuestionSelect(faq.id)}
                                aria-label={`Lihat FAQ ${faq.question}`}
                                className={`w-full rounded-2xl p-4 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${
                                    selectedQuestion === faq.id
                                        ? "bg-sky-100 ring-2 ring-sky-500"
                                        : "bg-slate-50 hover:bg-sky-50"
                                }`}
                            >
                                <div className="mb-2 flex items-center justify-between">
                                    <span className="rounded-full bg-sky-100 px-2 py-1 text-xs font-medium text-sky-700">
                                        {faq.category}
                                    </span>

                                    <ChevronRight
                                        size={18}
                                        className={
                                            selectedQuestion === faq.id
                                                ? "text-sky-600"
                                                : "text-slate-400"
                                        }
                                    />
                                </div>

                                <p
                                    className={`text-sm font-medium transition-colors ${
                                        selectedQuestion === faq.id
                                            ? "text-sky-700"
                                            : "text-slate-700"
                                    }`}
                                >
                                    {faq.question}
                                </p>
                            </motion.button>
                        ))
                    )}
                </div>
            </motion.div>

            {/* Kategori */}
            <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl"
            >
                <div className="mb-5 flex items-center gap-3">
                    <FileQuestion className="text-sky-600" />

                    <h3 className="font-semibold text-slate-800">
                        Kategori
                    </h3>
                </div>

               <div className="space-y-2">
                {categories.map((category) => {
                    const active = selected === category.id;

                    return (
                        <motion.button
                            key={category.id}
                            type="button"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => onSelect(category.id)}
                            aria-pressed={active}
                            aria-current={active ? "page" : undefined}
                            className={`group flex w-full items-center justify-between rounded-xl px-4 py-3 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${
                                active
                                    ? "bg-sky-600 text-white shadow-md"
                                    : "text-slate-700 hover:bg-slate-100"
                            }`}
                        >
                            <div className="flex items-center gap-3">
                                <CircleHelp
                                    size={18}
                                    className={
                                        active
                                            ? "text-white"
                                            : "text-sky-600"
                                    }
                                />

                                <span className="font-medium">
                                    {category.title}
                                </span>
                            </div>

                            <ChevronRight
                                size={18}
                                className={`transition-transform duration-300 ${
                                    active
                                        ? "text-white"
                                        : "text-slate-400 group-hover:translate-x-1"
                                }`}
                            />
                        </motion.button>
                    );
                })}
            </div>
            </motion.div>

            {/* Jam Pelayanan */}
            <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="rounded-3xl bg-linear-to-br from-sky-600 to-cyan-500 p-6 text-white shadow-xl"
            >
                <Clock3
                    size={28}
                    className="mb-4"
                />

                <h3 className="text-lg font-bold">
                    Jam Pelayanan
                </h3>

                <p className="mt-4 text-sm leading-7 text-sky-100">
                    Senin – Kamis
                    <br />
                    08.00 – 15.00 WIB
                </p>

                <p className="mt-4 text-sm leading-7 text-sky-100">
                    Jumat
                    <br />
                    08.00 – 14.30 WIB
                </p>
            </motion.div>
        </motion.aside>
    );
}