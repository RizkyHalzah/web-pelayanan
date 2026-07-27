import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    X,
    ChevronLeft,
    ChevronRight,
    CalendarDays,
    MapPin,
    Tag,
} from "lucide-react";

import type { GalleryItem } from "@/data/gallery";

interface GalleryLightBoxProps {
    items: GalleryItem[];
    selected: GalleryItem | null;
    onClose: () => void;
    onPrevious: () => void;
    onNext: () => void;
}

export default function GalleryLightBox({
    items,
    selected,
    onClose,
    onPrevious,
    onNext,
}: GalleryLightBoxProps) {
    // ==================================================
    // Keyboard Navigation
    // ==================================================

    useEffect(() => {
        if (!selected) return;

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") onNext();
            if (e.key === "ArrowLeft") onPrevious();
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [selected, onClose, onNext, onPrevious]);

    // Lock body scroll while open
    useEffect(() => {
        if (selected) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [selected]);

    const currentIndex = items.findIndex((i) => i.id === selected?.id);

    // ==================================================
    // Render
    // ==================================================

    return (
        <AnimatePresence>
            {selected && (
                <motion.div
                    key="lightbox-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-sm p-4"
                    onClick={onClose}
                >
                    {/* Panel */}
                    <motion.div
                        key={selected.id}
                        initial={{ opacity: 0, scale: 0.93, y: 24 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.93, y: 24 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl lg:flex-row"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Image */}
                        <div className="relative flex-1 bg-slate-100">
                            <img
                                src={selected.image}
                                alt={selected.title}
                                className="h-full w-full object-cover"
                                style={{ maxHeight: "60vh" }}
                            />

                            {/* Counter Badge */}
                            <div className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                                {currentIndex + 1} / {items.length}
                            </div>
                        </div>

                        {/* Info Panel */}
                        <div className="flex w-full flex-col justify-between bg-white p-8 lg:w-80 lg:overflow-y-auto">
                            <div>
                                {/* Category */}
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                                    <Tag size={12} />
                                    {selected.category}
                                </span>

                                {/* Title */}
                                <h2 className="mt-4 text-2xl font-bold leading-snug text-slate-900">
                                    {selected.title}
                                </h2>

                                {/* Meta */}
                                <div className="mt-4 flex flex-col gap-2 text-sm text-slate-500">
                                    <div className="flex items-center gap-2">
                                        <CalendarDays size={15} className="text-sky-500" />
                                        <span>{selected.date}</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <MapPin size={15} className="text-sky-500" />
                                        <span>{selected.location}</span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="mt-5 text-sm leading-7 text-slate-600">
                                    {selected.description}
                                </p>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="mt-8 flex items-center justify-between gap-3">
                                <button
                                    id="lightbox-prev"
                                    onClick={onPrevious}
                                    disabled={items.length <= 1}
                                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-40"
                                >
                                    <ChevronLeft size={18} />
                                    Sebelumnya
                                </button>

                                <button
                                    id="lightbox-next"
                                    onClick={onNext}
                                    disabled={items.length <= 1}
                                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-sky-600 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700 disabled:opacity-40"
                                >
                                    Selanjutnya
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Close Button */}
                        <button
                            id="lightbox-close"
                            onClick={onClose}
                            className="absolute right-4 top-4 rounded-full bg-white/90 p-2 shadow-lg backdrop-blur transition hover:bg-red-50 hover:text-red-600"
                            aria-label="Tutup lightbox"
                        >
                            <X size={20} />
                        </button>
                    </motion.div>

                    {/* Arrow Nav — outside panel for large screens */}
                    <button
                        id="lightbox-arrow-prev"
                        onClick={(e) => {
                            e.stopPropagation();
                            onPrevious();
                        }}
                        className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur transition hover:bg-white/40 lg:flex"
                        aria-label="Foto sebelumnya"
                    >
                        <ChevronLeft size={28} />
                    </button>

                    <button
                        id="lightbox-arrow-next"
                        onClick={(e) => {
                            e.stopPropagation();
                            onNext();
                        }}
                        className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur transition hover:bg-white/40 lg:flex"
                        aria-label="Foto selanjutnya"
                    >
                        <ChevronRight size={28} />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
