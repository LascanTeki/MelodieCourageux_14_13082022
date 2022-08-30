
import '../Style/Form.css'
import { useNavigate } from "react-router-dom";
import { states } from '../Asset/States'
import modal from 'projet-14-library'
import 'projet-14-library/dist/index.css';

var {Modal, open} = modal

function saveEmployee() {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const dateOfBirth = document.getElementById('date-of-birth');
    const startDate = document.getElementById('start-date');
    const department = document.getElementById('department');
    const street = document.getElementById('street');
    const city = document.getElementById('city');
    const state = document.getElementById('state');
    const zipCode = document.getElementById('zip-code');

    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const employee = {
        id: employees.length,
        firstName: firstName.value,
        lastName: lastName.value,
        dateOfBirth: dateOfBirth.value,
        startDate: startDate.value,
        department: department.value,
        street: street.value,
        city: city.value,
        state: state.value,
        zipCode: zipCode.value
    };
    employees.push(employee);
    console.log(employees.length);
    localStorage.setItem('employees', JSON.stringify(employees));
    open();
}


function Form() {

    return (
        <div className="container">
            <form action="#" id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <input id="date-of-birth" type="text" />

                <label htmlFor="start-date">Start Date</label>
                {/*<input id="start-date" type="date" />*/}

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" />

                    <label htmlFor="state">State</label>
                    <select name="state" id="state">
                        {states.map((user) => (
                            <option key={user.abbreviation}>{user.name}</option>
                        ))}
                    </select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" />
                </fieldset>

                <label htmlFor="department">Department</label>
                <select name="department" id="department">
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
            </form>
            <button onClick={saveEmployee}>Save</button>
            <Modal><div id="modal"> Employee Created!</div></Modal>
        </div >
    )
}

export default Form