export interface FAQQuestion {
    id: string;
    question: string;
    answer: string;
}

export interface FAQCategory {
    id: string;
    title: string;
    description: string;
    questions: FAQQuestion[];
}

export const faqData: FAQCategory[] = [
    {
        id: "umum",
        title: "Informasi Umum",
        description: "Pertanyaan umum mengenai BAPENDA Kabupaten Banyuwangi.",
        questions: [
            {
                id: "umum-1",
                question: "Apa itu BAPENDA Kabupaten Banyuwangi?",
                answer:
                    "Badan Pendapatan Daerah (BAPENDA) Kabupaten Banyuwangi adalah perangkat daerah yang bertugas mengelola pendapatan daerah, khususnya yang berasal dari pajak daerah dan retribusi daerah.",
            },
            {
                id: "umum-2",
                question: "Pajak daerah apa saja yang dikelola BAPENDA?",
                answer:
                    "BAPENDA Kabupaten Banyuwangi mengelola berbagai jenis pajak daerah seperti PBB-P2, BPHTB, PBJT, Pajak Reklame, Pajak Air Tanah, Pajak MBLB, dan jenis pajak daerah lainnya sesuai dengan ketentuan yang berlaku.",
            },
            {
                id: "umum-3",
                question: "Di mana lokasi kantor BAPENDA Kabupaten Banyuwangi?",
                answer:
                    "Kantor BAPENDA Kabupaten Banyuwangi berlokasi di Kabupaten Banyuwangi. Informasi alamat lengkap, jam operasional, dan kontak dapat dilihat pada halaman Kontak website resmi.",
            },
            {
                id: "umum-4",
                question: "Bagaimana cara menghubungi BAPENDA?",
                answer:
                    "Anda dapat menghubungi BAPENDA melalui telepon, email, maupun media sosial resmi yang tersedia pada halaman Kontak website ini.",
            },
        ],
    },

    {
        id: "pbb-p2",
        title: "PBB-P2",
        description: "Pertanyaan mengenai Pajak Bumi dan Bangunan Perdesaan dan Perkotaan.",
        questions: [
            {
                id: "pbb-1",
                question: "Bagaimana cara mengecek tagihan PBB-P2?",
                answer:
                    "Tagihan PBB-P2 dapat dicek secara online melalui layanan digital BAPENDA dengan memasukkan Nomor Objek Pajak (NOP).",
            },
            {
                id: "pbb-2",
                question: "Bagaimana cara membayar PBB-P2?",
                answer:
                    "Pembayaran PBB-P2 dapat dilakukan melalui bank, mobile banking, internet banking, maupun loket pembayaran resmi yang bekerja sama dengan Pemerintah Kabupaten Banyuwangi.",
            },
            {
                id: "pbb-3",
                question: "Bagaimana jika terdapat kesalahan data pada SPPT PBB-P2?",
                answer:
                    "Wajib Pajak dapat mengajukan permohonan pembetulan data ke BAPENDA dengan membawa dokumen pendukung yang diperlukan.",
            },
            {
                id: "pbb-4",
                question: "Bagaimana cara mengurus objek pajak baru (OP Baru)?",
                answer:
                    "Permohonan objek pajak baru dapat diajukan melalui layanan BAPENDA dengan melengkapi seluruh persyaratan administrasi yang telah ditentukan.",
            },
        ],
    },

    {
        id: "bphtb",
        title: "BPHTB",
        description: "Pertanyaan mengenai Bea Perolehan Hak atas Tanah dan Bangunan.",
        questions: [
            {
                id: "bphtb-1",
                question: "Apa itu BPHTB?",
                answer:
                    "BPHTB merupakan pajak atas perolehan hak atas tanah dan/atau bangunan, seperti jual beli, hibah, waris, tukar menukar, dan bentuk perolehan hak lainnya.",
            },
        ],
    },
];