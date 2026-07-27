import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, X } from "lucide-react";

interface FAQSearchProps {
    value: string;
    onChange: (value: string) => void;
}

export default function FAQSearch({
    value,
    onChange,
}: FAQSearchProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl"
        >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                {/* Heading */}
                <div>
                    <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2">
                        <Sparkles
                            size={16}
                            className="text-sky-600"
                        />

                        <span className="text-sm font-medium text-sky-700">
                            Pencarian Cepat
                        </span>
                    </div>

                    <h2 className="text-3xl font-bold text-slate-800">
                        Cari Pertanyaan
                    </h2>

                    <p className="mt-2 text-slate-500">
                        Ketik kata kunci untuk menemukan jawaban dengan lebih
                        cepat.
                    </p>
                </div>

                {/* Search Input */}
                <div className="relative w-full max-w-xl">
                    <Search
                        size={20}
                        className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                        type="text"
                        value={value}
                        autoComplete="off"
                        aria-label="Cari FAQ"
                        maxLength={100}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder="Cari pertanyaan atau kata kunci..."
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-14 pr-14 text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none"
                    />

                    <AnimatePresence>
                        {value && (
                            <motion.button
                                type="button"
                                initial={{
                                    opacity: 0,
                                    scale: 0.8,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.8,
                                }}
                                transition={{
                                    duration: 0.2,
                                }}
                                onClick={() => onChange("")}
                                className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                                aria-label="Hapus pencarian"
                            >
                                <X size={18} />
                            </motion.button>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}