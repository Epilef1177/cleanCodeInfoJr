let avancaUmSlide = window.document.querySelector('button#avancaUmSlide');
let voltaUmSlide = window.document.querySelector('button#voltaUmSlide');
let slideLayout = window.document.querySelector('img#slideLayout');
let posicaoSlide = 0;

function avancandoUmSlide(posicaoAtual, slideLayout){
    if(posicaoAtual < 22){posicaoAtual += 1};
    slideLayout.setAttribute('src',`images/slide-${posicaoSlide}.png`);
    return posicaoAtual;
}
function voltandoUmSlide(posicaoAtual, slideLayout){
    if(posicaoAtual > 0){posicaoAtual -= 1};
    slideLayout.setAttribute('src',`images/slide-${posicaoSlide}.png`);
    return posicaoAtual
}

avancaUmSlide.addEventListener('click', function(event){posicaoSlide = avancandoUmSlide(posicaoSlide, slideLayout, event)});
voltaUmSlide.addEventListener('click', function(event){posicaoSlide = voltandoUmSlide(posicaoSlide, slideLayout, event)});