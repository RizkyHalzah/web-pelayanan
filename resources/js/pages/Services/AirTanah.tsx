import ServiceDetail from '@/components/layouts/ServicesDetail';

export default function PajakAirTanah() {
    return (
        <ServiceDetail
            title="Pajak Air Tanah"
            description="Pelayanan administrasi Pajak Air Tanah."
            information={[
                'Dikenakan atas pengambilan dan/atau pemanfaatan air tanah untuk keperluan industri, komersial, maupun kegiatan usaha lainnya.',
                'Nilai Perolehan Air Tanah (NPA) ditetapkan berdasarkan volume pengambilan air yang tercatat pada meteran air.',
                'Wajib Pajak wajib memasang dan memelihara alat pencatat volume (meter air) yang telah dikalibrasi oleh instansi berwenang.',
                'Pelaporan debit air tanah dilakukan secara berkala setiap bulan untuk penetapan besaran pajak terutang.',
            ]}
            requirements={['Izin Pengambilan Air', 'NPWPD', 'Data Debit Air']}
            url="https://..."
        />
    );
}
