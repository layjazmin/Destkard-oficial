// =========================================
// DESTKARD - NOVA
// CONTROL DE REPRODUCTORES DE AUDIO
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    const reproductores = document.querySelectorAll(".voz audio");

    reproductores.forEach((audio) => {

        audio.addEventListener("play", () => {

            reproductores.forEach((otroAudio) => {

                if (otroAudio !== audio) {
                    otroAudio.pause();
                    otroAudio.currentTime = 0;
                }

            });

        });

    });

});