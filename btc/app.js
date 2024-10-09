document.getElementById('mineBtn').addEventListener('click', () => {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Mining...';

    // Simulasi proses penambangan dengan mencari nonce yang menghasilkan hash dengan dua nol pertama
    const target = '00';
    let nonce = 0;
    const data = 'Block Data';

    // Fungsi hash sederhana menggunakan SHA-256
    function sha256(str) {
        // Menggunakan Web Crypto API
        const encoder = new TextEncoder();
        const data = encoder.encode(str);
        return crypto.subtle.digest('SHA-256', data).then(hashBuffer => {
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
            return hashHex;
        });
    }

    // Fungsi penambangan
    async function mine() {
        while (true) {
            const hash = await sha256(data + nonce);
            if (hash.startsWith(target)) {
                resultDiv.innerHTML = `Sukses! Nonce: ${nonce} menghasilkan hash: ${hash}`;
                break;
            }
            nonce++;
            // Untuk mencegah browser hang, tambahkan jeda
            if (nonce % 100000 === 0) {
                await new Promise(resolve => setTimeout(resolve, 0));
            }
        }
    }

    mine();
});
