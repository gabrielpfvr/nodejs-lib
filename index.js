const chalk = require('chalk');
const fs = require('fs');

function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while((temp = regex.exec(texto)) !== null) {
        arrayResultados.push({ [temp[1]] : temp[2] })
    }
    //const linksExtraidos = regex.exec(texto);       //const linksExtraidos = texto.match(regex);
    return arrayResultados.length === 0 ? 'Não há links' : arrayResultados;
}

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Não há arquivo no caminho'));
}

async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'UTF-8';
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        return extraiLinks(texto);
    } catch(erro){
        trataErro(erro);
    } 
}

//pegaArquivo('./arquivos/texto1.md');
module.exports = pegaArquivo;











































// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'UTF-8';
//     fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((texto) => console.log(chalk.green(texto)))
//     .catch((erro) => trataErro(erro))
// }


//function pegaArquivo(filePath) {
//    const encoding = "UTF-8";
//    fs.readFile(filePath, encoding, (erro, texto) => {
//        if (erro) {
//            trataErro(erro);
//        }
//        console.log(chalk.green(texto));
//    })
//}
