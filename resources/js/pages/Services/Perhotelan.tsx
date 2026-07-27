import ServiceDetail from '@/components/layouts/ServicesDetail';

export default function PajakPerhotelan() {
    return (
        <ServiceDetail
            title="Pajak Perhotelan"
            description="Pelayanan administrasi Pajak Perhotelan."
            information={[
                'Dikenakan atas pelayanan yang disediakan oleh hotel, motel, losmen, guesthouse, villa, dan sejenisnya termasuk fasilitas penunjangnya.',
                'Tarif pajak yang dikenakan adalah sebesar 10% dari jumlah pembayaran kepada hotel.',
                'Setiap pengusaha hotel wajib memiliki NPWPD (Nomor Pokok Wajib Pajak Daerah) dan melaporkan Surat Pemberitahuan Pajak Daerah (SPTPD).',
                'Pelaporan wajib dilakukan secara rutin setiap bulan.',
            ]}
            requirements={['NIB', 'Izin Hotel', 'NPWPD', 'Laporan Pendapatan']}
            url="https://..."
        />
    );
}
