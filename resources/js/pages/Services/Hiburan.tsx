import ServiceDetail from '@/components/layouts/ServicesDetail';

export default function PajakHiburan() {
    return (
        <ServiceDetail
            title="Pajak Hiburan"
            description="Pelayanan administrasi Pajak Hiburan."
            information={[
                'Dikenakan atas jasa penyelenggaraan hiburan dengan dipungut bayaran, seperti tontonan film, konser, karaoke, tempat rekreasi, dan olahraga.',
                'Tarif pajak disesuaikan dengan jenis hiburan yang diselenggarakan sesuai dengan peraturan daerah yang berlaku.',
                'Penyelenggara wajib melaporkan jumlah tiket yang terjual atau omset pendapatan bulanan.',
                'Pengajuan izin keramaian/hiburan juga memerlukan rekomendasi bebas tunggakan pajak.',
            ]}
            requirements={['NPWPD', 'Izin Hiburan', 'Laporan Pendapatan']}
            url="https://..."
        />
    );
}
