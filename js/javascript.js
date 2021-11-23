
// Definir variavel caixa //
let caixa = document.getElementById('caixa');
// Adicionar eventos com mouse na variavel caixa //
caixa.addEventListener('click', clicar);
caixa.addEventListener('mouseenter', entrar);
caixa.addEventListener('mouseout', sair);

// Criar funçao da variavel clicar // innerHtml o = sobreescreve e += adiciona o texto ao lado //
function clicar (){
    caixa.innerHTML = 'voce clicou';
    caixa.style.background = 'red';
    caixa.style.color = 'white';
}

// Criar funçao da variavel entrar (Ativa quando o mouse passar dentro da Div) //
function entrar (){
    caixa.innerHTML = 'Entrou';
    caixa.style.background = 'yellow';
    caixa.style.color = 'black';
}

// Criar funçao da variavel sair (Ativa quando tirar o mouse de dentro da Div) //
function sair (){
    caixa.innerHTML = 'Saiu';
    caixa.style.background = 'blue';
}


















