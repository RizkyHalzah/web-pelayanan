import { useMemo, useState } from "react";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircleMore } from "lucide-react";

import MainLayout from "@/components/layouts/MainLayout";
import FAQHero from "@/components/faq/FAQHero";
import FAQSearch from "@/components/faq/FAQSearch";
import FAQCategory from "@/components/faq/FAQCategory";
import FAQSidebar, {
    type PopularFAQ,
    type SidebarCategory,
} from "@/components/faq/FAQSidebar";
import FAQContent from "@/components/faq/FAQContent";

import {
    faqData,
    type FAQCategory as FAQCategoryType,
} from "@/data/faq";

const DEFAULT_CATEGORY = "all";

export default function FAQ() {
    // ==================================================
    // State
    // ==================================================

    const [selectedCategory, setSelectedCategory] =
        useState<string>(DEFAULT_CATEGORY);

    const [search, setSearch] = useState("");

    // Akan dipakai oleh Sidebar → FAQContent
    const [selectedQuestion, setSelectedQuestion] =
        useState<string | null>(null);

    const handleCategoryChange = (id: string) => {
        setSelectedCategory(id);
        setSelectedQuestion(null);
    };

    // ==================================================
    // Filter FAQ
    // ==================================================

    const filteredFAQ = useMemo<FAQCategoryType[]>(() => {
        let data: FAQCategoryType[] = [...faqData];

        // Filter kategori
        if (selectedCategory !== DEFAULT_CATEGORY) {
            data = data.filter(
                (category) => category.id === selectedCategory
            );
        }

        // Filter pencarian
        const keyword = search.trim().toLowerCase();

        if (!keyword) {
            return data;
        }

        return data
            .map((category) => ({
                ...category,
                questions: category.questions.filter(
                    (faq) =>
                        faq.question.toLowerCase().includes(keyword) ||
                        faq.answer.toLowerCase().includes(keyword)
                ),
            }))
            .filter((category) => category.questions.length > 0);
    }, [selectedCategory, search]);

    // ==================================================
    // Calculations for Sidebar
    // ==================================================

    const totalFAQ = useMemo(() => {
        return filteredFAQ.reduce(
            (total, category) => total + category.questions.length,
            0
        );
    }, [filteredFAQ]);

    const totalCategory = filteredFAQ.length;

    const sidebarCategories = useMemo<SidebarCategory[]>(() => {
        const allTotal = faqData.reduce(
            (total, category) => total + category.questions.length,
            0
        );

        return [
            {
               id: DEFAULT_CATEGORY,
                title: "Semua FAQ",
                total: allTotal,
            },
            ...faqData.map((category) => ({
                id: category.id,
                title: category.title,
                total: category.questions.length,
            })),
        ];
    }, []);

    const popularFAQ = useMemo<PopularFAQ[]>(() => {
        return faqData
            .flatMap((category) =>
                category.questions.map((question) => ({
                    ...question,
                    category: category.title,
                }))
            )
            .slice(0, 4);
    }, []);

    // ==================================================
    // Render
    // ==================================================

    return (
        <MainLayout>
            <div className="min-h-screen bg-slate-50">
                {/* Hero */}
                <FAQHero />

                {/* Content */}
                <section className="relative z-20 -mt-12 pb-24">
                    <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                        {/* Search */}
                        <FAQSearch
                            value={search}
                            onChange={setSearch}
                        />

                        {/* Category */}
                        <FAQCategory
                            selected={selectedCategory}
                            onSelect={handleCategoryChange}
                        />

                        {/* FAQ Layout */}
                        <div className="mt-10 grid gap-8 lg:grid-cols-12">
                            {/* Sidebar */}
                            <aside className="lg:col-span-4 xl:col-span-3">
                                <FAQSidebar
                                    selected={selectedCategory}
                                    onSelect={handleCategoryChange}
                                    selectedQuestion={selectedQuestion}
                                    onQuestionSelect={setSelectedQuestion}
                                    totalFAQ={totalFAQ}
                                    totalCategory={totalCategory}
                                    categories={sidebarCategories}
                                    popularFAQ={popularFAQ}
                                />
                            </aside>

                            {/* Content */}
                            <main className="lg:col-span-8 xl:col-span-9">
                                <FAQContent
                                    data={filteredFAQ}
                                    selectedQuestion={selectedQuestion}
                                />
                            </main>
                        </div>

                        {/* Contact CTA */}
                        <motion.section
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mt-24"
                        >
                            <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-sky-600 via-blue-600 to-indigo-700 px-8 py-12 text-center shadow-2xl">
                                {/* Background Decoration */}
                                <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

                                <div className="absolute -bottom-16 -right-12 h-52 w-52 rounded-full bg-cyan-300/20 blur-3xl" />

                                <div className="relative z-10 mx-auto max-w-2xl">
                                    <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                                        <MessageCircleMore
                                            size={34}
                                            className="text-white"
                                        />
                                    </div>

                                    <h3 className="text-3xl font-bold text-white">
                                        Masih Memiliki Pertanyaan?
                                    </h3>

                                    <p className="mt-4 leading-relaxed text-blue-100">
                                        Jika informasi yang Anda cari belum
                                        tersedia pada FAQ, silakan hubungi
                                        petugas BAPENDA Kabupaten Banyuwangi
                                        untuk mendapatkan bantuan secara
                                        langsung.
                                    </p>

                                    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                                        <a
                                            href="#Kontak"
                                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-sky-700 transition-all duration-300 hover:scale-105 hover:bg-slate-100"
                                        >
                                            Hubungi Kami
                                            <ArrowRight size={18} />
                                        </a>

                                        <Link
                                            href="/services"
                                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-white/10"
                                        >
                                            Lihat Layanan
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.section>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}