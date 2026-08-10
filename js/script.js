function abrirVideo() {

    const modal = document.getElementById("modal-video");
    const video = document.getElementById("meu-video");

    modal.classList.add("ativo");

    video.play();
}


function fecharVideo() {

    const modal = document.getElementById("modal-video");
    const video = document.getElementById("meu-video");

    modal.classList.remove("ativo");

    video.pause();
    video.currentTime = 0;
}