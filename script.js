const botaodenavegacao = document.querySelector('.botaodenavegacao');
const paineldenavegacao = document.querySelector('.paineldenavegacao');
const topicosnavegacaoimg = document.querySelector('.topicosnavegacaoimg');
const topicosnavegacaosobre = document.querySelector('.topicosnavegacaosobreativar');
const metaaumentar = document.querySelector('#metaaumentar');
const dadosadocao = document.querySelector('.metas');
const body = document.querySelector('body');

const infodoglogin = document.querySelector('.informacaodoglogin');
const doglogin = document.querySelector('.animatedlogin');


doglogin.addEventListener('click', ()=> {
    infodoglogin.classList.toggle('active');
});


topicosnavegacaoimg.addEventListener('click', ()=> {
    topicosnavegacaosobre.classList.toggle('active');
});

botaodenavegacao.addEventListener('click', ()=> {
    paineldenavegacao.classList.toggle('active');
});

botaodenavegacao.addEventListener('click', ()=> {
    body.classList.toggle('active');
});

metaaumentar.addEventListener('click', ()=> {
    dadosadocao.classList.toggle('active');
});








const m5mm1 = document.querySelector('.mais5motivosmostrar1');
const m5me1 = document.querySelector('.mais5motivosesconder1');

m5mm1.addEventListener('click', ()=> {
    m5me1.classList.toggle('active');
});

const m5mm2 = document.querySelector('.mais5motivosmostrar2');
const m5me2 = document.querySelector('.mais5motivosesconder2');

m5mm2.addEventListener('click', ()=> {
    m5me2.classList.toggle('active');
});

const m5mm3 = document.querySelector('.mais5motivosmostrar3');
const m5me3 = document.querySelector('.mais5motivosesconder3');

m5mm3.addEventListener('click', ()=> {
    m5me3.classList.toggle('active');
});

const m5mm4 = document.querySelector('.mais5motivosmostrar4');
const m5me4 = document.querySelector('.mais5motivosesconder4');

m5mm4.addEventListener('click', ()=> {
    m5me4.classList.toggle('active');
});

const m5mm5 = document.querySelector('.mais5motivosmostrar5');
const m5me5 = document.querySelector('.mais5motivosesconder5');

m5mm5.addEventListener('click', ()=> {
    m5me5.classList.toggle('active');
});

//PARTE SCRIPT LOGIN PAGE//



