import ServiceDetail from '@/components/layouts/ServicesDetail';

export default function PajakParkir() {
    return (
        <ServiceDetail
            title="Pajak Parkir"
            description="Pelayanan administrasi Pajak Parkir."
            information={[
                'Dikenakan atas penyelenggaraan tempat penitipan kendaraan bermotor atau penyediaan tempat parkir di luar badan jalan.',
                'Tarif pajak bervariasi bergantung pada jenis usaha parkir, dengan tarif umum maksimal 20%-30%.',
                'Wajib Pajak wajib mendaftarkan usahanya, mencatat omset harian, dan melaporkannya setiap bulan.',
                'Pembayaran dapat disetor langsung ke kas daerah atau melalui bank persepsi yang ditunjuk.',
            ]}
            requirements={['NIB', 'NPWPD', 'Izin Usaha', 'Data Lokasi']}
            url="https://..."
        />
    );
}
