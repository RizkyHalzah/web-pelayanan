import type { ElementType } from "react";
import { motion } from "framer-motion";
import {
    Building2,
    CircleHelp,
    Home,
    Landmark,
    LayoutGrid,
} from "lucide-react";

import { faqData } from "@/data/faq";

interface FAQCategoryProps {
    selected: string;
    onSelect: (id: string) => void;
}

const categoryIcons: Record<string, ElementType> = {
    umum: Building2,
    "pbb-p2": Home,
    bphtb: Landmark,
};

export default function FAQCategory({
    selected,
    onSelect,
}: FAQCategoryProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: 0.2,
            }}
            className="mt-8"
        >
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
                {/* Header */}
                <div>
                    <h3 className="text-2xl font-bold text-slate-800">
                        Kategori FAQ
                    </h3>

                    <p className="mt-2 text-slate-500">
                        Pilih kategori untuk mempercepat pencarian informasi.
                    </p>
                </div>

                {/* Category List */}
                <div className="mt-8 flex flex-wrap gap-4">
                    {/* Semua */}
                    <motion.button
                        type="button"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => onSelect("all")}
                        aria-label="Semua kategori"
                        aria-pressed={selected === "all"}
                        className={`group flex items-center gap-3 rounded-full border px-5 py-3 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200 ${
                            selected === "all"
                                ? "border-sky-600 bg-sky-600 text-white shadow-lg"
                                : "border-slate-200 bg-white text-slate-600 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                        }`}
                    >
                        <motion.div
                            whileHover={{
                                rotate: 8,
                                scale: 1.15,
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            <LayoutGrid size={18} />
                        </motion.div>

                        <span className="font-medium">
                            Semua
                        </span>
                    </motion.button>

                    {/* Dynamic Category */}
                    {faqData.map((category) => {
                        const Icon =
                            categoryIcons[category.id] ?? CircleHelp;

                        const isActive =
                            selected === category.id;

                        return (
                            <motion.button
                                key={category.id}
                                type="button"
                                initial={{
                                    opacity: 0,
                                    y: 15,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.35,
                                }}
                                whileHover={{
                                    scale: 1.05,
                                }}
                                whileTap={{
                                    scale: 0.97,
                                }}
                                onClick={() =>
                                    onSelect(category.id)
                                }
                                aria-label={category.title}
                                aria-pressed={isActive}
                                className={`group flex items-center gap-3 rounded-full border px-5 py-3 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200 ${
                                    isActive
                                        ? "border-sky-600 bg-sky-600 text-white shadow-lg"
                                        : "border-slate-200 bg-white text-slate-600 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                                }`}
                            >
                                <motion.div
                                    whileHover={{
                                        rotate: 8,
                                        scale: 1.15,
                                    }}
                                    transition={{
                                        duration: 0.2,
                                    }}
                                >
                                    <Icon size={18} />
                                </motion.div>

                                <span className="font-medium">
                                    {category.title}
                                </span>
                            </motion.button>
                        );
                    })}
                </div>
            </div>
        </motion.section>
    );
}