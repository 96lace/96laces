document.getElementById("musicplayer").onclick = function() {
    var audio = document.getElementById("audio111");
    if (audio.paused) audio.play();
    else audio.pause();
    };