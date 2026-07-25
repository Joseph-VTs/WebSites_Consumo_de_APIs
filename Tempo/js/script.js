const url = 'https://open-mteo.com';
const resposta = new Response();

if(resposta.ok === true){
    console.log(
        'Sucesso',
        '\nStatus:', resposta.status,
        '\nTipo:', resposta.type,
        '\nRedirecionamentos:', resposta.redirected,
        '\nResposta da URL:', resposta.url
    );
} else{
    console.log(
        'Verificar',
        '\nStatus ', resposta.status, 'Texto:', resposta.statusText,
        '\nTipo:', resposta.type,
        '\nRedirecionamentos:', resposta.redirected,
        '\nResposta da URL:', resposta.url,
        '\nErro:', resposta.error()
    );
}
console.log("\nLOGs de Teste:\n", resposta.headers);