var connection = require("./db/connections");
var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");

connection.connect(err => {
    if (err) throw err;
    runSearch();
});

var menuOption = () => {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "Add Employees",
                "Add Departments",
                "Add Employees",
                "View Employees",
                "View Departments",
                "View Employees",
                "Update Employee Roles"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "View Employees":
                    viewEmployees();
                    break;

                case "View Departments":
                    viewDepartments();
                    break;

                case "View Roles":
                    viewRoles();
                    break;

                case "Add Employees":
                    addEmployees();
                    break;

                case "Add Departments":
                        addDepartments();
                        break;

                case "Add Roles":
                    addRoles();
                    break;

                    case "Update Employees Roles":
                    updateEmployeesRoles();
                    break;

              
            }
        });
}


var viewEmployees = () => {
var query = "SELECT * FROM employee";
var rows = await connection.query(query);
console.table(rows);
}

var viewRoles = () => {
var query = "SELECT * FROM role";
var rows = await connection.query(query);
console.table(rows);
}

var viewDepartments = () => {
var query = "SELECT * FROM department";
var rows = await connection.query(query);
console.table(rows);
}

var addEmployees = () => {
    var roleId = await getRoleId(employee.role);
    var managerId = await getEmployeeId(employee.manager);
    var query = "INSERT into employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)";
    var args = [employee.first_name, employee.last_name, roleId, managerId];
    var rows = await connection.query(query, args);
    console.log(`Added employee ${employee.first_name} ${employee.last_name}.`);
}

var addRoles = () => {
    var departmentId = await getDepartmentId(role.departmentName);
    var salary = role.salary;
    var title = role.roleName;
    var query = 'INSERT into role (title, salary, department_id) VALUES (?,?,?)';
    var args = [title, salary, departmentId];
    var rows = await connection.query(query, args);
    console.log(`Added role ${title}`);
}

var addDepartments = () => {
    var departmentName = department.departmentName;
    var query = 'INSERT into department (name) VALUES (?)';
    var args = [departmentName];
    var rows = await connection.query(query, args);
    console.log(`Added department named ${departmentName}`);
}

var updateEmployeesRoles = () => {
    var roleId = await getRoleId(employee.role);
    var employee = getFirstAndLastName(employee.employeeName);

    var query = 'UPDATE employee SET role_id=? WHERE employee.first_name=? AND employee.last_name=?';
    var args=[roleId, employee[0], employee[1]];
    var rows = await db.query(query, args);
    console.log(`Updated employee ${employee[0]} ${employee[1]} with role ${employee.role}`);
}
