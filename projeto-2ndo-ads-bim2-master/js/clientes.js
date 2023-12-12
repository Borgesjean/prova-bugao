function obtemClientesLocalStorage() {
    const clientes = localStorage.getItem("clientes");
    return JSON.parse(clientes) || [];
}

function iniciar() {
    renderizarListagem();
}

function renderizarListagem() {
    const clientes = obtemClientesLocalStorage();
    const listaEl = document.querySelector("#lista");

    clientes.forEach((cli, indice) => {
        const trEl = document.createElement("tr");

        const tdId = document.createElement("td");
        const tdNome = document.createElement("td");
        const tdEmail = document.createElement("td");
        const tdTelefone = document.createElement("td");

        tdId.innerHTML = indice + 1;
        tdNome.innerHTML = cli.nome;
        tdEmail.innerHTML = cli.email;
        tdTelefone.innerHTML = cli.telefone;

        trEl.appendChild(tdId);
        trEl.appendChild(tdNome);
        trEl.appendChild(tdEmail);
        trEl.appendChild(tdTelefone);

        listaEl.appendChild(trEl);
    });
}
