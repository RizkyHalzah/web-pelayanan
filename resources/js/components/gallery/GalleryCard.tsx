import { motion } from "framer-motion";
import {
    CalendarDays,
    MapPin,
    Star,
    ArrowUpRight,
} from "lucide-react";

import type { GalleryItem } from "@/data/gallery";

interface GalleryCardProps {
    item: GalleryItem;
    index: number;
    onClick: (item: GalleryItem) => void;
}

export default function GalleryCard({
    item,
    index,
    onClick,
}: GalleryCardProps) {
    return (
        <motion.article
            initial={{
                opacity: 0,
                y: 40,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{ once: true }}
            transition={{
                duration: 0.55,
                delay: index * 0.08,
            }}
            whileHover={{
                y: -8,
            }}
            className="group cursor-pointer"
            onClick={() => onClick(item)}
        >
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 group-hover:shadow-2xl">

                {/* Image */}

                <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    {/* Gradient */}

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                    {/* Category */}

                    <div className="absolute left-5 top-5">
                        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-sky-700 backdrop-blur">
                            {item.category}
                        </span>
                    </div>

                    {/* Featured */}

                    {item.featured && (
                        <div className="absolute right-5 top-5">
                            <div className="flex items-center gap-1 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                                <Star
                                    size={13}
                                    fill="currentColor"
                                />

                                Featured
                            </div>
                        </div>
                    )}

                    {/* Hover Button */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.8,
                        }}
                        whileHover={{
                            opacity: 1,
                            scale: 1,
                        }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div className="rounded-full bg-white/90 p-4 shadow-xl backdrop-blur">
                            <ArrowUpRight
                                size={24}
                                className="text-sky-700"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Content */}

                <div className="p-6">

                    {/* Date */}

                    <div className="flex items-center gap-2 text-sm text-slate-500">
                        <CalendarDays size={16} />

                        <span>{item.date}</span>
                    </div>

                    {/* Title */}

                    <h3 className="mt-3 line-clamp-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-sky-600">
                        {item.title}
                    </h3>

                    {/* Description */}

                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
                        {item.description}
                    </p>

                    {/* Footer */}

                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

                        <div className="flex items-center gap-2 text-sm text-slate-500">
                            <MapPin
                                size={16}
                                className="text-sky-600"
                            />

                            <span className="line-clamp-1">
                                {item.location}
                            </span>
                        </div>

                        <motion.div
                            whileHover={{
                                x: 4,
                            }}
                            className="rounded-full bg-sky-50 p-2"
                        >
                            <ArrowUpRight
                                size={18}
                                className="text-sky-600"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.article>
    );
}