const data = JSON.parse(localStorage.getItem('employees')) || [];

function addEmployee(profil){
    data.push(profil);
    localStorage.setItem("employees", JSON.stringify(data));
}

function getEmployees(){
    const data = JSON.parse(localStorage.getItem('employees')) || [];
    return data;
}

export {
    addEmployee,
    getEmployees
}