#!/usr/bin/env node

const chalk = require('chalk');
const pegaArquivo = require('./index');
const validaURL = require('./http-validate')

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo) {
    const resultado = await pegaArquivo(caminhoDeArquivo[2]);
    if (caminho [3] === 'validar'){
        console.log(chalk.yellow('Links validados'), await validaURL(resultado));
    } else {
        console.log(chalk.yellow('Lista de links'), resultado);
    }

    
}

processaTexto(caminho);
