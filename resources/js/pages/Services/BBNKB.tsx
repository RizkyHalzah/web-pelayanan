import ServiceDetail from '@/components/layouts/ServicesDetail';

export default function BBNKB() {
    return (
        <ServiceDetail
            title="Bea Balik Nama Kendaraan Bermotor (BBNKB)"
            description="Pelayanan administrasi Bea Balik Nama Kendaraan Bermotor."
            information={[
                'Dikenakan atas penyerahan hak kepemilikan kendaraan bermotor sebagai akibat perjanjian dua belah pihak atau perbuatan sepihak atau peristiwa.',
                'Pendaftaran balik nama wajib dilakukan di kantor Bersama SAMSAT setempat dengan membawa dokumen asli kendaraan.',
                'Tarif BBNKB ditentukan berdasarkan nilai jual kendaraan bermotor (NJKB) yang berlaku.',
                'Opsen BBNKB merupakan tambahan pajak yang dipungut oleh Provinsi untuk dialokasikan kembali ke Kabupaten/Kota.',
            ]}
            requirements={['BPKB', 'STNK', 'KTP', 'Bukti Kepemilikan']}
            url="https://..."
        />
    );
}
