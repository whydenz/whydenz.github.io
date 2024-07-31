function welcomeMsg() {
    const welcomeMsgEl = document.querySelector("#welcomeMsg");
    let array = 0;

    
    const wAgw = `<a href="https://api.whatsapp.com/send?phone=6285150872460" target="_blank">WhatsApp</a>`;
    
    
    const msg1 = `<p class="animation mb-0 text-truncate">Ready kebutuhan hidup</p>`;
    const msg4 = `<p class="animation mb-0 text-truncate">Order AM Premium`;
    const msg5 = `<p class="animation mb-0 text-truncate">JOKI LOSESTREAK</p>`;
    const msg2 = `<p class="animation mb-0 text-truncate">Minat Chat ${wAgw}</p>`;
    const msg3 = `<p class="animation mb-0 text-truncate">Selamat menggunakan tools ini ;)</p>`;

    let arrayEl = [msg1, msg4, msg5, msg2, msg3];
    let arrayMax = 5;
    setInterval(() => {
        welcomeMsgEl.innerHTML = arrayEl[array];

        array++;
        if (array >= arrayMax) {
            array = 0;
        }
    }, 4000);
}
