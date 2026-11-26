


const parameter = new URLSearchParams(window.location.search);

const namaTamu = parameter.get("nama") || parameter.get("to") || "Tamu Undangan";

document.getElementById("namaTamuCover").textContent = namaTamu;
document.getElementById("namaTamuIsi").textContent = namaTamu;

const namaRSVP = document.getElementById("namaRSVP");

if (namaRSVP) {
    namaRSVP.value = namaTamu;
}




function bukaUndangan() {
    document.getElementById("cover").style.display = "none";
    document.getElementById("isiUndangan").classList.remove("hidden");

    const musik = document.getElementById("musik");

    if (musik) {
        musik.play().catch(() => {
            console.log("Musik perlu diaktifkan melalui browser.");
        });
    }

    window.scrollTo(0, 0);
}



const tanggalAcara = new Date("February 14, 2027 00:00:00").getTime();

const countdownTimer = setInterval(function () {
    const sekarang = new Date().getTime();
    const selisih = tanggalAcara - sekarang;

    if (selisih <= 0) {
        clearInterval(countdownTimer);

        ["days", "hours", "minutes", "seconds"].forEach(id => {
            document.getElementById(id).textContent = "0";
        });

        return;
    }

    document.getElementById("days").textContent =
        Math.floor(selisih / (1000 * 60 * 60 * 24));

    document.getElementById("hours").textContent =
        Math.floor((selisih / (1000 * 60 * 60)) % 24);

    document.getElementById("minutes").textContent =
        Math.floor((selisih / (1000 * 60)) % 60);

    document.getElementById("seconds").textContent =
        Math.floor((selisih / 1000) % 60);

}, 1000);





  d
const formRSVP = document.getElementById("formRSVP");

if (formRSVP) {
    formRSVP.addEventListener("submit", async function(e) {
        e.preventDefault();

        const status = document.getElementById("statusRSVP");
        const data = new FormData(this);

        const parameter = new URLSearchParams(window.location.search);
        const kodeTamu = parameter.get("kode");

        if (!kodeTamu) {
            status.textContent = "Kode tamu tidak ditemukan!";
            return;
        }

        data.append("kode", kodeTamu);

        status.textContent = "Sedang mengirim RSVP...";

        try {
            const response = await fetch("proses/simpan_rsvp.php", {
                method: "POST",
                body: data
            });

            const hasil = await response.json();

            if (response.ok && hasil.status === "success") {
                status.textContent =
                    "✓ RSVP berhasil disimpan dan terkirim! Terima kasih sudah mengisi konfirmasi.";

                status.style.color = "#4d8056";

            } else {
                status.textContent = hasil.pesan || "RSVP gagal disimpan.";
                status.style.color = "#b54747";
            }

        } catch (error) {
            console.error(error);
            status.textContent =
                "Terjadi kesalahan. RSVP belum dapat dikirim.";
            status.style.color = "#b54747";
        }
    });
}

function pindahHalaman(id) {
    const tujuan = document.getElementById(id);

    if (tujuan) {
        tujuan.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

function scrollKe(id) {
    pindahHalaman(id);
}

// FITUR FOTO LIGHTBOX
const fotoGaleri = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const tombolTutup = document.querySelector(".close-lightbox");

// Klik foto untuk memperbesar
fotoGaleri.forEach(function(foto) {
    foto.addEventListener("click", function() {
        lightboxImg.src = foto.src;
        lightboxImg.alt = foto.alt;
        lightbox.classList.add("active");
    });
});

// Tutup melalui tombol X
tombolTutup.addEventListener("click", function() {
    lightbox.classList.remove("active");
});

// Tutup dengan klik area luar foto
lightbox.addEventListener("click", function(event) {
    if (event.target === lightbox) {
        lightbox.classList.remove("active");
    }
});

// Tutup dengan tombol Escape
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        lightbox.classList.remove("active");
    }
});






