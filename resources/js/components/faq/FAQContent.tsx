import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, SearchX } from "lucide-react";

import { FAQCategory } from "@/data/faq";

interface FAQContentProps {
    data: FAQCategory[];
    selectedQuestion?: string | null;
}

export default function FAQContent({
    data,
    selectedQuestion,
}: FAQContentProps) {
    const [openKey, setOpenKey] = useState<string | null>(null);

    const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

    useEffect(() => {
        if (selectedQuestion) {
            setOpenKey(selectedQuestion);
            setTimeout(() => {
                itemRefs.current[selectedQuestion]?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            }, 150);
        }
    }, [selectedQuestion]);

    const handleToggle = (id: string) => {
        const next = openKey === id ? null : id;

        setOpenKey(next);

        if (next) {
            setTimeout(() => {
                itemRefs.current[next]?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            }, 150);
        }
    };

    if (data.length === 0) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="rounded-3xl border border-dashed border-slate-300 bg-white px-8 py-16 text-center shadow-sm"
            >
                <SearchX
                    size={52}
                    className="mx-auto text-slate-300"
                />

                <h3 className="mt-6 text-xl font-semibold text-slate-700">
                    FAQ tidak ditemukan
                </h3>

                <p className="mx-auto mt-3 max-w-md leading-7 text-slate-500">
                    Tidak ada pertanyaan yang sesuai dengan kata kunci atau
                    kategori yang dipilih. Coba gunakan kata kunci lain atau
                    pilih kategori berbeda.
                </p>
            </motion.div>
        );
    }

    return (
        <div className="space-y-12">
            {data.map((category) => (
                <motion.section
                    key={category.id}
                    layout
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.45,
                    }}
                >
                    {/* Heading */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-slate-900">
                            {category.title}
                        </h2>

                        {category.description && (
                            <p className="mt-2 text-slate-500">
                                {category.description}
                            </p>
                        )}

                        <div className="mt-4 flex items-center gap-3">
                            <div className="h-1 w-16 rounded-full bg-sky-600" />

                            <span className="text-sm text-slate-400">
                                {category.questions.length} Pertanyaan
                            </span>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="space-y-4">
                        {category.questions.map((faq) => {
                            const open = openKey === faq.id;

                            const answerId = `faq-answer-${faq.id}`;
                            const headerId = `faq-header-${faq.id}`;

                            return (
                                <motion.div
                                    key={faq.id}
                                    layout
                                    ref={(el) => {
                                        itemRefs.current[faq.id] = el;
                                    }}
                                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg"
                                >
                                    <motion.button
                                        id={headerId}
                                        whileTap={{
                                            scale: 0.99,
                                        }}
                                        onClick={() =>
                                            handleToggle(faq.id)
                                        }
                                        aria-expanded={open}
                                        aria-controls={answerId}
                                        className="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left transition-colors duration-300 hover:bg-sky-50"
                                    >
                                        <span className="pr-6 text-base font-semibold text-slate-800">
                                            {faq.question}
                                        </span>

                                        <motion.div
                                            animate={{
                                                rotate: open ? 180 : 0,
                                            }}
                                            transition={{
                                                duration: 0.25,
                                            }}
                                            className={
                                                open
                                                    ? "text-sky-600"
                                                    : "text-slate-500"
                                            }
                                        >
                                            <ChevronDown size={20} />
                                        </motion.div>
                                    </motion.button>

                                    <AnimatePresence initial={false}>
                                        {open && (
                                            <motion.div
                                                id={answerId}
                                                role="region"
                                                aria-labelledby={headerId}
                                                initial={{
                                                    height: 0,
                                                    opacity: 0,
                                                }}
                                                animate={{
                                                    height: "auto",
                                                    opacity: 1,
                                                }}
                                                exit={{
                                                    height: 0,
                                                    opacity: 0,
                                                }}
                                                transition={{
                                                    duration: 0.35,
                                                    ease: [0.22, 1, 0.36, 1],
                                                }}
                                            >
                                                <motion.div
                                                    initial={{
                                                        y: -10,
                                                    }}
                                                    animate={{
                                                        y: 0,
                                                    }}
                                                    exit={{
                                                        y: -10,
                                                    }}
                                                    transition={{
                                                        duration: 0.25,
                                                    }}
                                                    className="border-t border-slate-100 bg-slate-50 px-6 py-5 leading-7 text-slate-600"
                                                >
                                                    {faq.answer}
                                                </motion.div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.section>
            ))}
        </div>
    );
}