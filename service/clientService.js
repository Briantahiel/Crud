const newLine = (name, email) => {
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
            </td>`
            line.innerHTML = content;
            return line
};
const table = document.querySelector("[data-table]");

const clientList = () => {
    const promise = new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();
        http.open("GET","http://localhost:3000/profile");
        http.send();
        http.onload = () => {
            const response = JSON.parse(http.response);
            if(http.status >= 400){
                reject(response)
            }
            else{
                resolve(response)
            }
        };
    });
    return promise
};
clientList().then((data) => {
    data.forEach(profile => {
        const thisLine = newLine(profile.name, profile.email)
        table.appendChild(thisLine);
    });
}).catch((err) => alert("Something went wrong!"))


