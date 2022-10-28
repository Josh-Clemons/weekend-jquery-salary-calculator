$(document).ready(onReady);

let employees = [];
let idCount = 0;
let monthlySalary = 0;

function onReady () {
    console.log('we have jquery');
    // event actions:
    // add employee when 'Submit' button is clicked
    // remove employee when corresponding 'delete' button is clicked
    $('#submitBtn').on('click', addEmployee)
    $('#employeeTableBody').on('click', '.removeBtn', removeEmployee)

    // state actions:
    // add or remove employee information from employees object
    // employee info includes First Name, Last Name, ID, Title, Annual Salary
    // calculate monthly salary from employees object


    // render actions:
    // refresh employees table based on object
    // clear input fields
    // update monthly costs

    render();
} // end onReady

function addEmployee () {
    // console.log('in addEmployee')
    let employee = {
        fName: $('#fNameInput').val(),
        lName: $('#lNameInput').val(),
        title: $('#titleInput').val(),
        id: $('#idInput').val(),
        annualSalary: $('#annualSalaryInput').val(),
        dataID: idCount
    }
    idCount ++;
    employees.push(employee);

    $('#fNameInput').val('');
    $('#lNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#annualSalaryInput').val('');

    updateMonthlySalary ();
    render ();
} // end addEmployee

function removeEmployee() {
    // console.log('in remove');
    for (let [i, employee] of employees.entries()) {
        if (employee.dataID == $(this).attr('data-id')) {
            employees.splice(i, 1);
        }
    }
    updateMonthlySalary ();
    render ();
} // end removeEmployee

function updateMonthlySalary () {
    monthlySalary = 0;
    for (employee of employees) {
        monthlySalary += (employee.annualSalary/12);
    }
    monthlySalary = Number(monthlySalary.toFixed(2));
    // console.log('monthly salary', monthlySalary);
    return;
} // end updateMonthlySalary

function render() {
    // Math.round(monthlySalary * 100) / 100;
    // console.log(monthlySalary);
    let monthlyString = monthlySalary.toLocaleString('en');
    // parseFloat(monthlyString).toFixed(2);
    // console.log(monthlyString);

    //updates employee table
    $('#employeeTableBody').empty();
    for (employee of employees) {
        $('#employeeTableBody').append (`
            <tr>
                <td>${employee.fName}</td>
                <td>${employee.lName}</td>
                <td>${employee.id}</td>
                <td>${employee.title}</td>
                <td>${employee.annualSalary}</td>
                <td><button class="removeBtn" data-id="${employee.dataID}">Delete</button></td>
            </tr>
        `)
    }

    // updates monthly salary
    $('#monthlySalary').empty();
    $('#monthlySalary').append(`Total Monthly: $${monthlyString}`);
}  // end render

