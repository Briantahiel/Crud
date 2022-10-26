const newLine = (id, name, email) => {
    const line = document.createElement("tr")
    const content =
        `<td class="td" data-td>
            ${name}</td>
            <td>${email}</td>
            <td>
                <ul class="table_button_control">
                <li>
                    <a
                    href="../screens/editar_cliente.html"
                    class="simple_button simple_button_edit"
                    >Editar</a
                    >
                </li>
                <li>
                    <button
                    class="simple_button simple_button_delete"
                    type="button"
                    >
                    Eliminar
                    </button>
                </li>
                </ul>
            </td>`;
line.innerHTML = content;
const btn = line.querySelector("button");
btn.addEventListener("click", () => {
    const id = btn.id;
    console.log("Hiciste click", id)
})       
return line
};


const table = document.querySelector("[data-table]");

const clientList = () => 
    fetch("http://localhost:3000/profile").then((res) => res.json());

clientList()
    .then((data) => {
        data.forEach(({id, name, email}) => {
            const thisLine = newLine(id, name, email)
            table.appendChild(thisLine);
        });
}).catch((err) => alert("Something went wrong!"))




