import ServiceDetail from '@/components/layouts/ServicesDetail';

export default function BPHTB() {
    return (
        <ServiceDetail
            title="BPHTB"
            description="Pelayanan Bea Perolehan Hak atas Tanah dan Bangunan."
            information={[
                'Bea Perolehan Hak atas Tanah dan Bangunan (BPHTB) dikenakan atas perolehan hak atas tanah dan/atau bangunan.',
                'Wajib Pajak harus melaporkan SSPD BPHTB untuk divalidasi oleh petugas Bapenda.',
                'Pembayaran BPHTB harus dilakukan sebelum akta tanah ditandatangani oleh PPAT/Notaris.',
                'Validasi BPHTB kini terintegrasi secara online untuk mempercepat pelayanan sertifikasi tanah.',
            ]}
            requirements={['KTP', 'AJB', 'Sertifikat', 'NPWP']}
            url="https://..."
        />
    );
}
