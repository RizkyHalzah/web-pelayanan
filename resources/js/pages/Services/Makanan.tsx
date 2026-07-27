import ServiceDetail from '@/components/layouts/ServicesDetail';

export default function PajakMakananMinuman() {
    return (
        <ServiceDetail
            title="Pajak Makanan & Minuman"
            description="Pelayanan administrasi Pajak Makanan & Minuman."
            information={[
                'Dikenakan atas pelayanan yang disediakan oleh restoran, rumah makan, warung, kafetaria, kantin, bakri, catering/jasa boga, dan sejenisnya.',
                'Tarif pajak yang dikenakan adalah sebesar 10% dari jumlah pembayaran yang diterima.',
                'Wajib Pajak diharuskan melaporkan omset penjualan bulanan paling lambat tanggal 15 bulan berikutnya.',
                'Pelaporan dan pembayaran dapat dilakukan secara online melalui e-PAD.',
            ]}
            requirements={[
                'NIB',
                'NPWPD',
                'Laporan Omset',
                'Identitas Pemilik',
            ]}
            url="https://..."
        />
    );
}
