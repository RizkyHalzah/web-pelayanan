import ServiceDetail from '@/components/layouts/ServicesDetail';

export default function PBBP2() {
    return (
        <ServiceDetail
            title="PBB-P2"
            description="Pelayanan Pajak Bumi dan Bangunan Perdesaan dan Perkotaan secara online."
            information={[
                'PBB-P2 merupakan pajak atas kepemilikan, penguasaan, dan/atau pemanfaatan bumi dan/atau bangunan.',
                'Pembayaran dilakukan setiap tahun berdasarkan Surat Pemberitahuan Pajak Terutang (SPPT).',
                'SPPT dapat dicetak secara online melalui portal resmi Bapenda Banyuwangi.',
                'Batas akhir pembayaran PBB-P2 biasanya jatuh tempo pada tanggal 31 Agustus setiap tahunnya.',
            ]}
            requirements={[
                'KTP Pemohon',
                'SPPT',
                'Bukti Kepemilikan',
                'Surat Kuasa (jika ada)',
            ]}
            url="https://beta.banyuwangikab.go.id/layanan"
        />
    );
}
