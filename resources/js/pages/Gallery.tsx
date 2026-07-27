import { useMemo, useState } from "react";

import MainLayout from "@/components/layouts/MainLayout";

import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryFilter from "@/components/gallery/GalleryFilter";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryTimeline from "@/components/gallery/GalleryTimeLine";
import GalleryLightbox from "@/components/gallery/GalleryLightBox";
import GalleryCTA from "@/components/gallery/GalleryCTA";

import {
    galleryData,
    type GalleryItem,
} from "@/data/gallery";

export default function Gallery() {
    // ==================================================
    // State
    // ==================================================

    const [selectedCategory, setSelectedCategory] =
        useState<string>("Semua");

    const [selectedYear, setSelectedYear] =
        useState<number | "all">("all");

    const [search, setSearch] = useState("");

    const [selectedImage, setSelectedImage] =
        useState<GalleryItem | null>(null);

    // ==================================================
    // Filter Gallery
    // ==================================================

    const filteredGallery = useMemo(() => {
        return galleryData.filter((item) => {
            const matchCategory =
                selectedCategory === "Semua" ||
                item.category === selectedCategory;

            const matchYear =
                selectedYear === "all" ||
                item.year === selectedYear;

            const keyword = search.trim().toLowerCase();

            const matchSearch =
                keyword === "" ||
                item.title.toLowerCase().includes(keyword) ||
                item.description
                    .toLowerCase()
                    .includes(keyword) ||
                item.location
                    .toLowerCase()
                    .includes(keyword);

            return (
                matchCategory &&
                matchYear &&
                matchSearch
            );
        });
    }, [
        selectedCategory,
        selectedYear,
        search,
    ]);

    // ==================================================
    // Lightbox Navigation
    // ==================================================

    const currentIndex = filteredGallery.findIndex(
        (item) => item.id === selectedImage?.id
    );

    const handleNext = () => {
        if (filteredGallery.length === 0) return;

        const nextIndex =
            (currentIndex + 1) %
            filteredGallery.length;

        setSelectedImage(filteredGallery[nextIndex]);
    };

    const handlePrevious = () => {
        if (filteredGallery.length === 0) return;

        const previousIndex =
            (currentIndex - 1 + filteredGallery.length) %
            filteredGallery.length;

        setSelectedImage(filteredGallery[previousIndex]);
    };

    // ==================================================
    // Render
    // ==================================================

    return (
        <MainLayout>
            <div className="min-h-screen bg-slate-50">

                {/* Hero */}

                <GalleryHero />

                {/* Filter */}

                <GalleryFilter
                    selectedCategory={selectedCategory}
                    selectedYear={selectedYear}
                    search={search}
                    onCategoryChange={setSelectedCategory}
                    onYearChange={setSelectedYear}
                    onSearchChange={setSearch}
                />

                {/* Timeline */}

                <GalleryTimeline
                    selectedYear={selectedYear}
                    onYearChange={setSelectedYear}
                />

                {/* Grid */}
                <GalleryGrid
                    items={filteredGallery}
                    onSelect={setSelectedImage}
                />

                {/* CTA */}

                <GalleryCTA />

                {/* Lightbox */}

                <GalleryLightbox
                    items={filteredGallery}
                    selected={selectedImage}
                    onClose={() => setSelectedImage(null)}
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                />
            </div>
        </MainLayout>
    );
}