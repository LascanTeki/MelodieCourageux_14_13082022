
import { states } from '../Asset/States'
import modal from 'projet-14-library'
import DatePickerDialog from './Date.tsx'
import 'projet-14-library/dist/index.css';
import { addEmployee } from '../data/datamanager';
import Dropdown from 'react-dropdown';

import '../Style/Form.css'
import React, { useState } from 'react';

var { Modal, open } = modal


function Form() {

    const [Depar, setDepar] = useState("Sales");
    const [Stat, setState] = useState("Alabama");
    
    //Saves the informations from the form, sending them to storage

    function saveEmployee(e) {

        e.preventDefault()
        const firstName = document.getElementById('first-name');
        const lastName = document.getElementById('last-name');
        const dateOfBirth = document.getElementById('date-of-birth');
        const startDate = document.getElementById('start-date');
        const street = document.getElementById('street');
        const city = document.getElementById('city');
        const zipCode = document.getElementById('zip-code');
    
        addEmployee({
            firstName: firstName.value,
            lastName: lastName.value,
            dateOfBirth: dateOfBirth.value,
            startDate: startDate.value,
            department: Depar,
            street: street.value,
            city: city.value,
            state: Stat,
            zipCode: zipCode.value
        });
        open();
    }

    // Sets the values for Departement and State

    let state =[]

    function SelectDepar(option) {
        setDepar(option.value)
    }

    function SelectState(option) {
        setState(option.value)
    }

    // Creates a new list of states

    function statemap(){
        states.map((user) => (
            state.push(user.name)
        ))
        return state
    }

    statemap();
    
    return (
        <div className="container">
            <form action="#" id="create-employee" onSubmit={saveEmployee}>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" required />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" required />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <DatePickerDialog clas="date-of-birth" required />

                <label htmlFor="start-date">Start Date</label>
                <DatePickerDialog clas="start-date" required />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" required />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" required />

                    <label htmlFor="state">State</label>

                    <Dropdown className="state" options={state} value={'Alabama'} placeholder="Select an option" onChange={SelectState} />

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" required />
                </fieldset>

                <label htmlFor="department">Department</label>
                <Dropdown className="department" options={['Sales', 'Marketing', 'Engineering', 'Human Ressources', 'Legal']} value={'Sales'} placeholder="Select an option" onChange={SelectDepar} />

                <input type="submit" value="Save" />
            </form>
            {/* The modal whihc will appear once the submit button is clicked*/}
            <Modal><div id="modal"> Employee Created!</div></Modal>
        </div >
    )
}

export default Form