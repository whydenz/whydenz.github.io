async function checkAccount() {
    const accountId = document.getElementById('accountId').value;
    const resultDiv = document.getElementById('result');
    
    if (!accountId) {
        resultDiv.innerHTML = 'Please enter a valid Account ID.';
        return;
    }

    try {
        // Gantilah URL ini dengan URL API Mobile Legends yang valid
        const response = await fetch(`https://api.example.com/check_account?accountId=${accountId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'API-Key': 'your-api-key-here'  // Masukkan API Key dari layanan API yang digunakan
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (data.success) {
            const creationDate = new Date(data.creationTime);  // Asumsikan API mengembalikan timestamp yang bisa di-convert ke Date

            resultDiv.innerHTML = `
                <strong>Account ID:</strong> ${data.accountId} <br>
                <strong>Account Name:</strong> ${data.accountName} <br>
                <strong>Creation Date:</strong> ${creationDate.toDateString()} <br>
                <strong>Creation Time:</strong> ${creationDate.toTimeString()}
            `;
        } else {
            resultDiv.innerHTML = 'Account not found.';
        }
    } catch (error) {
        resultDiv.innerHTML = `Error: ${error.message}`;
    }
}
