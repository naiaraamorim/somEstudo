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

const tempo = document.getElementById('tempo');
const botaoIniciar = document.getElementById('iniciar');
const botaoPausar = document.getElementById('pause');
const botaoReiniciar = document.getElementById('reiniciar');
const alarme = document.getElementById('alarme');

let tempos;
let minutos = 0;
let segundos = 25;
let rodando = false;

function atualizaTempo() {
    tempo.textContent = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}

function iniciarTempo() {
    if (!rodando) {
        rodando = true;
        tempos = setInterval(() => {
            if (minutos === 0 && segundos === 0) {
                clearInterval(tempos);
                alarme.play();
                rodando = false;
            } else {
                if (segundos === 0) {
                    minutos--;
                    segundos = 59;
                } else {
                    segundos--;
                }
                atualizaTempo();
            }
        }, 1000);
    }
}

function pausarTempo() {
    if (rodando) {
        clearInterval(tempos);
        rodando = false;
    }
}

function reiniciarTempo() {
    clearInterval(tempos);
    rodando = false;
    minutos = 25;
    segundos = 0;
    atualizaTempo();
    alarme.pause();
    alarme.currentTime = 0;
}

botaoIniciar.addEventListener('click', iniciarTempo);
botaoPausar.addEventListener('click', pausarTempo);
botaoReiniciar.addEventListener('click', reiniciarTempo);

atualizaTempo();