const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function manejaErros(erro) {
    throw new Error(erro.message);
}

async function checkStatus (arrayURL) {
    try {
        // promises async await
        const arrayStatus = await Promise
            .all(arrayURL
                .map(async url => {
                    const res = await fetch(url)
                    return `${res.status} - ${res.statusText}`; 
        }))
        return arrayStatus;
    } catch(erro) {
        manejaErros(erro);
    }
}

function geraArrayDeURL(arrayLinks) {
    //loop para cada { chave : valor }
    //Object.values(objeto) -> retorna valor de cada objeto
    return arrayLinks
        .map(objetoLink => Object
            .values(objetoLink).join())
}

async function validaURL(arrayLinks) {
    const links = geraArrayDeURL(arrayLinks);
    const statusLinks = await checkStatus(links);
    //return statusLinks;

    //spread operator
    const resultados = arrayLinks.map((objeto, indice) => ({ 
        ...objeto, 
        status:statusLinks[indice]
    }))
    return resultados
    
}

module.exports = validaURL;


