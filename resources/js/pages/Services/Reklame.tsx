import ServiceDetail from '@/components/layouts/ServicesDetail';

export default function PajakReklame() {
    return (
        <ServiceDetail
            title="Pajak Reklame"
            description="Pelayanan administrasi Pajak Reklame."
            information={[
                'Dikenakan atas semua penyelenggaraan reklame baik papan, billboard, videotron, megatron, kain, melekat/stiker, selebaran, berjalan, maupun udara.',
                'Perhitungan pajak didasarkan pada ukuran (luas media), lokasi pemasangan, jenis reklame, dan jangka waktu penayangan.',
                'Wajib Pajak wajib mendapatkan izin penyelenggaraan reklame terlebih dahulu sebelum melakukan pemasangan.',
                'Pemasangan reklame harus memperhatikan estetika kota, ketertiban umum, dan keselamatan lingkungan.',
            ]}
            requirements={[
                'Desain Reklame',
                'Titik Lokasi',
                'Izin Reklame',
                'NPWPD',
            ]}
            url="https://..."
        />
    );
}
