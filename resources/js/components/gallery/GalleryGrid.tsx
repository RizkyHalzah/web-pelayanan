import { motion, AnimatePresence } from "framer-motion";
import { ImageOff } from "lucide-react";

import type { GalleryItem } from "@/data/gallery";
import GalleryCard from "./GalleryCard";

interface GalleryGridProps {
    items: GalleryItem[];
    onSelect: (item: GalleryItem) => void;
}

export default function GalleryGrid({
    items,
    onSelect,
}: GalleryGridProps) {
    return (
        <section
            id="gallery"
            className="py-16"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}

                <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
                            Dokumentasi
                        </p>

                        <h2 className="mt-2 text-3xl font-bold text-slate-900">
                            Galeri Kegiatan
                        </h2>
                    </div>

                    <div className="rounded-2xl bg-sky-50 px-5 py-3">
                        <span className="text-sm font-medium text-sky-700">
                            {items.length} Dokumentasi Ditemukan
                        </span>
                    </div>
                </div>

                {/* Empty State */}

                {items.length === 0 && (
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        className="rounded-3xl border border-dashed border-slate-300 bg-white py-24 text-center"
                    >
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
                            <ImageOff
                                size={34}
                                className="text-slate-400"
                            />
                        </div>

                        <h3 className="mt-6 text-2xl font-bold text-slate-800">
                            Dokumentasi Tidak Ditemukan
                        </h3>

                        <p className="mx-auto mt-3 max-w-md text-slate-500">
                            Coba ubah kata kunci pencarian,
                            kategori, atau tahun yang dipilih.
                        </p>
                    </motion.div>
                )}

                {/* Grid */}

                {items.length > 0 && (
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            layout
                            className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3"
                        >
                            {items.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{
                                        opacity: 0,
                                        scale: 0.96,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.96,
                                    }}
                                    transition={{
                                        duration: 0.35,
                                    }}
                                >
                                    <GalleryCard
                                        item={item}
                                        index={index}
                                        onClick={onSelect}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                )}
            </div>
        </section>
    );
}