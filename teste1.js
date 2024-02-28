const quant = 10;
let cap = 1;

const botaoPlayPause = document.getElementById('play-pause');

const nomeCap = document.getElementById('capitulo')

const audioCap = document.getElementById('audio-cap');

const botaoProximo = document.getElementById('proximo');

const botaoAnterior = document.getElementById('anterior')

let bool = 0;

function trocarNome()
{
    nomeCap.innerText = 'Capítulo ' + cap;
}

function tocar()
{
    audioCap.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
    bool = 1;
}

function pausar()
{
    audioCap.pause()
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
    botaoPlayPause.classList.add('bi-play-circle-fill');
    bool = 0;
}

function TouP()
{
    if(bool === 0)
    {
        tocar();
    }
    else
    {
        pausar();
    }
}

function Proximo()
{
    if(cap === quant)
    {
        cap = 1;
    }
    else
    {
        cap += 1;
    }

    audioCap.src = "./books/dom-casmurro/" + cap + ".mp3";
    trocarNome()
    tocar();
    bool = 1;
}

function Anterior()
{
    if(cap === 1)
    {
        cap = 10;
    }
    else
    {
        cap -= 1;
    }

    audioCap.src = "./books/dom-casmurro/" + cap + ".mp3";
    trocarNome()
    tocar();
    bool = 1;
}

botaoPlayPause.addEventListener('click', TouP);
botaoAnterior.addEventListener('click', Anterior);
botaoProximo.addEventListener('click', Proximo);