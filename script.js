$(document).ready(onReady);

let employees = [];
let idCount = 0;


function onReady () {
    console.log('we have jquery');
    // event actions:
    // add employee when 'Submit' button is clicked
    // remove employee when corresponding 'delete' button is clicked
    $('#submitBtn').on('click', addEmployee)

    // state actions:
    // add or remove employee information from employees object
    // employee info includes First Name, Last Name, ID, Title, Annual Salary
    // calculate monthly salary from employees object


    // render actions:
    // refresh employees table based on object
    // clear input fields


    render();
}

function addEmployee () {
    // console.log('in addEmployee')
    let employee = {
        fName: $('#fNameInput').val(),
        lName: $('#lNameInput').val(),
        id: $('#idInput').val(),
        annualSalary: $('#annualSalaryInput').val(),
        dataID: idCount
    }
    idCount ++;
    employees.push(employee);
    render ();
} // end addEmployee



function render() {
    $('#employeeTableBody').empty();
    for (employee of employees) {
        $('#employeeTableBody').append (`
            <tr>
                <td>${employee.fName}</td>
        
        
        `)
    }
}