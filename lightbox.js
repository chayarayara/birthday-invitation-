
document.addEventListener("DOMContentLoaded", function () {

    const fotoGaleri = document.querySelectorAll(".gallery-grid img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const tombolTutup = document.querySelector(".close-lightbox");

    if (!lightbox || !lightboxImg || !tombolTutup) {
        console.error("Elemen lightbox tidak ditemukan!");
        return;
    }

    // Pindahkan lightbox langsung ke body
    document.body.appendChild(lightbox);

    // Atur tampilan lightbox
    Object.assign(lightbox.style, {
        display: "none",
        position: "fixed",
        inset: "0",
        width: "100%",
        height: "100%",
        background: "rgba(30, 23, 18, 0.92)",
        zIndex: "999999",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        cursor: "zoom-out"
    });

    // Atur tampilan foto besar
    Object.assign(lightboxImg.style, {
        display: "block",
        maxWidth: "90vw",
        maxHeight: "85vh",
        width: "auto",
        height: "auto",
        objectFit: "contain",
        borderRadius: "12px",
        cursor: "default"
    });

    // Atur tombol tutup
    Object.assign(tombolTutup.style, {
        position: "absolute",
        top: "15px",
        right: "30px",
        color: "white",
        fontSize: "45px",
        cursor: "pointer",
        zIndex: "1000000"
    });

    // Klik foto galeri
    fotoGaleri.forEach(function(foto) {
        foto.style.cursor = "pointer";

        foto.addEventListener("click", function() {
            lightboxImg.src = foto.src;
            lightboxImg.alt = foto.alt;
            lightbox.style.display = "flex";
            document.body.style.overflow = "hidden";
        });
    });

    // Fungsi menutup foto
    function tutupLightbox() {
        lightbox.style.display = "none";
        document.body.style.overflow = "";
        lightboxImg.src = "";
    }

    tombolTutup.addEventListener("click", tutupLightbox);

    lightbox.addEventListener("click", function(event) {
        if (event.target === lightbox) {
            tutupLightbox();
        }
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            tutupLightbox();
        }
    });

});
