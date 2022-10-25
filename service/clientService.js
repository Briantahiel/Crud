const clientList = () => 
    fetch("http://localhost:3000/profile").then((res) => res.json());

export const clientServices = {
    clientList,
}
