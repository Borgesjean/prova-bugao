function obtemDadosLocalStorage() {
    const veiculos = localStorage.getItem("veiculos");
    return JSON.parse(veiculos) || [];
}

function iniciar() {
    renderizarListagem();
}

function renderizarListagem() {
    const veiculos = obtemDadosLocalStorage();
    const listaEl = document.querySelector("#lista");

    veiculos.forEach((cli, indice) => {
        const trEl = document.createElement("tr");

        const tdId = document.createElement("td");
        const tdMarca = document.createElement("td");
        const tdModelo = document.createElement("td");
        const tdAno = document.createElement("td");

        tdId.innerHTML = indice + 1;
        tdMarca.innerHTML = cli.marca;
        tdModelo.innerHTML = cli.modelo;
        tdAno.innerHTML = cli.ano;

        trEl.appendChild(tdId);
        trEl.appendChild(tdMarca);
        trEl.appendChild(tdModelo);
        trEl.appendChild(tdAno);

        listaEl.appendChild(trEl);
    });
}
