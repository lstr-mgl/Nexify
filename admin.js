document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll('.toggleSubgroup');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function() {
            const subgroup = this.querySelector('.subgroup');
            const isVisible = subgroup.style.display === "block";
            subgroup.style.display = isVisible ? "none" : "block";
            subgroup.style.opacity = isVisible ? "0" : "1";
            subgroup.style.maxHeight = isVisible ? "0" : "500px";
        });
    });
});

function searchTable() {
    const input = document.getElementById("search-bar");
    const filter = input.value.toLowerCase();
    const rows = document.getElementById("order-table").getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        let match = false;

        for (let j = 0; j < cells.length; j++) {
            if (cells[j] && cells[j].textContent.toLowerCase().includes(filter)) {
                match = true;
            }
        }

        rows[i].style.display = match ? "" : "none";
    }
}

function sortTableByDate() {
    const table = document.getElementById("order-table");
    const rows = Array.from(table.rows).slice(1);
    const isAscending = table.querySelector("th#date-header").classList.contains("ascending");

    rows.sort((a, b) => {
        const dateA = new Date(a.cells[1].textContent);
        const dateB = new Date(b.cells[1].textContent);
        return isAscending ? dateA - dateB : dateB - dateA;
    });

    rows.forEach(row => table.appendChild(row));
    table.querySelector("th#date-header").classList.toggle("ascending", !isAscending);
}

function sortTableByCustomer() {
    const table = document.getElementById("order-table");
    const rows = Array.from(table.rows).slice(1);
    const isAscending = table.querySelector("th#customer-header").classList.contains("ascending");

    rows.sort((a, b) => {
        const customerA = a.cells[2].textContent.toLowerCase();
        const customerB = b.cells[2].textContent.toLowerCase();
        return isAscending ? customerA.localeCompare(customerB) : customerB.localeCompare(customerA);
    });

    rows.forEach(row => table.appendChild(row));
    table.querySelector("th#customer-header").classList.toggle("ascending", !isAscending);
}
