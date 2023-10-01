//criando a lista de amigos que vai ser sorteada
let amigos = [];

//criando a função adicionar
function adicionar () {
    //declarando as principais variáveis, que vão buscar os dados que vou precisar
    // - amigo => variável que vai buscar o nome incluído pelo usuário
    let amigo = document.getElementById("nome-amigo");
    // - lista => variável que vai buscar a lista onde os nomes serão adicionados
    let lista = document.getElementById("lista-amigos");

    //verificação se não foi adicionado nenhum texto ao nome
if (amigo.value == "") {
    alert("Informe o nome do amigo")
    return;
}

//verificação se o nome adicionado já estava na lista de amigos
if (amigos.includes(amigo.value)) {
    alert("Nome Já Adicionado");
    return;
}

    //inclusão do nome adicionado na lista de amigos
    amigos.push(amigo.value);

    //verificação para ver se o campo lista está vazio, se estiver adiciona o nome, se não concatena com o que já está lá.
    if (lista.textContent == "") {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ", " + amigo.value;
    }

    //limpando o campo de digitação do nome do amigo após a adição
    amigo.value = "";


}

//criando a função sortear
function sortear () {

    //verificação ser tem pelo menos 3 amigos na lista para poder fazer o sorteio
    if (amigos.length < 3) {
        alert("São Necessários pelo menos 3 amigos")
        return;
    }

    //chamando a função "embaralha" que foi criada baseada em uma função pronta para embaralhar os itens de um array
    embaralha(amigos);

    //declarando a variável que vai trazer o campo onde deverão aparecer os resultados do sorteio
    let sorteio = document.getElementById("lista-sorteio");

    //laço de repetição para fazer o sorteio
    // - Inicia comparando se a quantidade de itens da lista é maior que o contador e faz o incremento no contador
    for (let i = 0; i < amigos.length; i++) {
        //código para sortear a ultima posição da lista com a primeira posição da lista
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + " --> " + amigos[0] + "<br>";

} else {
            //código para sortear todas as outras posições da lista, sempre concatenando  com o ítem seguinte
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + " --> " + amigos[i + 1] + "<br>";

}
    }
}

//esta função foi copiada da internet, de um modelo já criado para embaralhar uma lista
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}


// criação da função reiniciar
function reiniciar () {
    //limpando a lista de amigos que foi adicionada anteriormente
    amigos = [];
    //linpando o campo onde aparece os amigos adicionados antes do sorteio
    document.getElementById("lista-amigos").innerHTML = "";
    //limpando o campo onde aparece o resultado do sorteio
    document.getElementById("lista-sorteio").innerHTML = "";
}

