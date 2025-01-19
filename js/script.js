//passo 01 seleção de elementos html
const container=document.querySelector('main.container');
const digitarTexto=document.querySelector('div#formulario input');
const validar=document.querySelector('div#formulario div');
const botaoGeraQrCode=document.querySelector('div#formulario button');
const imagemQrCode=document.querySelector('div#imgQr-code img');

//passo 03 função
function gerarQrCode(){
    //validação
    //console.log('teste');
    //criação de conversão de variável
    const digitarTexto1= digitarTexto.value;
    //validação
    //console.log(digitarTexto1);
    if(!digitarTexto1){
        validar.innerHTML=(`ERRO, faltou preencher o campo de cima!`);
        validar.style.color='red'
        return;
    }
    botaoGeraQrCode.innerHTML=(`Gerando QR Code...`);
    //Entre no gerador de QR Code, depois clique em  QR code API, copie o link e cole no espaço (``), depois tire a palavra Exemple e coloque  a nova variável do digitar Url ou texto.
    imagemQrCode.src=(` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= ${digitarTexto1} `);

    //class='container active', colocando em evento
    imagemQrCode.addEventListener('load',()=>{
        container.classList.add('active');
        
        botaoGeraQrCode.innerHTML=(`QR Code gerado com sucesso!`)
        
        
    });

};//fim passo 03

//passo 02 evento principal
botaoGeraQrCode.addEventListener('click',()=>{
    //chamada da função
    gerarQrCode();


}); //fim passo 02

//passo 04 evento na tecla Enter
digitarTexto.addEventListener('keydown',(e)=>{
    if(e.code==='Enter'){
        //chamar função
        gerarQrCode();

    }

});//fim passo 04

//passo 05 limpar área do QR Code
digitarTexto.addEventListener('keyup',()=>{
    if(!digitarTexto.value){
        container.classList.remove(`active`);
        botaoGerarQrCode.innerHTML=(` Gerar QR Code `)

    }

});//fim passo 05
