$(document).ready(onReady);

let employees = [
    {
        fName: 'Jen',
        lName: 'Barber',
        title: 'Team Lead',
        id: '4521',
        annualSalary: 80000,
        dataID: 0
    },
    {
        fName: 'Maurice',
        lName: 'Moss',
        title: 'Support Team',
        id: '8724',
        annualSalary: 58000,
        dataID: 1
    },
    {
        fName: 'Roy',
        lName: 'Smith',
        title: 'Quality Assurance',
        id: '9623',
        annualSalary: 48000,
        dataID: 2
    }

];
let idCount = 3;
let monthlySalary = 0;
let totalAnnualSalary = 0;

function onReady () {
    console.log('we have jquery');
    // event actions:
    // add employee when 'Submit' button is clicked
    // remove employee when corresponding 'delete' button is clicked
    $('#submitBtn').on('click', addEmployee)
    // $('#employeeTableBody').on('click', '.removeBtn', removeEmployee)

    // the below event handler adds a confirm to continue when clicking delete on an employee
    $(function() {    
        $('#employeeTableBody').on('click', '.removeBtn', function () {
            if (confirm("Delete?")) {
                removeEmployee($(this).attr('data-id'));
            }
        });
    });

    $('h1').click(redirectTest);

    render();
} // end onReady





// state actions:
// add or remove employee information from employees object
// employee info includes First Name, Last Name, ID, Title, Annual Salary
// calculate monthly salary from employees object

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

    render ();
} // end addEmployee

function removeEmployee( id ) {
    // console.log('in remove');
    for (let [i, employee] of employees.entries()) {
        if (employee.dataID == id) {
            employees.splice(i, 1);
        }
    }
    render ();
} // end removeEmployee

function updateMonthlySalary () {
    monthlySalary = 0;
    totalAnnualSalary = 0;

    for (employee of employees) {
        monthlySalary += (employee.annualSalary/12);
    }
    monthlySalary = Number(monthlySalary.toFixed(2));
    // console.log('monthly salary', monthlySalary);
    if (monthlySalary > 20000) {
        $('#monthlySalary').addClass('overLimit');
    } else {
        $('#monthlySalary').removeClass('overLimit');
    }
    return;
} // end updateMonthlySalary

function redirectTest () {
    location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}


// render actions:
// refresh employees table based on object
// clear input fields
// update monthly costs
function render() {
    updateMonthlySalary ();
    //updates employee table
    $('#employeeTableBody').empty();
    for (employee of employees) {
        $('#employeeTableBody').append (`
            <tr>
                <td>${employee.fName}</td>
                <td>${employee.lName}</td>
                <td>${employee.id}</td>
                <td>${employee.title}</td>
                <td>$${Number(employee.annualSalary).toLocaleString('en')}</td>
                <td class="tdDelete">
                    <button class="removeBtn" data-id="${employee.dataID}">Delete</button>
                </td>
            </tr>
        `)
    }
    // updates monthly salary
    $('#monthlySalary').empty();
    $('#monthlySalary').append(`Total Monthly Payroll: $${Number(monthlySalary).toLocaleString('en')}`);
}  // end render

