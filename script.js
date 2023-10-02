function funcaoControlaAudio(buttonId, audioId) {
    const button = document.getElementById(buttonId);
    const audio = document.getElementById(audioId);

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
    }
}

document.getElementById('sound1').addEventListener('click', () => {
    funcaoControlaAudio('sound1', 'audio1');
});

document.getElementById('sound2').addEventListener('click', () => {
    funcaoControlaAudio('sound2', 'audio2');
});

document.getElementById('sound3').addEventListener('click', () => {
    funcaoControlaAudio('sound3', 'audio3');
});

document.getElementById('sound4').addEventListener('click', () => {
    funcaoControlaAudio('sound4', 'audio4');
});


const images = document.querySelectorAll('img');
images.forEach(function(image) {
    image.addEventListener('click', function() {
        this.classList.toggle('selected');
    });
});
