export type GalleryCategory =
    | "Pelayanan"
    | "Sosialisasi"
    | "Penagihan"
    | "Penghargaan"
    | "Kegiatan Internal";

export interface GalleryItem {
    id: number;
    title: string;
    category: GalleryCategory;
    date: string;
    year: number;
    location: string;
    image: string;
    description: string;
    featured?: boolean;
}

export const galleryCategories = [
    "Semua",
    "Pelayanan",
    "Sosialisasi",
    "Penagihan",
    "Penghargaan",
    "Kegiatan Internal",
] as const;

export const galleryYears = [
    2026,
    2025,
    2024,
    2023,
    2022,
    2021,
    2020,
];

export const galleryData: GalleryItem[] = [
    {
        id: 1,
        title: "Sosialisasi Pajak Daerah",
        category: "Sosialisasi",
        date: "12 Januari 2026",
        year: 2026,
        location: "Pendopo Sabha Swagata",
        image: "public/images/gallery/placeholder.webp",
        featured: true,
        description:
            "Kegiatan sosialisasi mengenai pentingnya pembayaran pajak daerah kepada masyarakat Kabupaten Banyuwangi.",
    },

    {
        id: 2,
        title: "Pelayanan PBB di Mall Pelayanan Publik",
        category: "Pelayanan",
        date: "10 Januari 2026",
        year: 2026,
        location: "Mall Pelayanan Publik",
        image: "public/images/gallery/placeholder.webp",
        description:
            "Pelayanan konsultasi dan pembayaran PBB kepada masyarakat di Mall Pelayanan Publik Banyuwangi.",
    },

    {
        id: 3,
        title: "Kegiatan Penagihan Pajak Daerah",
        category: "Penagihan",
        date: "8 Januari 2026",
        year: 2026,
        location: "Kecamatan Genteng",
        image: "/public/images/gallery/placeholder.webp",
        description:
            "Petugas BAPENDA melakukan kegiatan penagihan pajak daerah kepada wajib pajak.",
    },

    {
        id: 4,
        title: "BAPENDA Award 2025",
        category: "Penghargaan",
        date: "5 Januari 2026",
        year: 2026,
        location: "Kantor BAPENDA",
        image: "public/images/gallery/placeholder.webp",
        featured: true,
        description:
            "Pemberian penghargaan kepada wajib pajak dan instansi yang berkontribusi terhadap peningkatan pendapatan daerah.",
    },

    {
        id: 5,
        title: "Rapat Evaluasi Kinerja",
        category: "Kegiatan Internal",
        date: "3 Januari 2026",
        year: 2026,
        location: "Ruang Rapat Utama",
        image: "public/images/gallery/placeholder.webp",
        description:
            "Evaluasi kinerja pegawai BAPENDA Kabupaten Banyuwangi dalam meningkatkan pelayanan publik.",
    },

    {
        id: 6,
        title: "Sosialisasi Pajak Kecamatan",
        category: "Sosialisasi",
        date: "2 Januari 2026",
        year: 2026,
        location: "Kecamatan Rogojampi",
        image: "/public/images/gallery/placeholder.webp",
        description:
            "Program edukasi perpajakan kepada masyarakat dan pelaku UMKM di wilayah kecamatan.",
    },

    {
        id: 7,
        title: "Layanan Konsultasi Pajak",
        category: "Pelayanan",
        date: "1 Januari 2026",
        year: 2026,
        location: "Kantor BAPENDA",
        image: "public/images/gallery/placeholder.webp",
        description:
            "Pelayanan konsultasi mengenai pajak daerah kepada masyarakat secara langsung.",
    },

    {
        id: 8,
        title: "Capacity Building Pegawai",
        category: "Kegiatan Internal",
        date: "30 Desember 2025",
        year: 2025,
        location: "Hotel Aston Banyuwangi",
        image: "public/images/gallery/placeholder.webp",
        featured: true,
        description:
            "Pelatihan peningkatan kompetensi pegawai BAPENDA Kabupaten Banyuwangi.",
    },

    {
        id: 9,
        title: "Sosialisasi BPHTB",
        category: "Sosialisasi",
        date: "20 November 2025",
        year: 2025,
        location: "Kecamatan Banyuwangi",
        image: "public/images/gallery/placeholder.webp",
        description:
            "Penyuluhan mengenai Bea Perolehan Hak atas Tanah dan Bangunan (BPHTB).",
    },

    {
        id: 10,
        title: "Pelayanan Mobil Keliling",
        category: "Pelayanan",
        date: "10 Oktober 2025",
        year: 2025,
        location: "Kecamatan Muncar",
        image: "/public/images/gallery/placeholder.webp",
        description:
            "Pelayanan pembayaran pajak menggunakan mobil pelayanan keliling.",
    },

    {
        id: 11,
        title: "Penagihan Pajak Hotel",
        category: "Penagihan",
        date: "8 September 2025",
        year: 2025,
        location: "Wilayah Banyuwangi Kota",
        image: "public/images/gallery/placeholder.webp",
        description:
            "Pendataan dan penagihan pajak daerah sektor perhotelan.",
    },

    {
        id: 12,
        title: "Apel Pagi Pegawai",
        category: "Kegiatan Internal",
        date: "1 Agustus 2025",
        year: 2025,
        location: "Halaman Kantor BAPENDA",
        image: "public/images/gallery/placeholder.webp",
        description:
            "Kegiatan apel pagi rutin seluruh pegawai BAPENDA Kabupaten Banyuwangi.",
    },
];