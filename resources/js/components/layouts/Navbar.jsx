import { useEffect, useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const { url } = usePage();

    const isHomePage = url === "/";
    const isProfilePage = url.startsWith("/profile");
    const isFAQPage = url.startsWith("/faq");
    const isServicePage = url.startsWith("/services");
    const isGalleryPage = url.startsWith("/gallery");

    const alwaysScrolled =
    isProfilePage
    isServicePage
    isFAQPage 
    isGalleryPage;

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    useEffect(() => {
        if (!isHomePage) return;

        const sectionIds = ["vision", "layanan", "kontak"];

        const elements = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        const handleScrollTop = () => {
            if (window.scrollY < 80) {
                setActiveSection("home");
            }
        };

        window.addEventListener("scroll", handleScrollTop, {
            passive: true,
        });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-40% 0px -40% 0px",
                threshold: 0,
            }
        );

        elements.forEach((el) => observer.observe(el));

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScrollTop);
        };
    }, [isHomePage]);

    const mobileNavClass = (section) =>
        `w-full px-6 py-3 font-medium transition ${
            activeSection === section
                ? "bg-blue-50 text-blue-600"
                : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
        }`;

    const desktopNavClass = (active) =>
        `font-medium transition ${
            active
                ? "text-blue-600"
                : "text-slate-700 hover:text-blue-600"
        }`;

    return (
        <nav
            className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
                isHomePage
                    ? scrolled
                        ? "bg-white/95 shadow-md backdrop-blur-xl"
                        : "bg-transparent"
                    : "bg-white/95 shadow-md backdrop-blur-xl"
            }`}
        >
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <img
                        src="/images/logo.jpg"
                        alt="Logo"
                        className="h-12 w-auto"
                    />

                    <div>
                        <h1 className="text-xl font-bold text-slate-900">
                            BAPENDA
                        </h1>

                        <p className="text-xs text-slate-500">
                            Kabupaten Banyuwangi
                        </p>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-8 lg:flex">
                    <a
                        href="/"
                        className={desktopNavClass(
                            isHomePage && activeSection === "home"
                        )}
                    >
                        Beranda
                    </a>

                    <a
                        href="/#vision"
                        className={desktopNavClass(
                            isHomePage && activeSection === "vision"
                        )}
                    >
                        Tentang
                    </a>

                    <Link
                        href="/profile"
                        className={desktopNavClass(isProfilePage)}
                    >
                        Profil
                    </Link>

                    <a
                        href="/#layanan"
                        className={desktopNavClass(
                            isHomePage && activeSection === "layanan"
                        )}
                    >
                        Layanan
                    </a>

                    <Link
                        href="/gallery"
                        className={desktopNavClass(isGalleryPage)}
                    >
                        Gallery
                    </Link>

                    <Link
                        href="/faq"
                        className={desktopNavClass(isFAQPage)}
                    >
                        FAQ
                    </Link>

                    <a
                        href="/#kontak"
                        className={desktopNavClass(
                            isHomePage && activeSection === "kontak"
                        )}
                    >
                        Kontak
                    </a>
                </div>

                {/* Mobile Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="rounded-xl p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
                >
                    {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`overflow-hidden transition-all duration-300 lg:hidden ${
                    mobileOpen
                        ? "max-h-screen border-t border-slate-200 bg-white shadow-lg"
                        : "max-h-0"
                }`}
            >
                <div className="flex flex-col py-2">
                    <a
                        href="/"
                        onClick={() => setMobileOpen(false)}
                        className={mobileNavClass("home")}
                    >
                        Beranda
                    </a>

                    <a
                        href="/#vision"
                        onClick={() => setMobileOpen(false)}
                        className={mobileNavClass("vision")}
                    >
                        Tentang
                    </a>

                    <Link
                        href="/profile"
                        onClick={() => setMobileOpen(false)}
                        className={`w-full px-6 py-3 font-medium transition ${
                            isProfilePage
                                ? "bg-blue-50 text-blue-600"
                                : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                        }`}
                    >
                        Profil
                    </Link>

                    <a
                        href="/#layanan"
                        onClick={() => setMobileOpen(false)}
                        className={mobileNavClass("layanan")}
                    >
                        Layanan
                    </a>

                    <Link
                        href="/gallery"
                        onClick={() => setMobileOpen(false)}
                        className={`w-full px-6 py-3 font-medium transition ${
                            isGalleryPage
                                ? "bg-blue-50 text-blue-600"
                                : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                        }`}
                    >
                        Gallery
                    </Link>

                    <Link
                        href="/faq"
                        onClick={() => setMobileOpen(false)}
                        className={`w-full px-6 py-3 font-medium transition ${
                            isFAQPage
                                ? "bg-blue-50 text-blue-600"
                                : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                        }`}
                    >
                        FAQ
                    </Link>

                    <a
                        href="/#kontak"
                        onClick={() => setMobileOpen(false)}
                        className={mobileNavClass("kontak")}
                    >
                        Kontak
                    </a>
                </div>
            </div>
        </nav>
    );
}