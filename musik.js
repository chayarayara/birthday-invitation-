document.addEventListener("DOMContentLoaded", function () {

    const musik = document.getElementById("musik");
    const tombol = document.getElementById("tombolMusik");

    if (!musik || !tombol) {
        console.error("Audio atau tombol musik tidak ditemukan!");
        return;
    }

    tombol.addEventListener("click", async function () {

        if (musik.paused) {
            try {
                await musik.play();

                tombol.innerHTML = "Ⅱ";
                tombol.title = "Matikan Musik";

            } catch (error) {
                console.error("Musik gagal diputar:", error);
                alert("Musik belum bisa diputar. Periksa file MP3 kamu.");
            }

        } else {
            musik.pause();
            tombol.innerHTML = "♫";
            tombol.title = "Nyalakan Musik";
        }

    });

});