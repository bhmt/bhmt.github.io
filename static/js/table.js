const rowsPerPage = 10;
let currentPage = 1;
let data = null

function generateTable() {
    currentPage = 1;
    data = null

    return `
    <table id="data-table">
        <thead>
            <tr>
                <th>Profil</th>
                <th>Ime</th>
                <th>Prezime</th>
                <th>Broj</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>

    <div class="pagination">
        <button onclick="changePage(-1)">&lt;</button>
        <span id="page-info"></span>
        <button onclick="changePage(1)">&gt;</button>
    </div>
    `
}

function renderTable(results) {
    if (results != null) {
        data = results
    }

    const tbody = document.querySelector("#data-table tbody");
    tbody.innerHTML = "";

    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageItems = data.slice(start, end);

    for (const item of pageItems) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><a target="_blank" href="https://facebook.com/${item.Url}">↗</a></br></td>
            <td>${item.First}</td>
            <td>${item.Last}</td>
            <td>${item.Phone}</td>
        `;

        tbody.appendChild(tr);
    }

    document.getElementById("page-info").textContent = `${currentPage} od ${Math.ceil(data.length / rowsPerPage)}`;
}

function changePage(direction) {
    const maxPage = Math.ceil(data.length / rowsPerPage);
    currentPage += direction;
    if (currentPage < 1) currentPage = 1;
    if (currentPage > maxPage) currentPage = maxPage;
    renderTable(null);
}
